import { html } from 'lit-element';
import { render } from 'lit-html';
import { genActionsList, CaseHeader, genCaseTypesList } from '../views/views';
import {
  showDataList, LoadingIndicator, showConfirm, showErrorMessage,
} from '../views/fields';
import {
  getFormData, getInitData, shouldRefresh, getRefreshFor, addRowToPageList, deleteRowFromPageList,
} from '../utils/form-utils';
import { WorkList } from '../views/worklist';
import PegaServices from './services';

export default class PegaBase extends PegaServices {
  displayContent() {
    /* Unrecoverable error - just display the banner */
    if (this.errorMsg !== '') {
      return showErrorMessage(this.errorMsg, this.bShowCancel === 'true' ? this.resetError : null);
    }
    /* We need to fetch the list of cases for the createNewWork and workList actions */
    if (!this.casetypes && (this.action === 'createNewWork' || this.action === 'workList')) {
      this.fetchData('casetypes');
      if (this.action === 'createNewWork') {
        this.bShowNew = true;
      } else if (this.action === 'workList') {
        this.bShowCancel = 'true';
      }
    } else if (this.name === '') {
      if (this.action === 'openAssignment' && this.assignmentID === '') {
        this.assignmentID = this.caseID;
      }
      if (this.assignmentID !== '') {
        this.fetchData('assignment', { id: this.assignmentID });
      } else if (this.caseID !== '') {
        this.fetchData('case', { id: this.caseID });
      }
    }
    if (this.bShowConfirm) {
      return showConfirm(this.casedata.content.pyLabel, this.casedata.content.pyID, this.casepyStatusWork);
    }
    if (this.caseID !== '' || this.assignmentID !== '' || this.bShowNew) {
      return html`
        ${CaseHeader(this.name, this.data, this.casedata, this.casepyStatusWork, this.displayActions, this.runAction, this.openCase)}
        <div class="validation">${this.validationMsg}</div>
        <form id="case-data">${LoadingIndicator()}</form>
      `;
    }
    if (this.action === 'workList') {
      return WorkList(this.title, this.cases, this.displayCasesTypes, this.reloadWorkList, this.bShowCreate === 'true' ? this.createCase : null, this.openCase);
    }
    return null;
  }

  resetError = (event) => {
    this.errorMsg = '';
    this.validationMsg = '';
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
    this.bShowNew = false;
    this.caseID = '';
    this.data = {};
    this.content = {};
    this.casedata = {};
    this.casepyStatusWork = '';
    this.assignmentID = '';
    this.actionID = '';
    this.errorMsg = '';
    this.validationMsg = '';
    this.name = '';
    if (this.action === 'workList') {
      this.fetchData('worklist');
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
    event.target.textContent = 'Saving...';
    event.target.disabled = true;
    const form = this.getRenderRoot().querySelector('#case-data');
    if (form) {
      this.content = getInitData(this.casedata);
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
      this.content = getInitData(this.casedata);
      this.validationMsg = '';
      getFormData(form, this.content);
      this.performUpdate();
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

  submitForm = (event, type) => {
    const form = this.getRenderRoot().querySelector('#case-data');
    this.content = getInitData(this.casedata);
    getFormData(form, this.content);
    if (form.checkValidity()) {
      if (type !== 'create') {
        this.sendData('submitassignment', { id: this.data.ID, actionid: this.actionID });
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
      if (this.casetypes[this.casetype].requiresFieldsToCreate === 'true') {
        this.fetchData('newwork', { id: this.casetype });
      } else {
        this.sendData('newwork', { id: this.casetype });
      }
    } else {
      this.errorMsg = `Case '${this.casetype}' is not defined`;
      console.error(`Case '${this.casetype}' is not defined`);
    }
    this.performUpdate();
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
      this.assignmentID = this.caseID;
      this.caseID = '';
    } else {
      this.assignmentID = '';
    }
    const casedata = this.getRenderRoot().querySelector('#case-data');
    if (casedata != null) {
      render(LoadingIndicator(), casedata);
    }
    this.performUpdate();
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
    if (form) {
      this.content = getInitData(this.casedata);
      getFormData(form, this.content);
      /* If el is defined - it could be a addRow or deleteRow action */
      if (el) {
        const action = el.getAttribute('data-action-click');
        const ref = el.getAttribute('data-ref');
        if (ref !== null && action != null) {
          if (action === 'addRow') {
            addRowToPageList(this.content, ref, el.getAttribute('data-newrow'));
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

  clickHandler = (event) => {
    const el = event.target;
    const action = el.getAttribute('data-action-click');
    if (el.classList.contains('combobox') && !el.classList.contains('loaded')) {
      this.getData(el.getAttribute('data-pageid'), el);
    }
    if (shouldRefresh(el, 'click')) {
      this.refreshAssignment(el, getRefreshFor(el, 'click'));
      event.preventDefault();
    } else if (el.tagName === 'BUTTON') {
      // always preventDefault on buttons */
      event.preventDefault();
      if (el.getAttribute('data-submit') !== null) {
        this.submitForm(event, el.getAttribute('data-submit'));
      } else if (action === 'addRow') {
        this.refreshAssignment(el);
      } else if (action === 'deleteRow') {
        this.refreshAssignment(el);
      }
    }
  };

  changeHandler = (event) => {
    let el = event.target;
    if (event.path && event.path.length > 0) {
      el = event.path[0];
    } else if (event.originalTarget) {
      el = event.originalTarget;
    }
    el.setCustomValidity('');
    if (shouldRefresh(el, 'change')) {
      this.refreshAssignment(el, getRefreshFor(el, 'change'));
    }
  };

  keyupHandler = (event) => {
    const el = event.target;
    if (el.tagName === 'TEXTAREA') {
      el.style.cssText = 'height:auto; padding:0;';
      el.style.cssText = `height:${el.scrollHeight}px`;
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
      mashupWidget.addEventListener('keyup', this.keyupHandler);
    }
    if (this.action === 'workList') {
      this.fetchData('worklist');
    } else if (this.action === 'createNewWork') {
      if (this.casetypes && this.casetypes[this.casetype]) {
        this.fetchData('newwork', { id: this.casetype });
      }
    }
  }
}
