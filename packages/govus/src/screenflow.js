import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
/**
 * Loading indicator component
 */
export const StepIndicator = (steps) => {
  if (steps && steps.length > 1) {
    return html`<div class="usa-step-indicator" aria-label="progress">
    <ol class="usa-step-indicator__segments">
    ${steps.map(
    (item) => {
      let status = '';
      let ariatag;
      if (item.visited_status === 'success') {
        status = 'usa-step-indicator__segment--complete';
      } else if (item.visited_status === 'current') {
        status = 'usa-step-indicator__segment--current';
        ariatag = 'current';
      }
      return html`<li
      class=${`usa-step-indicator__segment ${status}`}
      aria-current=${ifDefined(ariatag)}>
      <span class="usa-step-indicator__segment-label">${item.name}
      <span class="usa-sr-only">completed</span></span>
    </li>`;
    },
  )}
    </ol></div>`;
  }
  return null;
};

export const ProcessLists = (steps) => {
  if (steps && steps.length > 0) {
    return html`<ol class="usa-process-list">
    ${steps.map(
    (item) => html`<li class="usa-process-list__item padding-bottom-4">
      <p class="usa-process-list__heading font-sans-xl line-height-sans-1">
        ${item.name}
      </p>
    </li>`,
  )}
    </ol></div>`;
  }
  return null;
};
