import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';

export const ActionSet = (data, eventType) => {
  let actionAttribute;
  if (data.control && data.control.actionSets && data.control.actionSets.length > 0) {
    for (const i in data.control.actionSets) {
      const elem = data.control.actionSets[i];
      /* TODO: one action set could contain multiple actions - we just look at the first action */
      if (elem.events.length > 0 && elem.actions.length > 0 && elem.events[0].event === eventType) {
        let action = elem.actions[0].action;
        if (action === 'refresh' && elem.actions[0].refreshFor !== '') {
          action += `-${elem.actions[0].refreshFor}`;
        }
        return action;
      }
    }
  }
  return actionAttribute;
};

export const hasActions = (data) => {
  if (data.control && data.control.actionSets && data.control.actionSets.length > 0) {
    return true;
  }
  return false;
};


/* This is a special case for button - For an action like addRow, deleteRow, it is not possible to get the page name
 * from the action set - so as a workaround, we set the page name inside the tooltip and pass the value as reference
 */
export const getReference = (data) => {
  if (data.reference !== 'pyTemplateButton') return data.reference;
  if (data.control && data.control.modes) {
    return data.control.modes[1].tooltip;
  }
  return null;
};

/**
 * Label component
 */
const DisplayLabel = (data, path) => {
  if (typeof path === 'undefined') return null;
  const iconrequired = data.required ? 'icon-required' : '';
  return html`
    ${data.label !== '' || data.showLabel === true || data.labelReserveSpace === true
    ? html`
          <label class="field-caption dataLabelForWrite ${iconrequired}" for="${ifDefined(path)}">${data.label}</label>
        `
    : null}
  `;
};

export const AddWrapperDiv = (data, path, type, ComponentTemplate) => {
  if (typeof path === 'undefined') {
    return html`
      ${ComponentTemplate}
    `;
  }
  if (type === 'field-button' && !hasActions(data)) {
    return null;
  }
  return html`
    <div class="flex content-item field-item ${type}">
      ${type === 'field-checkbox'
    ? html`
            ${ComponentTemplate}${DisplayLabel(data, path)}
          `
    : html`
            ${DisplayLabel(data, path)}${ComponentTemplate}
          `}
    </div>
  `;
};
