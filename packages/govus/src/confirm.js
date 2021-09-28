import { html } from 'lit-html';
import { LoadingIndicator } from './loading';

/* This component renders the case confirm screen - this screen is shown when all assignments
   have been completed and the confirm harness is rendered - this is different from the review screeen */
export const showConfirm = () => html`
  <div id="case-data">${LoadingIndicator()}</div>`;
