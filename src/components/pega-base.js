import { html, LitElement, property } from 'lit-element';
import { render } from 'lit-html';
import {
  mainLayout, createCaseLayout, setFormInlineError, genPageValidationErrors, genCaseTypesList,
} from '../views/views';
import { showDataList, LoadingIndicator } from '../views/fields';
import {
  getFormData, shouldRefresh, addRowToPageList, deleteRowFromPageList,
} from '../utils/form-utils';
import { WorkList } from '../views/worklist';

export default class PegaBase extends LitElement {
  @property({ type: String }) url = '';

  @property({ type: String }) caseID = '';

  @property({ type: String }) username = '';

  @property({ type: String }) password = '';

  @property({ type: String }) token = '';

  /* 2 actions supported: createNewWork and workList */
  @property({ type: String }) action = '';

  /* only used if the action createNewWork is used */
  @property({ type: String }) casetype = '';

  constructor() {
    super();
    this.cases = []; /* List of all the cases in your worklist */
    this.dataPages = {}; /* Cache of all the DP requested - key is the name of the DP */
    this.name = ''; /* Name of the current case that is being processed */
    this.assignmentID = '';
    this.actionID = '';
    this.content = {};
    this.errorMsg = '';
    this.validationMsg = '';
    this.bShowLoader = false;
    this.bShowConfirm = false;
  }

  displayContent() {
    if (!this.casetypes) {
      this.fetchData('casetypes');
    }
    if (this.errorMsg !== '') {
      return html`
        <div class="error">${this.errorMsg}<button class="pzhc pzbutton Strong" @click="${this.resetError}">Close</button></div>
      `;
    }
    if (this.bShowConfirm) {
      return html`
      <h2>Thank you.</div>
      <p>Your information has been submitted.</p>
      <button class="Strong pzhc pzbutton" @click="${this.actionAreaCancel}">Go back to worklist</button>
      `;
    }
    if (this.caseID !== '' || this.action === 'createNewWork') {
      return html`
        <h2>${this.name}</h2>
        <div class="validation">${this.validationMsg}</div>
        <form id="case-data">${LoadingIndicator()}</form>
      `;
    }
    if (this.bShowLoader) {
      return LoadingIndicator();
    }
    if (this.action === 'workList') {
      return WorkList(this.cases, this.displayCasesTypes, this.reloadWorkList, this.createCase, this.openCase);
    }
    return null;
  }

  resetError = (event) => {
    this.errorMsg = '';
    this.actionAreaCancel(event);
  };

  reloadWorkList = (event) => {
    this.cases = [];
    this.performUpdate();
    this.actionAreaCancel(event);
  };

  actionAreaCancel = (event) => {
    if (event) event.preventDefault();
    this.bShowConfirm = false;
    this.action = 'workList';
    this.caseID = '';
    this.assignmentID = '';
    this.actionID = '';
    this.errorMsg = '';
    this.validationMsg = '';
    this.fetchData('worklist');
  };

  actionAreaSave = (event) => {
    if (event) event.preventDefault();
    event.target.textContent = 'Saving...';
    const form = this.getRenderRoot().querySelector('#case-data');
    if (form) {
      this.content = {};
      getFormData(form, this.content);
      this.sendData('savecase', this.caseID, event.target);
    }
  };

  actionRefresh = () => {
    const form = this.getRenderRoot().querySelector('#case-data');
    if (form) {
      this.content = {};
      getFormData(form, this.content);
      this.bShowLoader = true;
      this.performUpdate();
      this.sendData('refresh', this.assignmentID, this.actionID);
    }
  };

  displayCasesTypes = () => genCaseTypesList(this.casetypes);

  submitForm = (event, type) => {
    const form = this.getRenderRoot().querySelector('#case-data');
    this.content = {};
    getFormData(form, this.content);
    if (form.checkValidity()) {
      if (type !== 'create') {
        this.sendData('submitassignment', this.data.ID, this.data.actions[0].ID);
      } else {
        this.sendData('newwork', this.casetype);
      }
    } else {
      form.reportValidity();
    }
    event.preventDefault();
    return false;
  };

  createCase = (el) => {
    if (el) {
      this.casetype = el.getAttribute('data-value');
    }
    this.caseID = '';
    this.name = '';
    this.action = 'createNewWork';
    this.performUpdate();
    /* Check if we need to show the New harness or skip the New harness */
    if (this.casetypes[this.casetype]) {
      if (this.casetypes[this.casetype].requiresFieldsToCreate === 'true') {
        this.fetchData('newwork', this.casetype);
      } else {
        this.sendData('newwork', this.casetype);
      }
    } else {
      this.errorMsg = `Case '${this.casetype}' is not defined`;
      this.performUpdate();
      console.error(`Case '${this.casetype}' is not defined`);
    }
  };

  openCase = (event) => {
    event.preventDefault();
    this.caseID = event.target.getAttribute('data-id');
    this.name = '';
    this.performUpdate();
    this.assignmentID = event.target.getAttribute('data-id');
    this.fetchData('assignment', this.assignmentID);
  };

  getData = (pageID, el) => {
    if (this.dataPages[pageID]) {
      render(showDataList(this.dataPages[pageID]), el.nextElementSibling);
    } else {
      this.fetchData('data', pageID, el);
    }
  };

  refreshAssignment = (el) => {
    const form = this.getRenderRoot().querySelector('#case-data');
    if (form) {
      this.content = {};
      getFormData(form, this.content);
      /* If el is defined - it could be a addRow or deleteRow action */
      if (el) {
        const action = el.getAttribute('data-action-click');
        const ref = el.getAttribute('data-ref');
        if (ref) {
          if (action === 'addRow') {
            addRowToPageList(this.content, ref, el.getAttribute('data-newrow'));
          } else if (action === 'deleteRow') {
            deleteRowFromPageList(this.content, ref);
          }
        }
      }
      this.sendData('refreshassignment', this.assignmentID, this.actionID);
    }
  };

  clickHandler = (event) => {
    const el = event.target;
    if (el.classList.contains('combobox') && !el.classList.contains('loaded')) {
      this.getData(el.getAttribute('data-pageid'), el);
    }
    if (shouldRefresh(el, 'click')) {
      this.refreshAssignment();
      event.preventDefault();
    } else if (el.tagName === 'BUTTON') {
      // always preventDefault on buttons */
      event.preventDefault();
      if (el.getAttribute('data-submit') !== null) {
        this.submitForm(event, el.getAttribute('data-submit'));
      } else if (el.getAttribute('data-action-click') === 'addRow') {
        this.refreshAssignment(el);
      } else if (el.getAttribute('data-action-click') === 'deleteRow') {
        this.refreshAssignment(el);
      }
    }
  };

  changeHandler = (event) => {
    const el = event.target;
    el.setCustomValidity('');
    if (shouldRefresh(el, 'change')) {
      this.refreshAssignment();
    }
  };

  focusHandler = (event) => {
    const el = event.target;
    if (el.classList.contains('combobox') && !el.classList.contains('loaded')) {
      this.getData(el.getAttribute('data-pageid'), el);
    }
  };

  /**
   * only called once when the Web component is rendered
   * - Allocated the main event listener for click, focus and change
   * - Apply the action requested when creating the element
   */
  firstUpdated() {
    console.log('Initialization of the Web Component');
    const mashupWidget = this.getRenderRoot();
    if (mashupWidget) {
      mashupWidget.addEventListener('click', this.clickHandler);
      mashupWidget.addEventListener('focusin', this.focusHandler);
      mashupWidget.addEventListener('change', this.changeHandler);
    }
    if (this.action === 'workList') {
      this.fetchData('worklist');
    } else if (this.action === 'createNewWork') {
      if (this.casetypes && this.casetypes[this.casetype]) {
        this.fetchData('newwork', this.casetype);
      }
    }
  }

  /**
   * fetch the data using the DX API
   *
   */
  fetchData(type, id, actionid) {
    let authToken = `Basic ${btoa(`${this.username}:${this.password}`)}`;
    if (this.token !== '') {
      authToken = `Bearer ${this.token}`;
    }
    const headers = {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: authToken,
    };
    const reqHeaders = {
      method: 'GET',
      headers,
    };
    let etag = '';
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
      case 'assignmentaction':
        apiurl += `assignments/${id}/actions/${actionid}`;
        break;
    }
    fetch(apiurl, reqHeaders)
      .then((res) => {
        etag = res.headers.get('etag');
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res);
      })
      .then((response) => {
        try {
          this.bShowLoader = false;
          const el = this.getRenderRoot().querySelector('#case-data');
          switch (type) {
            case 'casetypes':
              this.casetypes = {};
              for (const caseTypeIdx in response.caseTypes) {
                const obj = response.caseTypes[caseTypeIdx];
                this.casetypes[obj.ID] = {
                  canCreate: obj.CanCreate,
                  name: obj.startingProcesses[0].name,
                  requiresFieldsToCreate: obj.startingProcesses[0].requiresFieldsToCreate,
                };
              }
              if (this.action === 'createNewWork') {
                this.createCase();
              }
              break;
            case 'worklist':
              this.cases = response.assignments;
              break;
            case 'assignment':
              this.data = response;
              this.caseID = this.data.caseID;
              this.actionID = response.actions[0].ID;
              this.fetchData('case', this.caseID);
              this.fetchData('assignmentaction', id, this.actionID);
              break;
            case 'case':
              this.casedata = response.content;
              this.casedata.etag = etag;
              break;
            case 'data':
              this.dataPages[id] = response;
              render(showDataList(response), actionid.nextElementSibling);
              break;
            case 'assignmentaction':
              this.name = response.name;
              render(mainLayout(response.view.groups, 'Obj', this.actionAreaCancel, this.actionAreaSave), el);
              break;
            case 'page':
              render(mainLayout(response.groups, 'Obj', this.actionAreaCancel, this.actionAreaSave), el);
              break;
            case 'newwork':
              this.content = {};
              this.name = response.creation_page.name;
              render(createCaseLayout(response.creation_page.groups[0].layout.groups, 'Obj', this.actionAreaCancel), el);
              break;
          }
          this.requestUpdate();
        } catch (e) {
          this.errorMsg = `Error: ${e}`;
          this.performUpdate();
          console.error('Error:', e);
        }
      })
      .catch((error) => {
        if (error.status && error.statusText) {
          this.errorMsg = `Error ${error.status}: ${error.statusText}`;
        }
        if (error.name && error.message) {
          this.errorMsg = `Error ${error.name}: ${error.message}`;
        } else if (typeof error === 'string') {
          this.errorMsg = error;
        }
        this.performUpdate();
        console.error('Error:', error);
      });
  }

  sendData(type, id, actionid) {
    let authToken = `Basic ${btoa(`${this.username}:${this.password}`)}`;
    if (this.token !== '') {
      authToken = `Bearer ${this.token}`;
    }
    const headers = {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: authToken,
    };
    const reqHeaders = {
      method: 'POST',
      headers,
    };
    let apiurl = `${this.url}/api/v1/`;
    this.validationMsg = '';
    switch (type) {
      case 'newwork':
        apiurl += 'cases';
        reqHeaders.body = JSON.stringify({
          content: this.content,
          caseTypeID: id,
        });
        break;
      case 'submitassignment':
        apiurl += `assignments/${id}?actionID=${actionid}`;
        reqHeaders.body = JSON.stringify({
          content: this.content,
        });
        break;
      case 'savecase':
        apiurl += `cases/${id}`;
        reqHeaders.headers['If-Match'] = this.casedata.etag;
        reqHeaders.method = 'PUT';
        reqHeaders.body = JSON.stringify({
          content: this.content,
        });
        break;
      case 'refreshassignment':
        apiurl += `assignments/${id}/actions/${actionid}/refresh`;
        reqHeaders.headers['If-Match'] = this.casedata.etag;
        reqHeaders.method = 'PUT';
        reqHeaders.body = JSON.stringify({
          content: this.content,
        });
        break;
      case 'refreshcase':
        apiurl += `cases/${id}/actions/${actionid}/refresh`;
        reqHeaders.headers['If-Match'] = this.casedata.etag;
        reqHeaders.method = 'PUT';
        reqHeaders.body = JSON.stringify({
          content: this.content,
        });
        break;
    }
    fetch(apiurl, reqHeaders)
      .then((res) => {
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
            const form = this.getRenderRoot().querySelector('#case-data');
            setFormInlineError(form, response.errors[0].ValidationMessages);
            this.validationMsg = genPageValidationErrors(response);
          } else {
            this.errorMsg = `Error ${response.errors[0].ID}: ${response.errors[0].message}`;
          }
        } else {
          if (type === 'refreshcase' || type === 'refreshassignment') {
            const el = this.getRenderRoot().querySelector('#case-data');
            render(mainLayout(response.view.groups, 'Obj', this.actionAreaCancel, this.actionAreaSave), el);
          } else if (type === 'savecase') {
            if (actionid) {
              actionid.textContent = 'Save';
            }
            this.fetchData('case', this.caseID);
            this.fetchData('assignment', this.assignmentID);
          }
          if (response.ID) {
            this.caseID = response.ID;
          }
          if (response.nextAssignmentID) {
            this.assignmentID = response.nextAssignmentID;
            this.fetchData('assignment', this.assignmentID);
          } else if (response.nextPageID) {
            if (response.nextPageID === 'Confirm') {
              this.bShowConfirm = true;
            } else {
              this.fetchData('page', this.caseID, response.nextPageID);
            }
          }
        }
        this.requestUpdate();
      })
      .catch((error) => {
        if (error.status && error.statusText) {
          this.errorMsg = `Error ${error.status}: ${error.statusText}`;
        }
        if (error.name && error.message) {
          this.errorMsg = `Error ${error.name}: ${error.message}`;
        } else if (typeof error === 'string') {
          this.errorMsg = error;
        }
        this.performUpdate();
        console.error('Error:', error);
      });
  }
}
