import { render } from 'lit';
import { genAttachmentsList } from '../../views/attachments';
import { RenderLocalAction } from '../../views/local-action';
import {
  getFormData, setFormData, setFormInlineError, genContentPayload, addRowToPageList, deleteRowFromPageList,
} from '../../utils/form-utils';
import PegaElement from '../../main/element';
import {
  genActionsList, genCaseTypesList,
} from './views';
import { showDataList } from '../../views/datalist';
import { LoadingIndicator } from '../../views/loading';

/**
 * This interface is responsible for fetching the data and sending the data to the Pega Platform using the DX API
 * It will update the case-data element using the lit render function
 *
 */
export default class PegaServices extends PegaElement {
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

  submitForm = (event, type) => {
    event.preventDefault();

    /* If the cancel button is in a modal dialog - just close the modal */
    if (event.target && event.target.closest('.mashup-modal') !== null) {
      const form = event.target.closest('#modalcontent');
      getFormData(form, this.content, this.pageInstructions, this.casedata.content);
      if (this.validateForm(form)) {
        this.sendData('submitassignment', { id: this.data.ID, actionid: this.actionID, target: form });
      } else {
        this.reportFormValidity(form);
      }
    } else {
      const form = this.getRenderRoot().querySelector('#case-data');
      getFormData(form, this.content, this.pageInstructions, this.casedata.content);
      if (this.validateForm(form)) {
        if (type !== 'create') {
          this.sendData('submitassignment', { id: this.data.ID, actionid: this.actionID });
        } else {
          this.sendData('newwork', { id: this.casetype });
        }
      } else {
        this.reportFormValidity(form);
      }
    }
    return false;
  };

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
    /* If the cancel button is in a modal dialog - just close the modal */
    if (event.target && event.target.closest('.mashup-modal') !== null) {
      const Btn = event.target.closest('.mashup-modal').querySelector('button');
      if (Btn !== null) {
        Btn.click();
        return;
      }
    }
    this.bShowConfirm = false;
    this.bShowNew = false;
    this.caseID = '';
    this.data = {};
    this.content = {};
    this.pageInstructions = [];
    this.casedata = {};
    this.attachmentcategories = [];
    this.casepyStatusWork = '';
    this.assignmentID = '';
    this.actionID = '';
    this.errorMsg = '';
    this.numAttachments = 0;
    this.validationMsg = '';
    this.name = '';
    if (this.action === 'workList' || this.action === 'taskList') {
      this.fetchData('worklist');
    }
    if (this.action === 'dataView') {
      this.fetchData('dataview');
    }
    this.sendExternalEvent({ type: 'cancel' });
  };

  actionAreaSave = (event) => {
    if (event) event.preventDefault();
    if (event.target.getAttribute('data-submit') === null) {
      event.target.textContent = 'Saving...';
      event.target.disabled = true;
    }
    const form = this.getRenderRoot().querySelector('#case-data');
    if (form) {
      getFormData(form, this.content, this.pageInstructions, this.casedata.content);
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
      this.validationMsg = '';
      getFormData(form, this.content, this.pageInstructions, this.casedata.content);
      if (this.assignmentID !== '') {
        this.fetchData('assignmentaction', { id: this.assignmentID, actionid: this.actionID });
      } else {
        this.fetchData('caseaction', { id: this.caseID, actionid: this.actionID });
      }
    }
  };

  displayCasesTypes = () => genCaseTypesList(this.casetypes);

  displayActions = () => {
    if (this.data.actions) {
      return genActionsList(this.name, this.data);
    }
    if (this.casedata.actions) {
      return genActionsList(this.name, this.casedata);
    }
    return null;
  };

  displayAttachments = (el) => {
    this.fetchData('attachmentcategories', { id: this.caseID });
    this.fetchData('attachments', { id: this.caseID, target: el });
  };

  displayLocalAction = (flowAction, el) => {
    const form = this.getRenderRoot().querySelector('#case-data');
    if (form) {
      getFormData(form, this.content, this.pageInstructions, this.casedata.content);
      if (this.assignmentID !== '') {
        const that = this;
        this.sendData('savecase', { id: this.caseID }, () => {
          this.actionID = flowAction;
          that.fetchData('assignmentaction', { id: this.assignmentID, actionid: flowAction, target: el });
        });
      }
    }
  };

  reloadAssignment = (actionid) => {
    this.actionID = actionid;
    this.fetchData('assignmentaction', { id: this.assignmentID, actionid });
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
    this.pageInstructions = [];
    this.caseID = '';
    this.data = {};
    this.casedata = {};
    /* Check if we need to show the New harness or skip the New harness */
    if (this.casetypes[this.casetype]) {
      if (this.casetypes[this.casetype].requiresFieldsToCreate === 'true') {
        this.fetchData('newwork', { id: this.casetype });
      } else {
        this.sendData('newwork', { id: this.casetype });
      }
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
      this.actionRefresh();
    }
    const casedata = this.getRenderRoot().querySelector('#case-data');
    if (casedata != null) {
      render(LoadingIndicator(), casedata);
    }
  };

  openCase = (event) => {
    event.preventDefault();
    this.caseID = event.target.getAttribute('data-id');
    this.name = '';
    this.data = {};
    this.casedata = {};
    if (this.caseID.indexOf('ASSIGN-WORKLIST') === 0) {
      this.sendExternalEvent({ type: 'openassignment', id: this.caseID });
      this.assignmentID = this.caseID;
      this.caseID = '';
    } else {
      this.sendExternalEvent({ type: 'opencase', id: this.caseID });
      this.assignmentID = '';
    }
    const casedata = this.getRenderRoot().querySelector('#case-data');
    if (casedata != null) {
      render(LoadingIndicator(), casedata);
    }
    this.requestUpdate();
  };

  getData = (pageID, el) => {
    if (this.dataPages[pageID]) {
      render(showDataList(this.dataPages[pageID]), el.nextElementSibling);
    } else {
      this.fetchData('data', { id: pageID, element: el });
    }
  };

  refreshAssignment = (el, refreshFor) => {
    const form = this.getRenderRoot().querySelector('#case-data');
    let node = el;
    if (form) {
      getFormData(form, this.content, this.pageInstructions, this.casedata.content);
      /* If node is defined - it could be a addRow or deleteRow action */
      if (node) {
        if (node.tagName === 'path') node = node.parentNode;
        if (node.tagName === 'svg') node = node.parentNode;
        const action = node.getAttribute('data-action-click');
        const ref = node.getAttribute('data-ref');
        if (ref !== null && action !== null) {
          if (action === 'addRow') {
            const instr = addRowToPageList(this.casedata.content, ref, node.getAttribute('data-newrow'));
            if (instr !== null) {
              this.pageInstructions.push(instr);
            }
          } else if (action === 'deleteRow') {
            const instr = deleteRowFromPageList(this.casedata.content, ref);
            if (instr !== null) {
              this.pageInstructions.push(instr);
            }
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

  /**
   * fetch the data using the DX API
   *
   */
  fetchData(type, props) {
    const {
      id, actionid, target, element,
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
    let apiurl = `${this.url}/api/v1/`;
    switch (type) {
      case 'worklist':
        apiurl += 'assignments';
        break;
      case 'dataview':
        apiurl += `data/D_pyUserWorklist?ID=${window.PegaCSWSS.ContactID}&Type=CONTACT`;
        break;
      case 'casetypes':
        apiurl += 'casetypes';
        break;
      case 'newwork':
        apiurl += `casetypes/${id}`;
        break;
      case 'assignment':
        apiurl += `assignments/${id}`;
        break;
      case 'case':
        apiurl += `cases/${id}`;
        break;
      case 'data':
        apiurl += `data/${id}`;
        break;
      case 'page':
        apiurl += `cases/${id}/pages/${actionid}`;
        break;
      case 'view':
        apiurl += `cases/${id}/views/${actionid}`;
        break;
      case 'assignmentaction':
        apiurl += `assignments/${id}/actions/${actionid}`;
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
        if (type === 'case') {
          this.etag = res.headers.get('etag');
          if (target) {
            target.disabled = false;
            target.textContent = 'Save';
          }
        } else if (type === 'attachment') {
          return res.text();
        }
        if (res.ok || res.status === 404) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((response) => {
        try {
          if (response.errors && response.errors.length > 0) {
            this.errorMsg = `Error ${response.errors[0].ID}: ${response.errors[0].message}`;
            this.clearLoadingIndicator();
            this.requestUpdate();
            console.error('Error:', response);
            return;
          }
          const el = this.getRenderRoot().querySelector('#case-data');
          switch (type) {
            case 'casetypes':
              this.casetypes = {};
              for (const obj of response.caseTypes) {
                /* If the action is worklist and the createCase is set on the mashup component, we need to filter the list */
                if ((this.action !== 'workList' && this.action !== 'taskList') || this.casetype === '' || this.casetype === obj.ID) {
                  this.casetypes[obj.ID] = {
                    canCreate: obj.CanCreate,
                    name: obj.name,
                    requiresFieldsToCreate: false,
                  };
                }
              }
              if (this.action === 'createNewWork') {
                this.createCase();
              }
              break;
            case 'worklist':
              this.cases = response.assignments;
              this.requestUpdate();
              break;
            case 'dataView':
              this.cases = response.pxResults;
              this.requestUpdate();
              break;
            case 'assignment':
              this.data = response;
              this.caseID = response.caseID;
              if (this.name === '') this.name = ' ';
              this.fetchData('case', { id: this.caseID });
              if (response.actions.length > 0 && response.actions[0].ID) {
                this.actionID = response.actions[0].ID;
                this.name = response.actions[0].name;
                this.fetchData('assignmentaction', { id, actionid: this.actionID });
              } else {
                this.fetchData('view', { id: this.caseID, actionid: 'pyCaseInformation' });
              }
              break;
            case 'case':
              this.casedata = response;
              this.content = {};
              this.pageInstructions = [];
              this.numAttachments = 0;
              if (this.name === '') {
                this.name = this.casedata.content.pyLabel;
              }
              this.casepyStatusWork = this.casedata.content.pyStatusWork;
              this.requestUpdate();
              if (this.assignmentID === '') {
                this.fetchData('view', { id: this.caseID, actionid: 'pyCaseInformation' });
              }
              if (this.bShowAttachments === 'true') {
                this.fetchData('attachments', { id: this.caseID });
              }
              break;
            case 'data':
              this.dataPages[id] = response;
              if (!element.nextElementSibling) {
                console.error('Error: case data are not present when retrieving the data');
                break;
              }
              render(this.showDataList(response), element.nextElementSibling);
              break;
            case 'caseaction':
              if (!el) {
                console.error('Error: case data are not present when retrieving the assignmentaction');
                break;
              }
              if (!response.view.groups) {
                this.errorMsg = 'Error: view is not defined';
                this.clearLoadingIndicator();
                this.requestUpdate();
                return;
              }
              render(this.renderSaveCaseLayout(response.view.groups, 'Obj'), el);
              el.focus();
              break;
            case 'assignmentaction':
              if (!el) {
                console.error('Error: case data are not present when retrieving the assignmentaction');
                break;
              }
              if (!response.view.groups) {
                this.errorMsg = 'Error: view is not defined';
                this.clearLoadingIndicator();
                this.requestUpdate();
                return;
              }
              if (target) {
                this.actionID = actionid;
                render(RenderLocalAction(response.name, this.renderMainLayout(response.view.groups, 'Obj')), target);
                target.focus();
              } else {
                this.name = response.name;
                this.requestUpdate();
                render(this.renderMainLayout(response.view.groups, 'Obj'), el);
                el.focus();
              }
              break;
            case 'page':
              if (!el) {
                console.error('Error: case data are not present when retrieving the page');
                break;
              }
              render(this.renderMainLayout(response.groups, 'Obj'), el);
              el.focus();
              break;
            case 'view':
              if (!el) {
                console.error('Error: case data are not present when retrieving the page');
                break;
              }
              this.content = {};
              this.pageInstructions = [];
              if (actionid === 'pyCaseInformation') {
                this.name = response.name;
                render(this.renderReviewLayout(response.groups, 'Obj'), el);
              } else {
                this.name = response.name;
                render(this.renderMainLayout(response.groups, 'Obj'), el);
              }
              el.focus();
              break;
            case 'newwork':
              this.content = {};
              this.pageInstructions = [];
              if (!el) {
                console.error('Error: case data are not present when retrieving the newwork');
                break;
              }
              render(this.renderCreateCaseLayout(response.creation_page.groups[0].layout.groups, 'Obj'), el);
              el.focus();
              const form = this.getRenderRoot().querySelector('#case-data');
              if (form) {
                setFormData(form, this.initialContent);
              }
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

  sendData(type, props, callback) {
    const {
      id, actionid, target, refreshFor,
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
    const { pageInstructions, pageupdate } = genContentPayload(this.content, this.pageInstructions);
    let apiurl = `${this.url}/api/v1/`;
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
        apiurl += 'cases';
        reqHeaders.body = JSON.stringify({
          content: pageupdate,
          pageInstructions,
          caseTypeID: id,
        });
        break;
      case 'submitassignment':
        reqHeaders.body = JSON.stringify({
          content: pageupdate,
          pageInstructions,
        });
        apiurl += `assignments/${id}?actionID=${actionid}`;
        break;
      case 'savecase':
        apiurl += `cases/${id}`;
        if (actionid && actionid !== '') {
          apiurl += `?actionID=${actionid}`;
        }
        reqHeaders.headers['If-Match'] = this.etag;
        reqHeaders.method = 'PUT';
        reqHeaders.body = JSON.stringify({
          content: pageupdate,
          pageInstructions,
        });
        break;
      case 'refreshnew':
        apiurl += `casetypes/${id}/refresh`;
        if (refreshFor && refreshFor !== '') {
          apiurl += `?refreshFor=${refreshFor}`;
        }
        reqHeaders.headers['If-Match'] = this.etag;
        reqHeaders.method = 'PUT';
        reqHeaders.body = JSON.stringify({
          content: pageupdate,
          pageInstructions,
        });
        break;
      case 'refreshassignment':
        apiurl += `assignments/${id}/actions/${actionid}/refresh`;
        if (refreshFor && refreshFor !== '') {
          apiurl += `?refreshFor=${refreshFor}`;
        }
        reqHeaders.headers['If-Match'] = this.etag;
        reqHeaders.method = 'PUT';
        reqHeaders.body = JSON.stringify({
          content: pageupdate,
          pageInstructions,
        });
        break;
      case 'refreshcase':
        apiurl += `cases/${id}/actions/${actionid}/refresh`;
        if (refreshFor && refreshFor !== '') {
          apiurl += `?refreshFor=${refreshFor}`;
        }
        reqHeaders.headers['If-Match'] = this.etag;
        reqHeaders.method = 'PUT';
        reqHeaders.body = JSON.stringify({
          content: pageupdate,
          pageInstructions,
        });
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
        if (res.status === 200 || res.status === 201 || (res.status >= 400 && res.status < 500)) {
          return res.json();
        }
        if (res.ok) {
          return Promise.resolve('ok');
        }
        return Promise.reject(res);
      })
      .then((response) => {
        if (response.errors && response.errors.length > 0) {
          /* Only look at the first error... not sure if the other errors are relevant */
          if (response.errors[0].ValidationMessages) {
            if (target && target.id === 'modalcontent') {
              setFormInlineError(target, response.errors[0].ValidationMessages, this);
              render(this.genPageValidationErrors(response), target.previousElementSibling);
            } else {
              const form = this.getRenderRoot().querySelector('#case-data');
              setFormInlineError(form, response.errors[0].ValidationMessages, this);
              this.validationMsg = this.genPageValidationErrors(response);
            }
          } else {
            this.errorMsg = `Error ${response.errors[0].ID}: ${response.errors[0].message}`;
          }
          this.clearLoadingIndicator();
          if (target && target.tagName === 'BUTTON') {
            target.disabled = false;
            target.textContent = 'Save';
          }
        } else if (response.access_token) {
          this.token = response.access_token;
        } else {
          const el = this.getRenderRoot().querySelector('#case-data');
          if (type === 'refreshcase' || type === 'refreshassignment' || type === 'refreshnew') {
            if (!el) {
              console.error('Error: case data are not present');
              return;
            }
            if (type === 'refreshnew' && response.creation_page && response.creation_page.groups && response.creation_page.groups[0]) {
              render(this.renderCreateCaseLayout(response.creation_page.groups[0].layout.groups, 'Obj'), el);
            } else if (response.view && response.view.groups) {
              render(this.renderMainLayout(response.view.groups, 'Obj'), el);
            }
          } else if (type === 'savecase') {
            this.fetchData('case', { id: this.caseID, target });
            if (callback) {
              callback();
              return;
            }
          } else if (type === 'deleteattachment' || type === 'attachments') {
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
          if (response.ID) {
            this.caseID = response.ID;
            if (type === 'newwork') {
              this.sendExternalEvent({ type: 'newwork', id: this.caseID });
            }
          }
          if (response.nextAssignmentID) {
            if (el) {
              render(this.genLoadingIndicator(), el);
              this.requestUpdate();
            }
            this.bShowNew = false;
            this.assignmentID = response.nextAssignmentID;
            this.fetchData('assignment', { id: this.assignmentID });
          } else if (response.nextPageID) {
            if (el) {
              render(this.genLoadingIndicator(), el);
              this.requestUpdate();
            }
            if (response.nextPageID === 'Confirm' || response.nextPageID === 'Review') {
              this.bShowConfirm = true;
              this.fetchData('view', { id: this.caseID, actionid: 'pyCaseInformation' });
              this.fetchData('case', { id: this.caseID }); /* To get the updated status */
            } else {
              this.fetchData('page', { id: this.caseID, actionid: response.nextPageID });
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
