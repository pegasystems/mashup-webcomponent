/* global i18n */
import { html } from 'lit';
import { Layout } from './layout';

const SubmitActionArea = (onCancel, onSave) => html`
  <div class="action-button-area">
    ${onCancel !== null ? html`<button type="button" class="govuk-button govuk-button--secondary"
    data-module="govuk-button" @click="${onCancel}">${i18n.t('Cancel')}</button>` : ''}
    ${onSave !== null ? html`<button type="button" class="govuk-button govuk-button--secondary"
    data-module="govuk-button" @click="${onSave}">${i18n.t('Save')}</button>` : ''}
    <button type="button" data-submit="submit" class="govuk-button" data-module="govuk-button">${i18n.t('Submit')}</button>
  </div>
`;

const LocalActionArea = (onCancel, onSave) => html`
  <div class="action-button-area">
    ${onCancel !== null ? html`<button type="button" class="govuk-button govuk-button--secondary"
    data-module="govuk-button" @click="${onCancel}">${i18n.t('Cancel')}</button>` : ''}
    <button type="button" data-submit="save" class="govuk-button" data-module="govuk-button" @click="${onSave}">${i18n.t('Submit')}</button>
  </div>
`;

const CloseActionArea = (onCancel) => {
  if (onCancel === null) return null;
  return html`
  <div class="action-button-area">
  ${onCancel !== null ? html`<button type="button" class="govuk-button govuk-button--secondary" data-module="govuk-button"
  @click="${onCancel}">${i18n.t('Close')}</button>` : ''}
  </div>`;
};

const CreateActionArea = (onCancel) => html`
  <div class="action-button-area">
    ${onCancel !== null ? html`<button type="button" class="govuk-button govuk-button--secondary"
    data-module="govuk-button" @click="${onCancel}">${i18n.t('Cancel')}</button>` : ''}
    <button type="button" data-submit="create" class="govuk-button" data-module="govuk-button">${i18n.t('Create')}</button>
  </div>
`;

const AssignmentList = (assignments, onOpen) => {
  if (!assignments || assignments.length === 0) return null;
  return html`
  <h3>
  ${i18n.t('Assignments')}
  </h3>
  <table class='govuk-table'>
    <caption class="govuk-table__caption govuk-table__caption--m">List of assignments</caption>
    <thead class="govuk-table__head">
      <tr class="govuk-table__row">
        <th span='col' class="govuk-table__header">${i18n.t('Task')}</th>
        <th span='col' class="govuk-table__header">${i18n.t('Priority')}</th>
        <th span='col' class="govuk-table__header">${i18n.t('Assigned')} to</th>
        <th span='col' class="govuk-table__header">${i18n.t('Action')}</th>
      </tr>
    </thead>
      <tbody class="govuk-table__body">
        ${assignments.map((item) => html`
        <tr class="govuk-table__row">
          <td scope="row" class="govuk-table__header">${item.name}</td>
          <td class="govuk-table__header">${item.urgency}</td>
          <td class="govuk-table__header">${item.assigneeInfo.name}</td>
          <td class="govuk-table__header">
            <button type='button' @click="${onOpen}" class="govuk-button govuk-button--secondary"
            data-module="govuk-button" data-type="assignment" data-id="${item.ID}">${i18n.t('Open')}</button>
          </td>
        </tr>`)
}
  </tbody>
  </table> `;
};

export const CaseHeader = (name, data, casedata, onOpen) => {
  if (typeof data.caseID === 'undefined' && casedata.content) {
    return html`
    <div>
      <h2 class='govuk-heading-m'>${i18n.t(name)}</h2>
    </div>
    ${AssignmentList(casedata.assignments, onOpen)}`;
  }
  if (name === '' || typeof data.caseID === 'undefined') return '';
  return html`
  <div>
    <h2 class='govuk-heading-m'>${i18n.t(name)}</h2>
  </div>`;
};

export const mainLayout = (data, path, onCancel, onSave, webcomp) => html`
  <div>${Layout(data, path, false, webcomp, '')}</div>
  ${SubmitActionArea(onCancel, onSave)}
`;

export const reviewLayout = (data, path, onCancel, webcomp) => html`
  <div>${Layout(data, path, true, webcomp)}</div>
  ${CloseActionArea(onCancel)}
`;

export const saveCaseLayout = (data, path, onCancel, onSave, webcomp) => html`
  <div>${Layout(data, path, false, webcomp)}</div>
  ${LocalActionArea(onCancel, onSave)}
`;

export const createCaseLayout = (data, path, onCancel, webcomp) => html`
  <div>${Layout(data, path, false, webcomp)}</div>
  ${CreateActionArea(onCancel)}
`;

export const genPageValidationErrors = (response, form) => {
  if (response.errorDetails) {
    return html`<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary">
    <h2 class="govuk-error-summary__title" id="error-summary-title">
      There is a problem
    </h2>
    <div class="govuk-error-summary__body">
      <ul class="govuk-list govuk-error-summary__list">
    <ul>
      ${response.errorDetails.map((item) => {
    if (item.message === 'Error_Validation_Fail' || item.message === 'Validation failed: Errors Detected.') return null;
    const errorRef = item.erroneousInputOutputFieldInPage.substring(1);
    for (const el of form.elements) {
      let ref = el.getAttribute('data-ref');
      let id = el.getAttribute('id');
      if (ref === null && el.parentNode.parentNode.className === 'govuk-date-input__item') {
        const groupEl = el.closest('.govuk-form-group').parentNode.parentNode;
        ref = groupEl.getAttribute('data-ref');
        id = groupEl.getAttribute('id');
      }
      if (ref === errorRef) {
        return html`<li><a href="#${id}">${i18n.t(item.localizedValue)}</a></li>`;
      }
    }
    return html`<li>${i18n.t(item.localizedValue)}</li>`;
  })}
    </ul></div>
    </div>`;
  }
  return null;
};

export const genCaseTypesList = (data) => {
  const itemList = [];
  const keys = Object.entries(data);
  for (const i of keys) {
    itemList.push(
      html`
        <li role="menuitem" tabindex="-1" data-value="${i[0]}">${i18n.t(i[1].name)}</li>
      `,
    );
  }
  return html`
    ${itemList}
  `;
};

export const genActionsList = (name, data) => {
  const itemList = [];
  const keys = Object.entries(data.actions);
  for (const i of keys) {
    if (i[1].name !== name) {
      itemList.push(
        html`
          <li role="menuitem" tabindex="-1" data-value="${i[1].ID}">${i18n.t(i[1].name)}</li>
        `,
      );
    }
  }
  return html`
    ${itemList}
  `;
};
