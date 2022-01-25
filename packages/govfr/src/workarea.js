import { html } from 'lit';

/* This component renders the case confirm screen - this screen is shown when all assignments
   have been completed and the confirm harness is rendered - this is different from the review screeen */
export const showConfirm = () => html`Votre requete a ete soumise.`;

export const SubmitActionArea = (onCancel) => html`
<ul class="fr-btns-group fr-btns-group--inline">
    ${onCancel !== null ? html`<li><button type="button" class="fr-btn fr-btn--secondary"
    data-module="govuk-button" @click="${onCancel}">Annuler</button></li>` : ''}
    <li><button type="button" data-submit="submit" class="fr-btn">Soumettre</button></li>
  </ul>
`;

export const CloseActionArea = (onCancel) => {
  if (onCancel === null) return null;
  return html`
  <ul class="fr-btns-group fr-btns-group--inline">
  ${onCancel !== null ? html`<li><button type="button" class="fr-btn"
  @click="${onCancel}">Fermer</button></li>` : ''}
  </ul>`;
};

export const CreateActionArea = (onCancel) => html`
<ul class="fr-btns-group fr-btns-group--inline">
    ${onCancel !== null ? html`<li><button type="button" class="fr-btn fr-btn--secondary"
    @click="${onCancel}">Annuler</button><li>` : ''}
    <li><button type="button" data-submit="create" class="fr-btn">Creer</button></li>
  </ul>
`;

export const AssignmentList = (assignments, onOpen) => {
  if (!assignments || assignments.length === 0) return null;
  return html`<p>Clicker sur le bouton 'Continue' pour reouvrir la requete</p>
  <button type='button' @click="${onOpen}" class="fr-btn" data-type="assignment" data-id="${assignments[0].ID}">Continue</button>`;
};
