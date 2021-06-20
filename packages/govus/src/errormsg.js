/* global i18n */
import { html } from 'lit-html';

/* this component display a banner error message */
export const showErrorMessage = (msg, onClose) => html`
<div class="usa-alert usa-alert--error" role="alert">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">${msg}</h4>
  ${onClose != null ? html`
    <button type='button' aria-label="${i18n.t('Click to close the banner')}" class="usa-button" 
    @click="${onClose}">${i18n.t('Close')}</button>` : ''}
  </div>
  </div>`;
