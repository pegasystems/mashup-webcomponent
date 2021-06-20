/* global i18n */
import { html } from 'lit-html';
import { Layout } from './layout';

const SubmitActionArea = (onCancel, onSave) => html`
<ul class="usa-button-group">
    ${onCancel !== null ? html`<li class="usa-button-group__item">
    <button type="button" class="usa-button" @click="${onCancel}">${i18n.t('Cancel')}</button></li>` : ''}
    ${onSave !== null ? html`<li class="usa-button-group__item">
    <button type="button" class="usa-button" @click="${onSave}">${i18n.t('Save')}</button></li>` : ''}
    <li class="usa-button-group__item">
    <button type="button" data-submit="submit" class="usa-button">${i18n.t('Submit')}</button></li>
  </ul>
`;

const LocalActionArea = (onCancel, onSave) => html`
  <ul class="usa-button-group">
    ${onCancel !== null ? html`<li class="usa-button-group__item">
    <button type="button" class="usa-button" @click="${onCancel}">${i18n.t('Cancel')}</button></li>` : ''}
    <li class="usa-button-group__item">
    <button type="button" data-submit="save" class="usa-button" @click="${onSave}">${i18n.t('Submit')}</button></li>
  </ul>
`;

const CloseActionArea = (onCancel) => {
  if (onCancel === null) return null;
  return html`
  <ul class="usa-button-group">
  ${onCancel !== null ? html`<li class="usa-button-group__item"><button type="button" class="usa-button"
  @click="${onCancel}">${i18n.t('Close')}</button></li>` : ''}
  </ul>`;
};

const CreateActionArea = (onCancel) => html`
<ul class="usa-button-group">
    ${onCancel !== null ? html`<li class="usa-button-group__item"><button type="button" class="usa-button" 
    @click="${onCancel}">${i18n.t('Cancel')}</button></li>` : ''}
    <li class="usa-button-group__item">
    <button type="button" data-submit="create" class="usa-button">${i18n.t('Create')}</button></li>
  </ul>
`;

const AssignmentList = (assignments, onOpen) => {
  if (!assignments || assignments.length === 0) return null;
  return html`
  <h3>
  ${i18n.t('Assignments')}
  </h3>
  <table class="usa-table usa-table--borderless">
    <caption>List of assignments</caption>
    <thead>
      <tr>
        <th span='col'>${i18n.t('Task')}</th>
        <th span='col'>${i18n.t('Priority')}</th>
        <th span='col'>${i18n.t('Assigned')} to</th>
        <th span='col'>${i18n.t('Action')}</th>
      </tr>
    </thead>
      <tbody>
        ${assignments.map((item) => html`
        <tr>
          <td scope="row">${item.name}</td>
          <td>${item.urgency}</td>
          <td>${item.assigneeInfo.name}</td>
          <td>
            <button type='button' @click="${onOpen}" class="usa-button" data-type="assignment" data-id="${item.ID}">${i18n.t('Open')}</button>
          </td>
        </tr>`)
}
  </tbody>
  </table> `;
};

export const CaseHeader = (name, data, casedata, onOpen) => {
  if (typeof data.caseID === 'undefined' && casedata.content) {
    const id = casedata.content.pyID.split(' ')[1];
    return html`
    <div>
      <h2>${i18n.t(data.data.caseInfo.name)} (${id})</h2>
    </div>
    ${AssignmentList(casedata.assignments, onOpen)}
    <h3>${i18n.t('Case information')}</h3>`;
  }
  return '';
};

export const mainLayout = (data, path, onCancel, onSave, webcomp) => html`
  <fieldset class='usa-fieldset'><legend class="usa-legend usa-legend--large">${i18n.t(webcomp.data.name)}</legend>
  ${Layout(data, path, false, webcomp, '')}</fieldset>
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

export const genPageValidationErrors = (response) => {
  if (response.errorDetails) {
    return html`<div class="usa-alert usa-alert--error" role="alert">
    <div class="usa-alert__body">
      <h4 class="usa-alert__heading">Error</h4>
      ${response.errorDetails.map((item) => {
    if (item.message === 'Error_Validation_Fail' || item.message === 'Validation failed: Errors Detected.') return null;
    return html`<p class="usa-alert__text">${i18n.t(item.localizedValue)}</p>`;
  })}
    </div>
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
