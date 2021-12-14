/* global i18n */
import { html } from 'lit';

/* this component display a banner error message */
export const showErrorMessage = (msg, onClose) => html`
<div role="alert" class="fr-alert fr-alert--error">
    <p class="fr-alert__title">${msg}</p>
    ${onClose != null ? html`
    <button type='button' aria-label="${i18n.t('Click to close the banner')}" class="fr-link--close fr-link"
    @click="${onClose}">${i18n.t('Close')}</button>` : ''}
</div>`;
