/* global i18n */
import { html } from 'lit';

/* This component renders the case confirm screen - this screen is shown when all assignments
   have been completed and the confirm harness is rendered - this is different from the review screeen */
export const showConfirm = (name) => html`
  <div>
    <h2>${i18n.t(name)}</h2>
  </div>
  <div>
    ${i18n.t('Thank you. Your information has been submitted.')}
  </div>
  <h3>${i18n.t('Case information')}</h3>
  <div id="case-data"></div>`;
