import { html } from 'lit-element';
import { render } from 'lit-html';
import PegaServices from './services';
import {
  genActionsList, CaseHeader, genCaseTypesList,
} from './views';
import { showDataList } from '../../views/datalist';
import { LoadingIndicator } from '../../views/loading';
import { showConfirm } from '../../views/confirm';
import { showErrorMessage } from '../../views/errormsg';
import {
  getFormData, shouldRefresh, getRefreshFor, addRowToPageList, deleteRowFromPageList, unescapeHTML,
} from '../../utils/form-utils';
import { WorkList } from '../../views/worklist';

export default class PegaBase extends PegaServices {
  displayContent() {
    /* Unrecoverable error - just display the banner */
    if (this.errorMsg !== '') {
      return showErrorMessage(this.errorMsg, this.bShowCancel === 'true' ? this.resetError : null);
    }
    /* No need to continue if authentication has not be done */
    if ((this.authentication === 'oauth2password' || this.authentication === 'oauth2clientcredentials') && this.token === '') {
      this.sendData('authenticate', {});
      return null;
    }
    /* We need to fetch the list of cases for the createNewWork and workList actions */
    if (!this.casetypes && (this.action === 'createNewWork' || this.action === 'workList')) {
      this.fetchData('casetypes');
      if (this.action === 'createNewWork') {
        this.bShowNew = true;
        if (this.casetypes[this.casetype]) {
          this.fetchData('newwork', { id: this.casetype });
        }
      } else if (this.action === 'workList') {
        this.bShowCancel = 'true';
        this.fetchData('worklist');
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
      return showConfirm(this.casedata.content.pyLabel, this.casedata.content.pyID, this.casepyStatusWork,
        this.bShowAttachments === 'true' ? this.displayAttachments : null);
    }
    if (this.caseID !== '' || this.assignmentID !== '' || this.bShowNew) {
      return html`
        ${CaseHeader(this.name, this.data, this.casedata, this.casepyStatusWork, this.numAttachments, this.displayActions, this.runAction, this.openCase,
    this.bShowAttachments === 'true' ? this.displayAttachments : null)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
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
    if (this.action === 'workList') {
      this.fetchData('worklist');
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
  }

  submitForm = (event, type) => {
    event.preventDefault();

    /* If the cancel button is in a modal dialog - just close the modal */
    if (event.target && event.target.closest('.mashup-modal') !== null) {
      const form = event.target.closest('#modalcontent');
      getFormData(form, this.content, this.pageInstructions, this.casedata.content);
      if (form.checkValidity()) {
        this.sendData('submitassignment', { id: this.data.ID, actionid: this.actionID, target: form });
      } else {
        form.reportValidity();
      }
    } else {
      const form = this.getRenderRoot().querySelector('#case-data');
      getFormData(form, this.content, this.pageInstructions, this.casedata.content);
      if (form.checkValidity()) {
        if (type !== 'create') {
          this.sendData('submitassignment', { id: this.data.ID, actionid: this.actionID });
        } else {
          this.sendData('newwork', { id: this.casetype });
        }
      } else {
        form.reportValidity();
      }
    }
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

  setInlineError = (el, msg) => {
    el.setCustomValidity(unescapeHTML(msg));
    el.classList.add('error-field');
    el.reportValidity();
  }

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

  clickHandler = (event) => {
    let el = event.target;
    if (el.tagName === 'path') el = el.parentNode;
    if (el.tagName === 'svg') el = el.parentNode;
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
      if (el.getAttribute('data-submit') !== null && el.getAttribute('data-submit') !== 'save') {
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
    el.classList.remove('error-field');
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
  async firstUpdated() {
    const mashupWidget = this.getRenderRoot();
    if (mashupWidget) {
      mashupWidget.addEventListener('click', this.clickHandler);
      mashupWidget.addEventListener('focusin', this.focusHandler);
      mashupWidget.addEventListener('change', this.changeHandler);
      mashupWidget.addEventListener('keyup', this.keyupHandler);
    }
  }
}
