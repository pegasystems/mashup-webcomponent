/* global i18n */
import { html } from 'lit';
import { Layout } from './layout';
import {
  SubmitActionArea, CloseActionArea, CreateActionArea, AssignmentList,
} from '../workarea';

export const CaseHeader = (name, data, casedata, onOpen) => {
  if (typeof data.caseID === 'undefined' && casedata.content) {
    return html`
    <div>
      <h2>${i18n.t(data.data.caseInfo.name)}</h2>
    </div>
    ${AssignmentList(casedata.assignments, onOpen)}`;
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
  <fieldset  class="fr-fieldset"><legend>${i18n.t(title)}</legend>
  ${Layout(data, path, false, webcomp, '')}</fieldset>
  ${SubmitActionArea(onCancel, onSave)}
`;
};

export const reviewLayout = (data, path, onCancel, webcomp) => html`
  <div>${Layout(data, path, true, webcomp)}</div>
  ${CloseActionArea(onCancel)}
`;

export const createCaseLayout = (data, path, onCancel, webcomp) => html`
  <div>${Layout(data, path, false, webcomp)}</div>
  ${CreateActionArea(onCancel)}
`;

export const genPageValidationErrors = (response) => {
  if (response.errorDetails) {
    return html`
    <div role="alert" class="fr-alert fr-alert--error">
    <p class="fr-alert__title">Erreur</p>
    ${response.errorDetails.map((item) => {
    if (item.message === 'Error_Validation_Fail' || item.message === 'Validation failed: Errors Detected.') return null;
    return html`<p>${i18n.t(item.localizedValue)}</p>`;
  })}
  </div>`;
  }
  return null;
};
