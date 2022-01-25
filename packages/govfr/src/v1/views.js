import { html } from 'lit';
import { Layout } from './layout';
import {
  SubmitActionArea, CloseActionArea, CreateActionArea, AssignmentList,
} from '../workarea';

export const CaseHeader = (name, data, casedata, onOpen) => {
  if (typeof data.caseID === 'undefined' && casedata.content) {
    return html`
    <h2>${casedata.content.pyLabel}</h2>
    ${AssignmentList(casedata.assignments, onOpen)}`;
  }
  if (name === '' || typeof data.caseID === 'undefined') return '';
  return html`<h2>${data.name}</h2>`;
};

export const mainLayout = (data, path, onCancel, webcomp) => html`
  <div>${Layout(data, path, false, webcomp)}</div>
  ${SubmitActionArea(onCancel)}
`;

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
    <p class="fr-alert__title">Erreur</p><ul>
      ${response.errorDetails.map((item) => html`<li>${item.localizedValue}</li>`)}
    </ul>`;
  }
  return html`
  <div role="alert" class="fr-alert fr-alert--error">
    <p class="fr-alert__title">Erreur</p><ul>
    ${response.errors[0].ValidationMessages.map((item) => {
    if (item.Path) {
      return html`
          <li>${item.Path.substring(1)}: ${item.ValidationMessage}</li>
        `;
    }
    if (item.ValidationMessage.indexOf('Validation failed') === 0) {
      return null;
    }
    return html`
    <li>${item.ValidationMessage}</li>
  `;
  })}
  </ul>`;
};
