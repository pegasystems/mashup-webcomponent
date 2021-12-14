/* global i18n */
import { html } from 'lit';
import { Layout } from './layout';
import { StepIndicator } from './screenflow';

const SubmitActionArea = (onCancel, onSave) => html`
<ul class="fr-btns-group fr-btns-group--inline">
    ${onCancel !== null ? html`<li><button type="button" class="fr-btn fr-btn--secondary"
    data-module="govuk-button" @click="${onCancel}">${i18n.t('Cancel')}</button></li>` : ''}
    ${onSave !== null ? html`<li><button type="button" class="fr-btn  fr-btn--secondary"
    data-module="govuk-button" @click="${onSave}">${i18n.t('Save')}</button></li>` : ''}
    <li><button type="button" data-submit="submit" class="fr-btn">${i18n.t('Submit')}</button></li>
  </ul>
`;

const LocalActionArea = (onCancel, onSave) => html`
<ul class="fr-btns-group fr-btns-group--inline">
${onCancel !== null ? html`<li><button type="button" class="fr-btn fr-btn--secondary"
@click="${onCancel}">${i18n.t('Cancel')}</button></li>` : ''}
<li><button type="button" data-submit="save" class="fr-btn" @click="${onSave}">${i18n.t('Submit')}</button></li>
</ul>
`;

const CloseActionArea = (onCancel) => {
  if (onCancel === null) return null;
  return html`
  <ul class="fr-btns-group fr-btns-group--inline">
  ${onCancel !== null ? html`<li><button type="button" class="fr-btn"
  @click="${onCancel}">${i18n.t('Close')}</button></li>` : ''}
  </ul>`;
};

const CreateActionArea = (onCancel) => html`
<ul class="fr-btns-group fr-btns-group--inline">
    ${onCancel !== null ? html`<li><button type="button" class="fr-btn  fr-btn--secondary"
    @click="${onCancel}">${i18n.t('Cancel')}</button><li>` : ''}
    <li><button type="button" data-submit="create" class="fr-btn">${i18n.t('Create')}</button></li>
  </ul>
`;

const AssignmentList = (assignments, onOpen) => {
  if (!assignments || assignments.length === 0) return null;
  return html`<p>You have a pending request - click 'continue' to re-open the request</p>
  <button type='button' @click="${onOpen}" class="fr-btn" data-type="assignment" data-id="${assignments[0].ID}">${i18n.t('Continue')}</button>`;
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
  <fieldset><legend>${i18n.t(title)}</legend>
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
    return html`
    <div role="alert" class="fr-alert fr-alert--error">
    <p class="fr-alert__title">Errro</p>
    ${response.errorDetails.map((item) => {
    if (item.message === 'Error_Validation_Fail' || item.message === 'Validation failed: Errors Detected.') return null;
    return html`<p>${i18n.t(item.localizedValue)}</p>`;
  })}
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
