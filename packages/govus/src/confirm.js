/* global i18n */
import { html } from 'lit-html';
import { LoadingIndicator } from './loading';

/* This component renders the case confirm screen - this screen is shown when all assignments
   have been completed and the confirm harness is rendered - this is different from the review screeen */
export const showConfirm = (name) => html`
  <legend class="usa-legend usa-legend--large">${i18n.t(name)}</legend>
  <div>
  </div>
  <div class="usa-alert usa-alert--success">
  <div class="usa-alert__body">
    <h4 class="usa-alert__heading">Success status</h4>
    <p class="usa-alert__text">
    ${i18n.t('Thank you. Your information has been submitted.')}
    </p>
  </div>
</div>
  <div id="case-data">${LoadingIndicator()}</div>`;
