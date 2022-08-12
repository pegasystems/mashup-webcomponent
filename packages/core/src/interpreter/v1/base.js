import { html } from 'lit';
import PegaServices from './services';
import {
  CaseHeader, saveCaseLayout, reviewLayout, mainLayout, createCaseLayout, genPageValidationErrors,
} from './views';
import { showDataList } from '../../views/datalist';
import { LoadingIndicator } from '../../views/loading';
import { showConfirm } from '../../views/confirm';
import { showErrorMessage } from '../../views/errormsg';
import { shouldRefresh, getRefreshFor, unescapeHTML } from '../../utils/form-utils';
import { WorkList } from '../../views/worklist';
import { TaskList } from '../../views/tasklist';
import { DataView } from '../../views/dataview';

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
    if (!this.casetypes && (this.action === 'createNewWork' || this.action === 'workList' || this.action === 'taskList' || this.action === 'dataView')) {
      this.fetchData('casetypes');
      if (this.action === 'createNewWork') {
        this.bShowNew = true;
        if (this.casetypes[this.casetype]) {
          this.fetchData('newwork', { id: this.casetype });
        }
      } else if (this.action === 'workList' || this.action === 'taskList') {
        this.bShowCancel = 'true';
        this.fetchData('worklist');
      } else if (this.action === 'dataView') {
        this.bShowCancel = 'true';
        this.fetchData('dataview', { id: this.dataviewParams });
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
      return showConfirm(
        this.casedata.content.pyLabel,
        this.casedata.content.pyID,
        this.casepyStatusWork,
        this.bShowAttachments === 'true' ? this.displayAttachments : null,
      );
    }
    if (this.caseID !== '' || this.assignmentID !== '' || this.bShowNew) {
      return html`
        ${CaseHeader(
    this.name,
    this.data,
    this.casedata,
    this.casepyStatusWork,
    this.numAttachments,
    this.displayActions,
    this.runAction,
    this.openCase,
    this.bShowAttachments === 'true' ? this.displayAttachments : null,
    this.bShowActions,
  )}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data"></form>
      `;
    }
    if (this.action === 'workList') {
      return WorkList(this.title, this.cases, this.displayCasesTypes, this.reloadWorkList, this.bShowCreate === 'true' ? this.createCase : null, this.openCase);
    }
    if (this.action === 'taskList') {
      return TaskList(this.title, this.cases, this.displayCasesTypes, this.reloadWorkList, this.bShowCreate === 'true' ? this.createCase : null, this.openCase);
    }
    if (this.action === 'dataView') {
      return DataView(
        this.title,
        this.dataviewParams,
        this.cases,
        this.reloadWorkList,
        this.openCase,
      );
    }
    return null;
  }

  renderMainLayout = (data, path) => mainLayout(
    data,
    path,
    this.bShowCancel === 'true' ? this.actionAreaCancel : null,
    this.bShowSave === 'true' ? this.actionAreaSave : null,
    this,
  );

  renderSaveCaseLayout = (data, path) => saveCaseLayout(
    data,
    path,
    this.bShowCancel === 'true' ? this.actionAreaCancel : null,
    this.bShowSave === 'true' ? this.actionAreaSave : null,
    this,
  );

  renderReviewLayout = (data, path) => reviewLayout(data, path, this.bShowCancel === 'true' ? this.actionAreaCancel : null, this);

  renderCreateCaseLayout = (data, path) => createCaseLayout(data, path, this.bShowCancel === 'true' ? this.actionAreaCancel : null);

  genPageValidationErrors = (response) => genPageValidationErrors(response);

  showDataList = (id) => showDataList(id);

  genLoadingIndicator = () => LoadingIndicator();

  validateForm = (form) => form.checkValidity();

  reportFormValidity = (form) => form.reportValidity();

  setInlineError = (el, msg) => {
    el.setCustomValidity(unescapeHTML(msg));
    el.classList.add('error-field');
    el.reportValidity();
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
