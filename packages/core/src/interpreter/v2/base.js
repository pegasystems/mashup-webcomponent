import { html, render } from 'lit';
import PegaServices from './services';
import {
  genActionsList, CaseHeader, genCaseTypesList, mainLayout, reviewLayout, genPageValidationErrors,
} from './views';
import { showDataList } from '../../views/datalist';
import { LoadingIndicator } from '../../views/loading';
import { showConfirm } from '../../views/confirm';
import { showErrorMessage } from '../../views/errormsg';
import {
  getFormData, shouldRefresh, getRefreshFor, unescapeHTML,
} from '../../utils/form-utils';
import { WorkList } from '../../views/worklist';
import { ShowOAuthProvider } from '../../views/oauthprovider';

export default class PegaBase extends PegaServices {
  displayContent() {
    this.bShowSave = 'false';
    /* Unrecoverable error - just display the banner */
    if (this.errorMsg !== '') {
      if (this.errorMsg.indexOf('The provided authorization code is expired') !== -1) {
        window.history.replaceState(
          { },
          '',
          '',
        );
      } else {
        return showErrorMessage(this.errorMsg, this.bShowCancel === 'true' ? this.resetError : null);
      }
    }
    /* No need to continue if authentication has not be done */
    if (window.history.state && window.history.state.token) {
      this.token = window.history.state.token;
    }
    if ((this.authentication === 'oauth2password' || this.authentication === 'oauth2clientcredentials') && this.token === '') {
      this.sendData('authenticate', {});
      return null;
    }
    if (this.authentication === 'authorizationcode' && this.token === '') {
      if (window.history.state && window.history.state.code) {
        this.sendData('authenticate', {});
        return null;
      }
      return ShowOAuthProvider(this.url, this.clientid);
    }
    if (!this.casetypes && (this.action === 'createNewWork' || this.action === 'workList')) {
      this.fetchData('portal');
      if (this.action === 'createNewWork') {
        this.bShowNew = true;
      } else if (this.action === 'workList') {
        this.bShowCancel = 'true';
      }
    } else if (this.action === 'createNewWork' && this.caseID === '' && this.casetypes && this.casetypes[this.casetype]) {
      this.sendData('newwork', { id: this.casetype });
    } else if (this.name === '') {
      if (this.action === 'openAssignment' && this.assignmentID === '') {
        this.assignmentID = this.caseID;
      }
      if (this.assignmentID !== '') {
        this.fetchData('assignment', { id: this.assignmentID });
      } else if (this.caseID !== '') { /* Open the case in review using the pyReview view */
        this.fetchData('view', { id: this.caseID, actionid: 'pyReview' });
      }
    }
    if (this.bShowConfirm) {
      const id = this.data.ID.split(' ')[1];
      return showConfirm(
        this.casedata.name,
        id,
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
  )}
        <div class="validation" role="alert" aria-live="assertive">${this.validationMsg}</div>
        <form id="case-data"></form>
      `;
    }
    if (this.action === 'workList') {
      return WorkList(
        this.title,
        this.cases,
        this.displayCasesTypes,
        this.reloadWorkList,
        this.bShowCreate === 'true' ? this.createCase : null,
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
  )

  renderReviewLayout = (data, path) => reviewLayout(data, path, this.bShowCancel === 'true' ? this.actionAreaCancel : null, this)

  genPageValidationErrors = (response) => genPageValidationErrors(response)

  showDataList = (id) => showDataList(id)

  genActionsList = (name, data) => genActionsList(name, data);

  displayCasesTypes = () => genCaseTypesList(this.casetypes);

  genLoadingIndicator = () => LoadingIndicator();

  setInlineError = (el, msg) => {
    el.setCustomValidity(unescapeHTML(msg));
    el.classList.add('error-field');
    el.reportValidity();
  }

  validateForm = (form) => form.checkValidity();

  reportFormValidity = (form) => form.reportValidity();

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

    if (shouldRefresh(el, 'change') || this.isDeclarativeTarget) {
      this.refreshAssignment(el, getRefreshFor(el, 'change'));
    } else if (this.refreshOnChange) {
      const form = this.getRenderRoot().querySelector('#case-data');
      getFormData(form, this.content, this.pageInstructions, this.data.data.caseInfo.content);
      render(mainLayout(
        this.data.uiResources.resources.views[this.casedata.content.pyViewName],
        'Obj',
        this.bShowCancel === 'true' ? this.actionAreaCancel : null,
        this.bShowSave === 'true' ? this.actionAreaSave : null,
        this,
      ), form);
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
    } else if (el.tagName === 'INPUT' && el.classList.contains('location') && !el.classList.contains('pac-target-input') &&
    window.google && window.google.maps && window.google.maps.places) {
      // eslint-disable-next-line no-new
      new window.google.maps.places.Autocomplete(el);
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
