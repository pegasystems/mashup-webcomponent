import { render } from 'lit-html';
import {
  saveCaseLayout, reviewLayout, mainLayout, createCaseLayout, genPageValidationErrors,
} from './views';
import { genAttachmentsList } from '../../views/attachments';
import { RenderLocalAction } from '../../views/local-action';
import { setFormData, setFormInlineError } from '../../utils/form-utils';
import { showDataList } from '../../views/datalist';
import { LoadingIndicator } from '../../views/loading';
import PegaElement from '../../main/element';

/**
 * This interface is responsible for fetching the data and sending the data to the Pega Platform using the DX API
 * It will update the case-data element using the lit-html render function
 *
 */
export default class PegaServices extends PegaElement {
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
              for (const caseTypeIdx in response.caseTypes) {
                const obj = response.caseTypes[caseTypeIdx];
                /* If the action is worklist and the createCase is set on the mashup component, we need to filter the list */
                if (this.action !== 'workList' || this.casetype === '' || this.casetype === obj.ID) {
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
            case 'assignment':
              this.data = response;
              this.caseID = response.caseID;
              this.fetchData('case', { id: this.caseID });
              if (response.actions.length > 0 && response.actions[0].ID) {
                this.actionID = response.actions[0].ID;
                this.fetchData('assignmentaction', { id, actionid: this.actionID });
              } else {
                this.fetchData('view', { id: this.caseID, actionid: 'pyCaseInformation' });
              }
              break;
            case 'case':
              this.casedata = response;
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
              render(showDataList(response), element.nextElementSibling);
              break;
            case 'caseaction':
              if (!el) {
                console.error('Error: case data are not present when retrieving the assignmentaction');
                break;
              }
              render(saveCaseLayout(response.view.groups, 'Obj',
                this.bShowCancel === 'true' ? this.actionAreaCancel : null,
                this.actionAreaSave, this), el);
              el.focus();
              break;
            case 'assignmentaction':
              if (!el) {
                console.error('Error: case data are not present when retrieving the assignmentaction');
                break;
              }
              if (target) {
                this.actionID = actionid;
                render(RenderLocalAction(response.name, mainLayout(response.view.groups, 'Obj',
                  this.actionAreaCancel,
                  null, this)), target);
                target.focus();
              } else {
                this.name = response.name;
                this.requestUpdate();
                render(mainLayout(response.view.groups, 'Obj',
                  this.bShowCancel === 'true' ? this.actionAreaCancel : null,
                  this.bShowSave === 'true' ? this.actionAreaSave : null, this), el);
                el.focus();
              }
              break;
            case 'page':
              if (!el) {
                console.error('Error: case data are not present when retrieving the page');
                break;
              }
              render(mainLayout(response.groups, 'Obj', this), el);
              el.focus();
              break;
            case 'view':
              if (!el) {
                console.error('Error: case data are not present when retrieving the page');
                break;
              }
              this.content = {};
              if (actionid === 'pyCaseInformation') {
                this.name = response.name;
                render(reviewLayout(response.groups, 'Obj', this.bShowCancel === 'true' ? this.actionAreaCancel : null, this), el);
              } else {
                this.name = response.name;
                render(mainLayout(response.groups, 'Obj', this), el);
              }
              el.focus();
              break;
            case 'newwork':
              this.content = {};
              if (!el) {
                console.error('Error: case data are not present when retrieving the newwork');
                break;
              }
              render(createCaseLayout(response.creation_page.groups[0].layout.groups, 'Obj', this.bShowCancel === 'true' ? this.actionAreaCancel : null), el);
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
          content: this.content,
          caseTypeID: id,
        });
        break;
      case 'submitassignment':
        reqHeaders.body = JSON.stringify({
          content: this.content,
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
          content: this.content,
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
          content: this.content,
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
          content: this.content,
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
          content: this.content,
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
              setFormInlineError(target, response.errors[0].ValidationMessages);
              render(genPageValidationErrors(response), target.previousElementSibling);
            } else {
              const form = this.getRenderRoot().querySelector('#case-data');
              setFormInlineError(form, response.errors[0].ValidationMessages);
              this.validationMsg = genPageValidationErrors(response);
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
            if (type === 'refreshnew') {
              render(createCaseLayout(response.creation_page.groups[0].layout.groups, 'Obj',
                this.bShowCancel === 'true' ? this.actionAreaCancel : null, this), el);
            } else {
              render(mainLayout(response.view.groups, 'Obj', this.actionAreaCancel, this.bShowSave === 'true' ? this.actionAreaSave : null, this), el);
            }
          } else if (type === 'savecase') {
            this.sendExternalEvent(type);
            this.fetchData('case', { id: this.caseID, target });
            if (callback) {
              callback();
              return;
            }
            if (this.assignmentID !== '') {
              this.fetchData('assignment', { id: this.assignmentID });
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
          }
          if (response.nextAssignmentID) {
            if (el) {
              render(LoadingIndicator(), el);
              this.requestUpdate();
            }
            this.bShowNew = false;
            this.assignmentID = response.nextAssignmentID;
            this.sendExternalEvent(type);
            this.fetchData('assignment', { id: this.assignmentID });
          } else if (response.nextPageID) {
            if (el) {
              render(LoadingIndicator(), el);
              this.requestUpdate();
            }
            this.sendExternalEvent(type);
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
