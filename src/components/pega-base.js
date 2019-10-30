import { html, LitElement, property } from 'lit-element';
import { render } from 'lit-html';
import { mainLayout, createCaseLayout, confirmPageLayout } from '../views/pega-view';
import { worklist } from '../views/pega-worklist';

export default class PegaBase extends LitElement {
  @property({ type: String }) url = '';

  @property({ type: String }) caseID = '';

  @property({ type: String }) username = '';

  @property({ type: String }) password = '';

  @property({ type: String }) action = '';

  @property({ type: String }) casetype = '';

  @property({ type: Array }) cases = [];

  displayContent() {
    if (!this.casetypes) {
      this.fetchData('casetypes');
    }
    if (this.caseID !== '') {
      return html`
        <h2>Processing assignment '${this.caseID}'</h2>
        <div id="case-data"></div>
      `;
    }
    if (this.action === 'workList') {
      return worklist(this.cases, this.reloadElement, this.createCase, this.openCase);
    }
    if (this.action === 'createNewWork') {
      return html`
        <h2>Create new case of type '${this.casetype}'</h2>
        <div id="case-data"></div>
      `;
    }
    return null;
  }

  actionAreaCancel = (event) => {
    if (event) event.preventDefault();
    this.cases = [];
    this.caseID = '';
    this.action = 'workList';
    this.fetchData('worklist');
  };

  actionAreaSave = (event) => {
    if (event) event.preventDefault();
    this.sendData('savecase', this.caseID);
  };

  actionAreaSubmit = (event) => {
    if (event) event.preventDefault();
    this.sendData('submitcase', this.data.ID, this.data.actions[0].ID);
  };

  createAreaCancel = (event) => {
    if (event) event.preventDefault();
    this.action = 'workList';
    this.reloadElement(event);
  };

  createAreaSubmit = (event) => {
    if (event) event.preventDefault();
    this.sendData('newwork', this.casetype);
  };

  createCase = (event) => {
    if (event) event.preventDefault();
    this.cases = [];
    this.caseID = '';
    this.action = 'createNewWork';
    this.performUpdate();
    /* Check if we need to show the New harness or skip the New harness */
    if (this.casetypes[this.casetype]) {
      if (this.casetypes[this.casetype].requiresFieldsToCreate === true) {
        this.fetchData('newwork', this.casetype);
      } else {
        this.sendData('newwork', this.casetype);
      }
    } else {
      console.error(`Case '${this.casetype}' is not defined`);
    }
  };

  openCase = (event) => {
    event.preventDefault();
  };

  reloadElement = (event) => {
    event.preventDefault();
    this.cases = [];
    this.casetypes = undefined;
    this.caseID = '';
    this.fetchData('worklist');
  };

  firstUpdated() {
    const mashupWidget = this.getRenderRoot().querySelector('#mashup');
    if (mashupWidget) {
      mashupWidget.addEventListener('click', (event) => {
        const el = event.target;
        if (el && el.tagName === 'BUTTON') {
          if (el.getAttribute('data-type') === 'assignment') {
            this.fetchData('assignment', el.getAttribute('data-id'));
          }
        }
      });
      mashupWidget.addEventListener('change', (event) => {
        const el = event.target;
        const ref = el.getAttribute('ref');
        if (typeof this.content === 'undefined') {
          this.content = {};
        }
        if (ref !== null && ref !== 'pyID') {
          this.content[ref] = el.value;
        }
      });
    }
    if (this.action === 'workList') {
      this.fetchData('worklist');
    } else if (this.action === 'createNewWork') {
      if (this.casetypes) {
        this.fetchData('newwork', this.casetype);
      }
    }
  }

  fetchData(type, id, actionid) {
    const headers = {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: `Basic ${btoa(`${this.username}:${this.password}`)}`,
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
        const el = this.getRenderRoot().querySelector('#case-data');
        switch (type) {
          case 'casetypes':
            this.casetypes = {};
            for (const caseTypeIdx in response.caseTypes) {
              const obj = response.caseTypes[caseTypeIdx];
              this.casetypes[obj.ID] = {
                canCreate: obj.CanCreate,
                name: obj.name,
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
            this.fetchData('case', this.caseID);
            this.fetchData('assignmentaction', id, response.actions[0].ID);
            break;
          case 'case':
            this.casedata = response.content;
            this.casedata.etag = etag;
            break;
          case 'assignmentaction':
            render(mainLayout(response.view.groups, 'Obj', this.actionAreaCancel, this.actionAreaSave, this.actionAreaSubmit), el);
            break;
          case 'page':
            render(mainLayout(response.groups, 'Obj', this.actionAreaCancel, this.actionAreaSave, this.actionAreaSubmit), el);
            break;
          case 'newwork':
            this.content = {};
            render(createCaseLayout(response.creation_page.groups[0].layout.groups, 'Obj', this.createAreaCancel, this.createAreaSubmit), el);
            break;
        }
        this.requestUpdate();
      })
      .catch(error => console.error('Error:', error));
  }

  sendData(type, id, actionid) {
    const headers = {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=UTF-8',
      Authorization: `Basic ${btoa(`${this.username}:${this.password}`)}`,
    };
    const reqHeaders = {
      method: 'POST',
      headers,
    };
    let apiurl = `${this.url}/api/v1/`;
    switch (type) {
      case 'newwork':
        apiurl += 'cases';
        reqHeaders.body = JSON.stringify({
          content: this.content,
          caseTypeID: id,
        });
        break;
      case 'submitcase':
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
    }
    fetch(apiurl, reqHeaders)
      .then((res) => {
        if (res.ok) {
          if (res.status === 200 || res.status === 201) {
            return res.json();
          }
          return Promise.resolve('ok');
        }
        return Promise.reject(res);
      })
      .then((response) => {
        if (type === 'savecase') {
          this.fetchData('case', this.caseID);
        }
        if (response.ID) {
          this.caseID = response.ID;
        }
        if (response.nextAssignmentID) {
          this.fetchData('assignment', response.nextAssignmentID);
        } else if (response.nextPageID) {
          if (response.nextPageID === 'Confirm') {
            const el = this.getRenderRoot().querySelector('#case-data');
            render(confirmPageLayout(this.actionAreaCancel), el);
          } else {
            this.fetchData('page', this.caseID, response.nextPageID);
          }
        }
        this.requestUpdate();
      })
      .catch(error => console.error('Error:', error));
  }
}
