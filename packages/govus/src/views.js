/* global i18n */
import { html } from 'lit-html';
import { Layout } from './layout';
import { StepIndicator } from './screenflow';

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
  return html`<button type='button' @click="${onOpen}" class="usa-button" data-type="assignment" data-id="${assignments[0].ID}">${i18n.t('Continue')}</button>`;
};

export const CaseHeader = (name, data, casedata, onOpen) => {
  if (typeof data.caseID === 'undefined' && casedata.content) {
    return html`
    <div>
      <h2>${i18n.t(data.data.caseInfo.name)}</h2>
    </div>
    ${AssignmentList(casedata.assignments, onOpen)}`;
  }
  if (data.uiResources && data.uiResources.navigation && data.uiResources.navigation.steps) {
    return StepIndicator(data.uiResources.navigation.steps);
  }
  return '';
};

export const mainLayout = (data, path, onCancel, onSave, webcomp) => {
  let title = webcomp.data.name;
  if (webcomp.data && webcomp.data.data) {
    if (!title || title === '') title = webcomp.data.data.caseInfo.name;
    if (webcomp.data.data.caseInfo.assignments[0].instructions !== '') {
      title = webcomp.data.data.caseInfo.assignments[0].instructions;
    }
  }
  return html`
  <fieldset class='usa-fieldset'><legend class="usa-legend usa-legend--large">${i18n.t(title)}</legend>
  ${Layout(data, path, false, webcomp, '')}</fieldset>
  ${SubmitActionArea(onCancel, onSave)}
`;
};

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
