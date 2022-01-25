import { html } from 'lit';

const errorMap = {
  'Error: view is not defined': 'Erreur: la UI n\'est pas supportee',
  'Error TypeError: Failed to fetch': 'Erreur: Serveur is not disponible',
};

/* this component display a banner error message */
export const showErrorMessage = (msg, onClose) => {
  const errormsg = errorMap[msg] ? errorMap[msg] : msg;
  return html`
<div role="alert" class="fr-alert fr-alert--error">
    <p class="fr-alert__title">${errormsg}</p>
    ${onClose != null ? html`
    <button type='button' aria-label="Cliquer pour fermer" class="fr-link--close fr-link"
    @click="${onClose}">Fermer</button>` : ''}
</div>`;
};
