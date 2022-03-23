/* global i18n */
import { html } from 'lit';

/* this component display a banner error message */
export const showErrorMessage = (msg, onClose) => html`
<div role="alert" class="fr-alert fr-alert--error">
    <p class="fr-alert__title">${i18n.t(msg)}</p>
    ${onClose != null ? html`
    <button type='button' aria-label="Cliquer pour fermer" class="fr-link--close fr-link"
    @click="${onClose}">Fermer</button>` : ''}
</div>`;
