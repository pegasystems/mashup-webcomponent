import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined';
/**
 * Loading indicator component
 */
export const StepIndicator = (steps) => {
  if (steps && steps.length > 1) {
    return html`<div class="fr-step-indicator" aria-label="progress">
    <ol class="fr-step-indicator__segments">
    ${steps.map(
    (item) => {
      let status = '';
      let ariatag;
      if (item.visited_status === 'success') {
        status = 'fr-step-indicator__segment--complete';
      } else if (item.visited_status === 'current') {
        status = 'fr-step-indicator__segment--current';
        ariatag = 'current';
      }
      return html`<li
      class=${`fr-step-indicator__segment ${status}`}
      aria-current=${ifDefined(ariatag)}>
      <span class="fr-step-indicator__segment-label">${item.name}
      <span class="fr-sr-only">completed</span></span>
    </li>`;
    },
  )}
    </ol></div>`;
  }
  return null;
};

export const ProcessLists = (steps) => {
  if (steps && steps.length > 0) {
    return html`<ol class="fr-process-list">
    ${steps.map(
    (item) => html`<li class="fr-process-list__item padding-bottom-4">
      <p class="fr-process-list__heading font-sans-xl line-height-sans-1">
        ${item.name}
      </p>
    </li>`,
  )}
    </ol></div>`;
  }
  return null;
};
