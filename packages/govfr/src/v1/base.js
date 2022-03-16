import { html } from 'lit';
import PegaServices from '../../../core/src/interpreter/v1/services';
import {
  CaseHeader, reviewLayout, mainLayout, createCaseLayout, genPageValidationErrors,
} from './views';
import {
  validateForm, reportFormValidity, setInlineError,
} from '../validation';

import { LoadingIndicator } from '../loading';
import { showConfirm } from '../workarea';
import { showErrorMessage } from '../errormsg';
import {
  shouldRefresh, getRefreshFor,
} from '../../../core/src/utils/form-utils';
import { WorkList } from '../worklist';

export default class PegaBase extends PegaServices {
  displayContent() {
    this.bShowSave = 'false';
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
      return showConfirm(this.casedata.content.pyLabel, this.casedata.content.pyID, this.casepyStatusWork, null);
    }
    if (this.caseID !== '' || this.assignmentID !== '' || this.bShowNew) {
      return html`
        ${CaseHeader(this.name, this.data, this.casedata, this.casepyStatusWork, this.numAttachments, this.displayActions, this.runAction, this.openCase, null)}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data"></form>
      `;
    }
    if (this.action === 'workList') {
      return WorkList(this.cases, this.openCase);
    }
    return null;
  }

  renderMainLayout = (data, path) => mainLayout(
    data,
    path,
    this.bShowCancel === 'true' ? this.actionAreaCancel : null,
    null,
    this,
  );

  renderReviewLayout = (data, path) => reviewLayout(data, path, this.bShowCancel === 'true' ? this.actionAreaCancel : null, this);

  renderCreateCaseLayout = (data, path) => createCaseLayout(data, path, this.bShowCancel === 'true' ? this.actionAreaCancel : null, this);

  genPageValidationErrors = (response) => genPageValidationErrors(response);

  genLoadingIndicator = () => LoadingIndicator();

  setInlineError = (el, msg) => setInlineError(el, msg);

  validateForm = (form) => validateForm(form);

  reportFormValidity = (form) => reportFormValidity(form);

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
    }
  }
}
