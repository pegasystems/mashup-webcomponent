/* global i18n */
import { html } from 'lit-html';

/* this component display a banner error message */
export const showErrorMessage = (msg, onClose) => html`
  <div class="error">${msg}
  ${onClose != null ? html`
    <button type='button' aria-label="${i18n.t('Click to close the banner')}" class="govuk-button govuk-button--secondary" 
    data-module="govuk-button" @click="${onClose}">
    Close</button>` : ''}
  </div>`;
