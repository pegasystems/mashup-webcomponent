/* eslint-disable no-underscore-dangle */
import { render } from 'lit-html';
import { genAttachmentsList } from '../../views/attachments';
import {
  setFormInlineError, getFormData, addRowToPageList, deleteRowFromPageList,
} from '../../utils/form-utils';
import PegaElement from '../../main/element';

/**
 * This interface is responsible for fetching the data and sending the data to the Pega Platform using the DX API
 * It will update the case-data element using the lit-html render function
 *
 */
export default class PegaServices extends PegaElement {
  resetError = (event) => {
    this.errorMsg = '';
    this.validationMsg = '';
    this.actionAreaCancel(event);
  };

  reloadWorkList = (event) => {
    this.cases = [];
    this.requestUpdate();
    this.actionAreaCancel(event);
  };

  actionAreaCancel = (event) => {
    if (event) event.preventDefault();
    this.bShowConfirm = false;
    this.bShowNew = false;
    this.caseID = '';
    this.data = {};
    this.content = {};
    this.casedata = {};
    this.attachmentcategories = [];
    this.casepyStatusWork = '';
    this.assignmentID = '';
    this.actionID = '';
    this.errorMsg = '';
    this.numAttachments = 0;
    this.validationMsg = '';
    this.name = '';
    if (this.action === 'workList') {
      this.fetchData('portal');
    } else {
      this.dispatchEvent(
        new CustomEvent('message', {
          detail: { type: 'cancel' },
        }),
      );
    }
  };

  actionAreaSave = (event) => {
    if (event) event.preventDefault();
    if (event.target.getAttribute('data-submit') === null) {
      event.target.textContent = 'Saving...';
      event.target.disabled = true;
    }
    const form = this.getRenderRoot().querySelector('#case-data');
    if (form) {
      this.content = {};
      getFormData(form, this.content);
      if (this.assignmentID !== '') {
        this.sendData('savecase', { id: this.caseID, actionid: '', target: event.target });
      } else {
        this.sendData('savecase', { id: this.caseID, actionid: this.actionID, target: event.target });
      }
    }
  };

  actionRefresh = () => {
    const form = this.getRenderRoot().querySelector('#case-data');
    if (form) {
      this.content = {};
      this.validationMsg = '';
      getFormData(form, this.content);
      this.requestUpdate();
      // Not sure when we would run the assignment action... TODO
      //  this.fetchData('assignmentaction', { id: this.assignmentID, actionid: this.actionID });
      this.fetchData('caseaction', { id: this.caseID, actionid: this.actionID });
    }
  };

  displayActions = () => {
    if (this.data.actions) {
      return this.genActionsList(this.name, this.data);
    }
    if (this.casedata.actions) {
      return this.genActionsList(this.name, this.casedata);
    }
    return null;
  };

  displayAttachments = (el) => {
    this.fetchData('attachmentcategories', { id: this.caseID });
    this.fetchData('attachments', { id: this.caseID, target: el });
  };

  submitForm = (event, type) => {
    const form = this.getRenderRoot().querySelector('#case-data');
    this.content = {};
    getFormData(form, this.content);
    if (form.checkValidity()) {
      if (type !== 'create') {
        if (this.data.ID !== '') {
          this.sendData('submitassignment', { id: this.data.ID, actionid: this.actionID });
        } else {
          this.sendData('submitcaseaction', { id: this.data.caseID, actionid: this.actionID });
        }
      } else {
        this.sendData('newwork', { id: this.casetype });
      }
    } else {
      form.reportValidity();
    }
    event.preventDefault();
    return false;
  };

  createCase = (event) => {
    this.name = 'New Case';
    this.bShowNew = true;
    if (event) {
      let el = event.target;
      if (event.path && event.path.length > 0) {
        el = event.path[0];
      } else if (event.originalTarget) {
        el = event.originalTarget;
      }
      if (el) {
        this.casetype = el.getAttribute('data-value');
        this.name = `New ${el.textContent} `;
      }
    }
    this.content = this.initialContent;
    this.caseID = '';
    this.data = {};
    this.casedata = {};
    /* Check if we need to show the New harness or skip the New harness */
    if (this.casetypes[this.casetype]) {
      this.sendData('newwork', { id: this.casetype });
    } else {
      this.errorMsg = `Case '${this.casetype}' is not defined`;
      console.error(`Case '${this.casetype}' is not defined`);
    }
    this.requestUpdate();
  };

  runAction = (event) => {
    let el = event.target;
    if (event.path && event.path.length > 0) {
      el = event.path[0];
    } else if (event.originalTarget) {
      el = event.originalTarget;
    }
    if (el && el.getAttribute('data-value') !== null) {
      this.actionID = el.getAttribute('data-value');
      this.name = el.innerText;
      this.data.ID = '';
      this.actionRefresh();
    }
    const casedata = this.getRenderRoot().querySelector('#case-data');
    if (casedata != null) {
      render(this.genLoadingIndicator(), casedata);
    }
  };

  openCase = (event) => {
    event.preventDefault();
    this.caseID = event.target.getAttribute('data-id');
    this.name = '';
    this.data = {};
    this.casedata = {};
    if (this.caseID.indexOf('ASSIGN-WORKLIST') === 0) {
      this.assignmentID = this.caseID;
      this.caseID = '';
    } else {
      this.assignmentID = '';
    }
    const casedata = this.getRenderRoot().querySelector('#case-data');
    if (casedata != null) {
      render(this.genLoadingIndicator(), casedata);
    }
    this.requestUpdate();
  };

  getData = (pageID, el) => {
    if (this.dataPages[pageID]) {
      render(this.showDataList(this.dataPages[pageID]), el.nextElementSibling);
    } else {
      this.fetchData('data', { id: pageID, element: el });
    }
  };

  refreshAssignment = (el, refreshFor) => {
    const form = this.getRenderRoot().querySelector('#case-data');
    let node = el;
    if (form) {
      this.content = {};
      getFormData(form, this.content);
      /* If node is defined - it could be a addRow or deleteRow action */
      if (node) {
        if (node.tagName === 'svg') node = node.parentNode;
        const action = node.getAttribute('data-action-click');
        const ref = node.getAttribute('data-ref');
        if (ref !== null && action != null) {
          if (action === 'addRow') {
            addRowToPageList(this.content, ref, node.getAttribute('data-newrow'));
            // eslint-disable-next-line no-param-reassign
            refreshFor = form;
          } else if (action === 'deleteRow') {
            deleteRowFromPageList(this.content, ref);
          }
        }
      }
      if (this.bShowNew === true) {
        this.sendData('refreshnew', { id: this.casetype, refreshFor });
      } else {
        this.sendData('refreshassignment', { id: this.assignmentID, actionid: this.actionID, refreshFor });
      }
    }
  };

  /* Clear the loading indicator */
  clearLoadingIndicator() {
    const el = this.getRenderRoot().querySelector('#case-data');
    if (el && el.querySelector('.loading') !== null) {
      render(null, el);
    }
  }

  /* Send an external event outside of the element */
  sendExternalEvent(type) {
    this.dispatchEvent(
      new CustomEvent('message', {
        detail: { type },
      }),
    );
  }

  /* Generic handler for error message */
  genErrorMessage(error) {
    this.clearLoadingIndicator();
    if (error.message && error.message.indexOf('JSON.parse') !== -1) {
      console.error('Error:', error);
    } else if (error.message && error.message.indexOf('Unexpected token') !== -1) {
      this.errorMsg = 'Error 404: Resource not found';
      this.requestUpdate();
      console.error(this.errorMsg);
    } else {
      if (error.status) {
        if (error.statusText !== '') {
          this.errorMsg = `Error ${error.status}: ${error.statusText}`;
        } else if (error.status === 401) {
          this.errorMsg = 'Error 401: Authentication error';
        } else if (error.status === 423) {
          this.errorMsg = 'Error 423: Resource is locked by another user';
        } else if (error.status === 500) {
          this.errorMsg = 'Error 500: Internal server error';
        } else {
          this.errorMsg = `Error ${error.status}`;
        }
      } else if (error.name && error.message) {
        this.errorMsg = `Error ${error.name}: ${error.message}`;
      } else if (typeof error === 'string') {
        this.errorMsg = error;
      } else {
        this.errorMsg = 'Critical error';
      }
      this.requestUpdate();
      console.error('Error:', error);
    }
  }

  /**
   * fetch the data using the DX API
   *
   */
  fetchData(type, props) {
    const {
      id, actionid, target,
    } = props || {};
    let authToken = '';
    if (this.authentication === '' || this.authentication === 'basic') {
      authToken = `Basic ${btoa(`${this.username}:${this.password}`)}`;
    }
    if (this.token !== '') {
      authToken = `Bearer ${this.token}`;
    }
    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: authToken,
    };
    const reqHeaders = {
      method: 'GET',
      headers,
      mode: 'cors',
    };
    let apiurl = `${this.url}/api/application/v2/`;
    switch (type) {
      case 'portal':
        apiurl += `portals/${this.portalName}`;
        break;
      case 'assignment':
        apiurl += `assignments/${id}`;
        break;
      case 'view':
        apiurl += `cases/${id}/views/${actionid}`;
        break;
      case 'caseaction':
        apiurl += `cases/${id}/actions/${actionid}`;
        break;
      case 'attachment':
        apiurl += `attachments/${id}`;
        break;
      case 'attachments':
        apiurl += `cases/${id}/attachments`;
        break;
      case 'attachmentcategories':
        apiurl += `cases/${id}/attachment_categories`;
        break;
    }
    fetch(apiurl, reqHeaders)
      .then((res) => {
        if (type === 'assignment') {
          this.etag = res.headers.get('etag');
        } else if (type === 'attachment') {
          return res.text();
        }
        if (res.ok || res.status === 404) {
          return res.json();
        }
        if (res.status === 401) {
          this.token = '';
          this.sendData('authenticate', { ...props, type, cmd: 'fetchData' });
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((response) => {
        try {
          if (response.errors && response.errors.length > 0) {
            return;
          }
          if (response.pyLocalizedValue) {
            this.errorMsg = `Error: ${response.pyLocalizedValue}`;
            this.requestUpdate();
            return;
          }
          if (response.errorDetails && response.errorDetails.length > 0) {
            this.errorMsg = `Error ${response.errorDetails[0].message}: ${response.localizedValue}`;
            this.clearLoadingIndicator();
            this.requestUpdate();
            console.error('Error:', response);
            return;
          }
          const el = this.getRenderRoot().querySelector('#case-data');
          switch (type) {
            case 'portal':
              if (!this.casetypes) {
                this.casetypes = {};
                let listofcasestocreate = [];
                if (response.data && response.data.D_pzCasesAvailableToCreateForPortal && response.data.D_pzCasesAvailableToCreateForPortal.pxResults) {
                  listofcasestocreate = response.data.D_pzCasesAvailableToCreateForPortal.pxResults;
                } else if (response.data && response.data.pyPortal && response.data.pyPortal.pyCaseTypesAvailableToCreate) {
                  listofcasestocreate = response.data.pyPortal.pyCaseTypesAvailableToCreate;
                }
                for (const obj of listofcasestocreate) {
                  /* If the action is worklist and the createCase is set on the mashup component, we need to filter the list */
                  if (this.action !== 'workList' || this.casetype === '' || this.casetype === obj.pyClassName) {
                    this.casetypes[obj.pyClassName] = {
                      canCreate: true,
                      name: obj.pyLabel,
                    };
                  }
                }
              }
              this.cases = [];
              let myworklist = [];
              if (response.data && response.data.D_pyUserWorkList && response.data.D_pyUserWorkList.pxResults) {
                myworklist = response.data.D_pyUserWorkList.pxResults;
              } else if (response.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults) {
                myworklist = response.data[response.uiResources.context_data.pyPortal.summary_of_lists__.D_pyMyWorkList.pxResults
                  .replace('.pxResults', '')].pxResults;
              }
              if (myworklist.length > 0) {
                for (const obj of myworklist) {
                  this.cases.push(
                    {
                      name: obj.pyLabel,
                      caseID: obj.pxRefObjectKey,
                      urgency: obj.pxUrgencyAssign,
                      ID: obj.pzInsKey,
                    },
                  );
                }
              }
              this.requestUpdate();
              break;
            case 'assignment':
              this.isDeclarativeTarget = false;
              this.refreshOnChange = false;
              this.data = response;
              this.casedata = response.data.caseInfo;
              this.data.name = this.casedata.content.pyLabel;
              this.caseID = this.casedata.ID;
              this.data.caseID = this.caseID;
              this.data.ID = id;
              for (const assignment of this.casedata.assignments) {
                if (id === assignment.ID && assignment.actions && assignment.actions.length > 0) {
                  this.actionID = assignment.actions[0].ID;
                  break;
                }
              }
              this.casepyStatusWork = this.casedata.status;
              this.data.actions = this.casedata.availableActions;
              this.name = this.casedata.stageLabel;
              this.content = {};
              render(this.renderMainLayout(response.uiResources.resources.views[this.casedata.content.pyViewName], 'Obj'), el);
              this.requestUpdate();
              el.focus();
              break;
            case 'view':
              if (!el) {
                console.error('Error: case data are not present when retrieving the page');
                break;
              }
              this.data = response;
              this.casedata = response.data.caseInfo;
              this.data.name = this.casedata.content.pyLabel ? this.casedata.content.pyLabel : this.casedata.name;
              this.casedata.actions = this.casedata.availableActions;
              this.casedata.content.pyID = this.casedata.ID;
              this.data.ID = this.casedata.ID;
              this.casepyStatusWork = this.casedata.status;
              this.name = this.casedata.stageLabel;
              this.content = {};
              if (this.bShowAttachments === 'true') {
                this.fetchData('attachments', { id: this.caseID });
              }
              this.name = response.data.caseInfo.name;
              render(this.renderReviewLayout(response.uiResources.resources.views[actionid], 'Obj'), el);
              this.requestUpdate();
              el.focus();
              break;
            case 'caseaction':
              this.isDeclarativeTarget = false;
              this.refreshOnChange = false;
              this.data = response;
              this.casedata = response.data.caseInfo;
              this.data.name = this.casedata.content.pyLabel;
              this.caseID = this.casedata.ID;
              this.data.caseID = this.caseID;
              this.data.ID = '';
              this.casepyStatusWork = this.casedata.status;
              this.data.actions = this.casedata.availableActions;
              this.name = this.casedata.stageLabel;
              this.content = {};
              render(this.renderMainLayout(response.uiResources.resources.views[response.uiResources.root.config.name], 'Obj'), el);
              this.requestUpdate();
              el.focus();
              break;
            case 'attachments':
              let files = response.attachments;
              if (!files) files = [];
              this.numAttachments = files.length;
              if (target) {
                render(genAttachmentsList(target, files, this.caseID, this), target);
              }
              this.requestUpdate();
              break;
            case 'attachmentcategories':
              this.attachmentcategories = response.attachment_categories;
              break;
            case 'attachment':
              target(response);
              break;
          }
        } catch (e) {
          this.errorMsg = `Error: ${e}`;
          this.requestUpdate();
          console.error('Error:', e);
        }
      })
      .catch((error) => {
        this.genErrorMessage(error);
      });
  }

  sendData(type, props) {
    const {
      id, actionid, target,
    } = props;
    let authToken = '';
    if (this.authentication === '' || this.authentication === 'basic') {
      authToken = `Basic ${btoa(`${this.username}:${this.password}`)}`;
    }
    if (this.token !== '') {
      authToken = `Bearer ${this.token}`;
    }
    const headers = {
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: authToken,
    };
    const reqHeaders = {
      method: 'POST',
      headers,
      mode: 'cors',
    };
    let apiurl = `${this.url}/api/application/v2/`;
    this.validationMsg = '';
    switch (type) {
      case 'authenticate':
        if (this.authentication === 'oauth2password') {
          reqHeaders.body = `grant_type=password&client_id=${this.clientid}&client_secret=${this.clientsecret}` +
          `&username=${this.username}&password=${this.password}`;
        } else if (this.authentication === 'oauth2clientcredentials') {
          reqHeaders.body = `grant_type=client_credentials&client_id=${this.clientid}&client_secret=${this.clientsecret}`;
        }
        reqHeaders.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        apiurl = `${this.url}/PRRestService/oauth2/v1/token`;
        break;
      case 'newwork':
        apiurl += 'cases?viewType=form';
        reqHeaders.body = JSON.stringify({
          caseTypeID: id,
          processID: 'pyStartCase',
          content: {},
        });
        break;
      case 'submitassignment':
        reqHeaders.body = JSON.stringify({ content: this.content });
        reqHeaders.method = 'PATCH';
        reqHeaders.headers['If-Match'] = this.etag;
        apiurl += `assignments/${id}/actions/${actionid}?viewType=form`;
        break;
      case 'submitcaseaction':
        reqHeaders.body = JSON.stringify({ content: this.content });
        reqHeaders.method = 'PATCH';
        reqHeaders.headers['If-Match'] = this.etag;
        apiurl += `cases/${id}/actions/${actionid}?viewType=form`;
        break;
      case 'refreshassignment':
        apiurl += `assignments/${id}/actions/${actionid}/refresh`;
        reqHeaders.headers['If-Match'] = this.etag;
        reqHeaders.method = 'PATCH';
        reqHeaders.body = JSON.stringify({
          content: this.content,
          contextData: true,
        });
        break;
      case 'dataviews':
        apiurl += `data_views/${id}`;
        reqHeaders.body = JSON.stringify(props.content);
        break;
      case 'uploadattachment':
        apiurl += 'attachments/upload';
        delete headers['Content-Type']; /* Important to not defined the content-type for multi-form */
        const formData = new FormData();
        formData.append('File', actionid, actionid.name);
        reqHeaders.body = formData;
        break;
      case 'attachments':
        apiurl += `cases/${id}/attachments`;
        reqHeaders.body = JSON.stringify({
          attachments: actionid,
        });
        break;
      case 'deleteattachment':
        apiurl += `attachments/${id}`;
        reqHeaders.method = 'DELETE';
        break;
    }
    fetch(apiurl, reqHeaders)
      .then((res) => {
        if (type === 'deleteattachment' || type === 'attachments') {
          return res.text();
        }
        if (type === 'submitassignment' || type === 'newwork') {
          this.etag = res.headers.get('etag');
        }
        if (res.status === 200 || res.status === 201 || (res.status >= 400 && res.status < 500) || res.status === 500) {
          if (res.status === 401) {
            this.token = '';
            this.sendData('authenticate', { ...props, type, cmd: 'sendData' });
          }
          return res.json();
        }
        if (res.ok) {
          return Promise.resolve('ok');
        }
        return Promise.reject(res);
      })
      .then((response) => {
        if (response.errors && response.errors.length > 0) {
          return;
        } if (response.access_token) {
          this.token = response.access_token;
          if (props !== {} && props.type && props.cmd) {
            if (props.cmd === 'sendData') {
              this.sendData(props.type, props);
            } else {
              this.fetchData(props.type, props);
            }
          }
        } else if (response.errorDetails && response.errorDetails.length > 0) {
          if (response.errorDetails[0].localizedValue) {
            const form = this.getRenderRoot().querySelector('#case-data');
            setFormInlineError(form, response.errorDetails);
            this.validationMsg = this.genPageValidationErrors(response);
          } else {
            this.errorMsg = `Error ${response.errorDetails[0].message}: ${response.localizedValue}`;
          }
          this.clearLoadingIndicator();
          if (target) {
            target.disabled = false;
            target.textContent = 'Save';
          }
          if (type === 'submitassignment') {
            /* In case of error - the etag is invalid - we need to get a new one */
            this.fetchData('assignment', { id: this.assignmentID });
          }
        } else {
          const el = this.getRenderRoot().querySelector('#case-data');
          if (type === 'dataviews') {
            debugger;
          }
          if (type === 'refreshassignment') {
            if (el && response.data.caseInfo && response.data.caseInfo.content) {
              this.data.data.caseInfo.content = response.data.caseInfo.content;
              this.casedata.content = response.data.caseInfo.content;
              render(this.renderMainLayout(this.data.uiResources.resources.views[this.actionID], 'Obj'), el);
            }
            return;
          }
          if (type === 'deleteattachment') {
            if (target && !target.classList.contains('attach-files')) {
              this.fetchData('attachments', { id: this.caseID, target });
            }
          } else if (type === 'attachments') {
            this.fetchData('attachments', { id: this.caseID, target });
          } else if (type === 'uploadattachment') {
            let filepartidx = actionid.name.lastIndexOf('.');
            if (filepartidx === -1) filepartidx = actionid.name.length;
            const fileExt = actionid.name.substring(filepartidx + 1);
            const meta = [{
              type: 'File',
              category: actionid.category,
              fileType: fileExt,
              name: actionid.displayName,
              ID: response.ID,
            }];
            this.sendData('attachments', { id: this.caseID, actionid: meta, target });
            return;
          }
          if (response.confirmationNote) {
            this.bShowConfirm = true;
            this.caseID = response.data.caseInfo.ID;
            this.fetchData('view', { id: this.caseID, actionid: 'pyReview' });
          } else if (response.uiResources) {
            this.bShowNew = false;
            this.assignmentID = response.nextAssignmentInfo.ID;
            this.sendExternalEvent(type);
            this.data = response;
            this.casedata = response.data.caseInfo;
            this.data.name = this.casedata.content.pyLabel ? this.casedata.content.pyLabel : this.casedata.name;
            this.caseID = this.casedata.content.pzInsKey;
            this.data.caseID = response.data.caseInfo.ID;
            this.data.ID = this.assignmentID;
            this.casedata.content.pyViewName = response.uiResources.root.config.name;
            this.actionID = this.casedata.content.pyViewName;
            if (this.casedata.assignments) {
              for (const assignment of this.casedata.assignments) {
                if (assignment.processID === 'pzQuestionPageScr' && this.data.ID === assignment.ID && assignment.actions && assignment.actions.length > 0) {
                  this.actionID = assignment.actions[0].ID;
                  break;
                }
              }
            }
            this.casepyStatusWork = response.data.caseInfo.status;
            this.data.actions = response.data.caseInfo.availableActions;
            this.name = response.data.caseInfo.stageLabel;
            if (el) {
              render(this.renderMainLayout(response.uiResources.resources.views[this.casedata.content.pyViewName], 'Obj'), el);
              el.focus();
            }
          }
        }
        this.requestUpdate();
      })
      .catch((error) => {
        this.genErrorMessage(error);
      });
  }
}
