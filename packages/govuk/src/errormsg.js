import { html } from 'lit-html';

/* this component display a banner error message */
export const showErrorMessage = (msg) => html`
<div class="govuk-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary">
<h2 class="govuk-error-summary__title" id="error-summary-title">${msg}</h2>
</div>`;
