/* eslint-disable no-self-compare */
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined';
import { unescapeHTML, pad2char, convertTimestampToDate } from '../../../core/src/utils/form-utils';

const ActionSet = (data, eventType) => {
  let actionAttribute;
  if (data.control && data.control.actionSets && data.control.actionSets.length > 0) {
    for (const elem of data.control.actionSets) {
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

const hasActions = (data) => {
  if (data.control && data.control.actionSets && data.control.actionSets.length > 0) {
    return true;
  }
  return false;
};

/* This is a special case for button - For an action like addRow, deleteRow, it is not possible to get the page name
 * from the action set - so as a workaround, we set the page name inside the tooltip and pass the value as reference
 */
const getReference = (data) => {
  if (data.reference !== 'pyTemplateButton') return data.reference;
  if (data.control && data.control.modes) {
    return data.control.modes[1].tooltip;
  }
  return null;
};

/**
 * Label component
 */
const DisplayLabel = (data, path, type) => {
  if (typeof path === 'undefined') return null;
  const iconrequired = data.required && data.readOnly !== true ? html`<span class="fr-input-asterix">*</span>` : '';
  if (type === 'field-checkbox') {
    if (data.label !== '' || data.showLabel === true) {
      return html`<legend>${unescapeHTML(data.label)}</legend>`;
    }
    return null;
  }
  if (type === 'field-text' && data.readOnly === true && data.control.type === 'pxCheckbox' && data.control.label) {
    return html`<label class="fr-label">${unescapeHTML(data.control.label)}${iconrequired}</label>`;
  }
  if (data.label !== '' || data.showLabel === true || data.labelReserveSpace === true) {
    return html`<label class="fr-label" for="${ifDefined(path)}">${unescapeHTML(data.label)}${iconrequired}</label>`;
  }
  return null;
};

const AddWrapperDiv = (data, path, type, ComponentTemplate) => {
  if (typeof path === 'undefined') {
    return html`
      ${ComponentTemplate}
    `;
  }
  if (type === 'field-button' && !hasActions(data)) {
    return null;
  }
  if (type === 'field-radiogroup' || type === 'field-checkbox') {
    return html`
    ${ComponentTemplate}
  `;
  }
  return html`
  <div class="fr-input-group">${DisplayLabel(data, path, type)}${ComponentTemplate}</div>
  `;
};
/**
 * Render a field - this includes rendering the label and the component
 */
export const Field = (data, path, isReadOnly) => {
  if (typeof data === 'undefined' || typeof data.control === 'undefined' || typeof data.control.type === 'undefined') {
    return null;
  }
  if (data.customAttributes && data.customAttributes.display === 'none') {
    return null;
  }
  if (isReadOnly === true || data.readOnly === true || data.control.type === 'pxHidden') {
    return AddWrapperDiv(data, path, 'field-text', DisplayText(data, path));
  }
  switch (data.control.type) {
    case 'pxPhone':
    case 'pxTextInput':
      return AddWrapperDiv(data, path, 'field-textinput', TextInput(data, path));
    case 'pxInteger':
    case 'pxNumber':
      return AddWrapperDiv(data, path, 'field-numberinput', NumberInput(data, path));
    case 'pxCurrency':
      return AddWrapperDiv(data, path, 'field-currencyinput', CurrencyInput(data, path));
    case 'pxEmail':
      return AddWrapperDiv(data, path, 'field-emailinput', EmailInput(data, path));
    case 'pxTextArea':
      return AddWrapperDiv(data, path, 'field-textarea', TextArea(data, path));
    case 'pxRadioButtons':
      return AddWrapperDiv(data, path, 'field-radiogroup', RadioButtons(data, path));
    case 'pxCheckbox':
      return AddWrapperDiv(data, path, 'field-checkbox', Checkbox(data, path));
    case 'pxDropdown':
      return AddWrapperDiv(data, path, 'field-dropdown', DropDown(data, path));
    case 'pxDisplayText':
      return AddWrapperDiv(data, path, 'field-text', DisplayText(data, path));
    case 'pxIcon':
      return AddWrapperDiv(data, path, 'field-icon', Icon(data, path));
    case 'pxLink':
    case 'pxURL':
      return AddWrapperDiv(data, path, 'field-url', URL(data, path));
    case 'pxIconDeleteItem':
      return AddWrapperDiv(data, path, 'field-button', DeleteButton(data, path));
    case 'pxButton':
      return AddWrapperDiv(data, path, 'field-button', Button(data, path));
    case 'pxDateTime':
      if (data.type === 'TimeOfDay') {
        return AddWrapperDiv(data, path, 'field-time', TimeInput(data, path));
      } if (data.type === 'Date') {
        return AddWrapperDiv(data, path, 'field-date', DateInputInput(data, path));
      }
      return AddWrapperDiv(data, path, 'field-datetime', DateTimeInput(data, path));
    case 'pxAutoComplete':
      return AddWrapperDiv(data, path, 'field-combobox', Combobox(data, path));
    case 'pxSlider':
      return AddWrapperDiv(data, path, 'field-slider', Slider(data, path));
    default:
      return null;
  }
};

/**
 * Formatted Text component
 */
const DisplayText = (data, path) => {
  if (data.control.type === 'pxDate') {
    let value = convertTimestampToDate(data.value);
    if (value) {
      if (data.control && data.control.modes.length === 2) {
        let options = {};
        switch (data.control.modes[1].dateFormat) {
          case 'DateTime-Short-YYYY':
          case 'Date-DayMonthYear-Custom':
          case 'Date-Mediun':
            options = {
              year: 'numeric', month: 'short', day: 'numeric',
            };
            break;
          case 'Date-Short':
            options = {
              year: 'numeric', month: 'numeric', day: 'numeric',
            };
            break;
          case 'Date-Long':
            options = {
              year: 'numeric', month: 'long', day: 'numeric',
            };
            break;
          case 'Date-Full':
            options = {
              weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            };
            break;
          default:
            options = {};
            break;
        }
        value = new Intl.DateTimeFormat([], options).format(value);
      } else {
        value = new Intl.DateTimeFormat().format(value);
      }
    } else {
      value = data.value;
    }
    return html`
      <span class="dataValueRead" data-ref="${data.reference}" id="${ifDefined(path)}">${value}</span>
    `;
  }
  if (data.control.type === 'pxDateTime') {
    let value = convertTimestampToDate(data.value);
    if (value) {
      if (data.control && data.control.modes.length === 2) {
        let options = {};
        switch (data.control.modes[1].dateTimeFormat) {
          case 'DateTime-Short-YYYY':
            options = {
              year: 'numeric',
              month: 'numeric',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            };
            break;
          default:
            options = {};
            break;
        }
        value = new Intl.DateTimeFormat([], options).format(value);
      } else {
        value = new Intl.DateTimeFormat().format(value);
      }
    } else {
      value = data.value;
    }
    return html`
      <span class="dataValueRead" data-ref="${data.reference}" id="${ifDefined(path)}">${value}</span>
    `;
  }
  if (data.control.type === 'pxTime') {
    let value = convertTimestampToDate(data.value);
    if (value) {
      if (data.control && data.control.modes.length === 2) {
        const options = {
          hour: 'numeric',
          minute: 'numeric',
        };
        value = new Intl.DateTimeFormat([], options).format(value);
      } else {
        value = new Intl.DateTimeFormat().format(value);
      }
    } else {
      value = data.value;
    }
    return html`
      <span class="dataValueRead" data-ref="${data.reference}" id="${ifDefined(path)}">${value}</span>
    `;
  }
  if (data.control.type === 'pxHidden') {
    return html`
    <input type="text" style="display:none" data-ref="${data.reference}" id="${ifDefined(path)}" value="${unescapeHTML(data.value)}"/>
    `;
  }
  let value = data.value;
  if (data.control && data.control.modes.length === 2 && data.control.modes[0].listSource === 'locallist') {
    for (const elem of data.control.modes[0].options) {
      if (elem.key === value) { value = elem.value; }
    }
  }
  if (data.control.type === 'pxCurrency') {
    value = `$${value}`;
  }
  return html`
    <span class="dataValueRead" data-ref="${data.reference}" id="${ifDefined(path)}">${unescapeHTML(value)}</span>
  `;
};

/**
 * TextInput component
 */
const TextInput = (data, path) => html`
  <input
    class="fr-input"
    data-ref="${data.reference}"
    ?required="${data.required === true}"
    type="text"
    id="${ifDefined(path)}"
    value="${unescapeHTML(data.value)}"
    data-action-change="${ifDefined(ActionSet(data, 'change'))}"
    data-action-click="${ifDefined(ActionSet(data, 'click'))}"
  />
`;

/**
 * Slider component
 */
const Slider = (data, path) => html`
  <input
    data-ref="${data.reference}"
    ?required="${data.required === true}"
    type="range"
    id="${ifDefined(path)}"
    value="${unescapeHTML(data.value)}"
    data-action-change="${ifDefined(ActionSet(data, 'change'))}"
    data-action-click="${ifDefined(ActionSet(data, 'click'))}"
  />
`;
/**
 * NumberInput component
 */
const NumberInput = (data, path) => html`
  <input
    class="fr-input"
    data-ref="${data.reference}"
    ?required="${data.required === true}"
    type="number"
    id="${ifDefined(path)}"
    value="${data.value}"
    data-action-change="${ifDefined(ActionSet(data, 'change'))}"
    data-action-click="${ifDefined(ActionSet(data, 'click'))}"
  />
`;

/**
 * CurrencyInput component
 */
const CurrencyInput = (data, path) => html`
  <input
    class="fr-input"
    data-ref="${data.reference}"
    ?required="${data.required === true}"
    type="number"
    id="${ifDefined(path)}"
    value="${data.value}"
    data-action-change="${ifDefined(ActionSet(data, 'change'))}"
    data-action-click="${ifDefined(ActionSet(data, 'click'))}"
  />
`;

/**
 * EmailInput component
 */
const EmailInput = (data, path) => html`
  <input
    class="fr-input"
    data-ref="${data.reference}"
    ?required="${data.required === true}"
    type="email"
    id="${ifDefined(path)}"
    value="${data.value}"
    data-action-change="${ifDefined(ActionSet(data, 'change'))}"
    data-action-click="${ifDefined(ActionSet(data, 'click'))}"
  />
`;

/**
 * TextArea component
 */
const TextArea = (data, path) => html`
  <textarea
    class="fr-input"
    data-ref="${data.reference}"
    rows="3"
    ?required="${data.required === true}"
    id="${ifDefined(path)}"
    data-action-change="${ifDefined(ActionSet(data, 'change'))}"
    data-action-click="${ifDefined(ActionSet(data, 'click'))}"
  >
${unescapeHTML(data.value)}</textarea
  >
`;

/**
 * Icon component
 */
const Icon = (data, path) => html`
  <i
    class="${data.control.modes[1].iconStyle}"
    data-ref="${data.reference}"
    ?required="${data.required === true}"
    id="${ifDefined(path)}"
    value="${data.value}"
  />
`;

/**
 * URL component
 */
const URL = (data, path) => html`
  <a id="${ifDefined(path)}" data-ref="${data.reference}" href="${data.value}">${data.control.label}</a>
`;

/**
 * Button component
 */
const Button = (data, path) => {
  const action = ActionSet(data, 'click');
  if (action === 'deleteRow') return DeleteButton(data, path);
  return html`
  <button
    type='button'
    class="fr-btn"
    id="${ifDefined(path)}"
    data-ref="${ifDefined(getReference(data))}"
    data-action-click="${ifDefined(action)}"
  >${data.control.label}</button>`;
};

/**
 * DeleteButton component
 */
const DeleteButton = (data, path) => html`
  <button
    type='button'
    class="fr-btn"
    title="Effacer la ligne"
    id="${ifDefined(path)}"
    data-ref="${ifDefined(getReference(data))}"
    data-action-click="deleteRow"
  >Effacer</button>
`;

/**
 * DateTime component
 */
const DateTimeInput = (data, path) => {
  let value = data.value;
  if (value !== '') { /* Should be formatted as yyyy-MM-ddThh:mm */
    const dt = convertTimestampToDate(value);
    if (dt instanceof Date && dt.getTime() === dt.getTime()) {
      value = `${dt.getUTCFullYear()}-${pad2char(dt.getUTCMonth() + 1)}-${pad2char(dt.getUTCDate())}` +
      `T${pad2char(dt.geUTCtHours())}:${pad2char(dt.getUTCMinutes())}`;
    } else if (data.value.length === 8) {
      value = `${data.value.substring(0, 4)}-${data.value.substring(4, 6)}-${data.value.substring(6, 8)}T00:00`;
    }
  }
  return html`
    <input
      class="fr-input"
      data-ref="${data.reference}"
      ?required="${data.required === true}"
      type="datetime-local"
      id="${ifDefined(path)}"
      value="${value}"
      data-action-change="${ifDefined(ActionSet(data, 'change'))}"
    data-action-click="${ifDefined(ActionSet(data, 'click'))}"
    />
  `;
};

/**
 * Date component
 */
const DateInputInput = (data, path) => {
  let value = data.value;
  if (value !== '') { /* Should be formatted as yyyy-MM-dd */
    const dt = convertTimestampToDate(value);
    if (dt instanceof Date && dt.getTime() === dt.getTime()) {
      value = `${dt.getUTCFullYear()}-${pad2char(dt.getUTCMonth() + 1)}-${pad2char(dt.getUTCDate())}`;
    } else if (data.value.length === 8) {
      value = `${data.value.substring(0, 4)}-${data.value.substring(4, 6)}-${data.value.substring(6, 8)}`;
    }
  }
  return html`
    <input
      class="fr-input"
      data-ref="${data.reference}"
      ?required="${data.required === true}"
      type="date"
      id="${ifDefined(path)}"
      value="${value}"
      data-action-change="${ifDefined(ActionSet(data, 'change'))}"
    data-action-click="${ifDefined(ActionSet(data, 'click'))}"
    />
  `;
};

/**
 * Time component
 */
const TimeInput = (data, path) => {
  let value = data.value;
  if (value !== '') { /* Should be formatted as hh:mm:ss */
    const dt = convertTimestampToDate(value);
    if (dt instanceof Date && dt.getTime() === dt.getTime()) {
      value = `${pad2char(dt.getUTCHours())}-${pad2char(dt.getUTCMinutes())}-${pad2char(dt.getUTCSeconds())}`;
    } else if (data.value.length === 8) {
      value = `${data.value.substring(9, 10)}:${data.value.substring(10, 11)}:${data.value.substring(11, 12)}`;
    }
  }
  return html`
    <input
      class="fr-input"
      data-ref="${data.reference}"
      ?required="${data.required === true}"
      type="time"
      id="${ifDefined(path)}"
      value="${value}"
      data-action-change="${ifDefined(ActionSet(data, 'change'))}"
      data-action-click="${ifDefined(ActionSet(data, 'click'))}"
    />
  `;
};

/**
 * RadioButtons component
 */
const RadioButtons = (data, path) => {
  let listValues;
  if (data.control && data.control.modes && data.control.modes[0].options) {
    listValues = data.control.modes[0].options;
  } else if (data.type === 'True-False') {
    listValues = [{ value: 'true' }, { value: 'false' }];
  }
  if (typeof listValues === 'undefined') return null;
  return html`<div class="fr-form-group"><fieldset class="fr-fieldset"><div class="fr-fieldset__content">
   ${data.label !== '' ? html`<legend class="fr-fieldset__legend fr-text--regular" id='radio-legend'>${unescapeHTML(data.label)}</legend>` : ''}
    ${listValues.map((item, index) => {
    const innerpath = `rb-${path}-${index}`;
    return html`
        <div class="fr-radio-group">
          <input
            data-ref="${data.reference}"
            name=${ifDefined(path)}
            id="${innerpath}"
            type="radio"
            value="${item.key}"
            ?required="${data.required === true}"
            ?checked="${item.key === data.value}"
            data-action-change="${ifDefined(ActionSet(data, 'change'))}"
          />
          <label class="fr-label" for="${innerpath}">${item.value}</label>
        </div>
      `;
  })}
  </div></fieldset></div>`;
};

/**
 * Checkbox component
 */
const Checkbox = (data, path) => {
  const iconrequired = data.required && data.readOnly !== true ? html`<span class="fr-input-asterix">*</span>` : '';
  return html`
  <div class="fr-checkbox-group"><input
  class="fr-checkbox"
  data-ref="${data.reference}"
  id="${ifDefined(path)}"
  type="checkbox"
  ?checked=${data.value === 'true'}
  data-action-change="${ifDefined(ActionSet(data, 'change'))}"
  data-action-click="${ifDefined(ActionSet(data, 'click'))}"
  />
  <label class="fr-label" for="${ifDefined(path)}">${data.control.label}${iconrequired}</label></div>
`;
};

/**
 * Dropdown component
 */
const DropDown = (data, path) => {
  if (data.control && data.control.modes[0] && data.control.modes[0].options) {
    return html`<select
      class="fr-select"
      data-ref="${data.reference}"
      id=${ifDefined(path)}
      ?required="${data.required === true}"
      data-action-change="${ifDefined(ActionSet(data, 'change'))}"
      data-action-click="${ifDefined(ActionSet(data, 'click'))}">
        <option value="" title="Select...">Select...</option>
        ${data.control.modes[0].options.map(
    (item) => html`
            <option ?selected=${item.key === data.value} value='${item.key}'>${item.value}</option>
          `,
  )}
      </select>`;
  }
  return html`<input
      class="fr-input"
      type='text'
      data-ref="${data.reference}"
      id=${ifDefined(path)}
      ?required="${data.required === true}"
      data-action-change="${ifDefined(ActionSet(data, 'change'))}"
      data-action-click="${ifDefined(ActionSet(data, 'click'))}">
      </input>`;
};

/**
 * Combobox component
 */
const Combobox = (data, path) => {
  /* If the values are already under the options list - then just use it */
  if (data.control.modes && data.control.modes[0] && data.control.modes[0].options) {
    return html`
      <input
        class="fr-input"
        data-ref="${data.reference}"
        list="${data.reference}"
        ?required="${data.required === true}"
        type="text"
        class="combobox loaded"
        id="${ifDefined(path)}"
        value="${unescapeHTML(data.value)}"
        data-action-change="${ifDefined(ActionSet(data, 'change'))}"
        data-action-click="${ifDefined(ActionSet(data, 'click'))}"
      />
      <datalist id="${data.reference}">
        ${data.control.modes[0].options.map(
    (item) => html`
            <option value="${item.value}">
              ${item.key}
            </option>
          `,
  )}
      </datalist>
    `;
  }
  let dataPageID = '';
  if (data.control && data.control.modes && data.control.modes[0] && data.control.modes[0].dataPageID) {
    dataPageID = data.control.modes[0].dataPageID;
  }
  return html`
    <input
      class="fr-input"
      data-ref="${data.reference}"
      list="${data.reference}"
      data-pageid="${dataPageID}"
      ?required="${data.required === true}"
      type="text"
      class="combobox"
      id="${ifDefined(path)}"
      value="${data.value}"
      data-action-change="${ifDefined(ActionSet(data, 'change'))}"
      data-action-click="${ifDefined(ActionSet(data, 'click'))}"
    />
    <datalist id="${data.reference}"></datalist>
  `;
};
