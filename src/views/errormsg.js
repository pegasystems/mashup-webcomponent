import { html } from 'lit-html';
import { timesIcon } from './icons';

/* this component display a banner error message */
export const showErrorMessage = (msg, onClose) => html`
  <div class="error">${msg}
  ${onClose != null ? html`
    <button type='button' title="Click to close the banner" class="pzhc pzbutton Light" @click="${onClose}">
    ${timesIcon()}</button>` : ''}
  </div>`;
