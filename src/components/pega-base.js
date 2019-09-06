import { LitElement } from 'lit-element';
import { render } from 'lit-html';
import { mainLayout, createCaseLayout } from '../views/pega-view';

export default class PegaBase extends LitElement {
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
            render(createCaseLayout(response.creation_page.groups[0].layout.groups, 'Obj', this.createAreaCancel, this.createAreaCreate), el);
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
    let etag = '';
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
        etag = res.headers.get('etag');
        if (res.ok) {
          if (res.status === 200 || res.status === 201) {
            return res.json();
          }
          return Promise.resolve('ok');
        }
        return Promise.reject(res);
      })
      .then((response) => {
        switch (type) {
          case 'newwork':
          case 'submitcase':
            console.log('etag ', etag);
            if (response.ID) {
              this.caseID = response.ID;
            }
            if (response.nextAssignmentID) {
              this.fetchData('assignment', response.nextAssignmentID);
            } else if (response.nextPageID) {
              this.fetchData('page', this.caseID, response.nextPageID);
            }
            break;
        }
        this.requestUpdate();
      })
      .catch(error => console.error('Error:', error));
  }
}
