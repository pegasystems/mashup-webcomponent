/* eslint-disable no-self-compare */
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { unescapeHTML, pad2char, convertTimestampToDate } from '../utils/form-utils';

const ActionSet = (data, eventType) => {
  let actionAttribute;
  if (data.control && data.control.actionSets && data.control.actionSets.length > 0) {
    for (const i in data.control.actionSets) {
      const elem = data.control.actionSets[i];
      /* TODO: one action set could contain multiple actions - we just look at the first action */
      if (elem.events.length > 0 && elem.actions.length > 0 && elem.events[0].event === eventType) {
        return elem.actions[0].action;
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

const AddWrapperDiv = (data, path, type, ComponentTemplate) => {
  if (typeof path === 'undefined') {
    return html`
      ${ComponentTemplate}
    `;
  }
  if (type === 'field-button' && !hasActions(data)) {
    return null;
  }
  return html`
    <div class="content-item field-item ${type}">
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

const Field = (data, path) => {
  if (typeof data === 'undefined' || typeof data.control === 'undefined' || typeof data.control.type === 'undefined') {
    return null;
  }
  if (data.readOnly === true) {
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
    case 'pxDate':
    case 'pxDateTime':
      return AddWrapperDiv(data, path, 'field-datetime', DateTime(data, path));
    case 'pxAutoComplete':
      return AddWrapperDiv(data, path, 'field-combobox', Combobox(data, path));
    default:
      return null;
  }
};

const DisplayText = (data, path) => {
  if (data.control.type === 'pxDate' || data.control.type === 'pxDateTime') {
    let value = convertTimestampToDate(data.value);
    if (value) {
      value = value.toDateString();
    } else {
      value = data.value;
    }
    return html`
      <span class="dataLabelForRead" data-ref="${data.reference}" id="${ifDefined(path)}">${value}</span>
    `;
  }
  return html`
    <span class="dataLabelForRead" data-ref="${data.reference}" id="${ifDefined(path)}">${data.value}</span>
  `;
};

const TextInput = (data, path) => html`
  <input
    data-ref="${data.reference}"
    ?required="${data.required === true}"
    type="text"
    id="${ifDefined(path)}"
    value="${unescapeHTML(data.value)}"
    data-action-change="${ifDefined(ActionSet(data, 'change'))}"
    data-action-click="${ifDefined(ActionSet(data, 'click'))}"
  />
`;

const NumberInput = (data, path) => html`
  <input
    data-ref="${data.reference}"
    ?required="${data.required === true}"
    type="number"
    id="${ifDefined(path)}"
    value="${data.value}"
    data-action-change="${ifDefined(ActionSet(data, 'change'))}"
    data-action-click="${ifDefined(ActionSet(data, 'click'))}"
  />
`;

const CurrencyInput = (data, path) => html`
  <input
    data-ref="${data.reference}"
    ?required="${data.required === true}"
    type="number"
    id="${ifDefined(path)}"
    value="${data.value}"
    data-action-change="${ifDefined(ActionSet(data, 'change'))}"
    data-action-click="${ifDefined(ActionSet(data, 'click'))}"
  />
`;

const EmailInput = (data, path) => html`
  <input
    data-ref="${data.reference}"
    ?required="${data.required === true}"
    type="email"
    id="${ifDefined(path)}"
    value="${data.value}"
    data-action-change="${ifDefined(ActionSet(data, 'change'))}"
    data-action-click="${ifDefined(ActionSet(data, 'click'))}"
  />
`;

const TextArea = (data, path) => html`
  <textarea
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

const Icon = (data, path) => html`
  <i
    class="${data.control.modes[1].iconStyle}"
    data-ref="${data.reference}"
    ?required="${data.required === true}"
    id="${ifDefined(path)}"
    value="${data.value}"
  />
`;

const URL = (data, path) => html`
  <a id="${ifDefined(path)}" data-ref="${data.reference}" href="${data.value}">${data.control.label}</a>
`;

const Button = (data, path) => html`
  <button
    class="${ifDefined(data.control.modes[1].controlFormat)} pzhc pzbutton"
    id="${ifDefined(path)}"
    data-ref="${ifDefined(getReference(data))}"
    data-action-click="${ifDefined(ActionSet(data, 'click'))}"
  >
    ${data.control.label}
  </button>
`;

const DeleteButton = (data, path) => html`
  <button
    class="pzhc pzbutton Icon"
    title="Delete row"
    id="${ifDefined(path)}"
    data-ref="${ifDefined(getReference(data))}"
    data-action-click="deleteRow"
  ></button>
`;

const DateTime = (data, path) => {
  let value = data.value;
  if (value !== '') {
    let dt = new Date(value);
    if (dt instanceof Date && dt.getTime() === dt.getTime()) {
      dt = new Date(dt.getTime() + dt.getTimezoneOffset() * 60000);
      value = `${dt.getFullYear()}-${pad2char(dt.getMonth() + 1)}-${pad2char(dt.getDate())}`;
    } else if (data.value.length === 8) {
      value = `${data.value.substring(0, 4)}-${data.value.substring(4, 6)}-${data.value.substring(6, 8)}`;
    }
  }
  return html`
    <input
      data-ref="${data.reference}"
      ?required="${data.required === true}"
      pattern="\\d{4}-\\d{2}-\\d{2}"
      type="date"
      id="${ifDefined(path)}"
      value="${value}"
    />
  `;
};

const RadioButtons = (data, path) => {
  let listValues;
  if (data.control && data.control.modes && data.control.modes[0].options) {
    listValues = data.control.modes[0].options;
  } else if (data.type === 'True-False') {
    listValues = [{ value: 'true' }, { value: 'false' }];
  }
  return html`
    ${listValues.map((item, index) => {
    const innerpath = `rb-${path}-${index}`;
    return html`
        <div>
          <input
            data-ref="${data.reference}"
            name=${ifDefined(path)}
            id=${innerpath}
            type="radio"
            value="${item.value}"
            ?required="${data.required === true}"
            ?checked="${item.value === data.value}"
          />
          <label for="${innerpath}">${item.value}</label>
        </div>
      `;
  })}
  `;
};

const Checkbox = (data, path) => html`
  <input data-ref="${data.reference}" id=${ifDefined(path)} type="checkbox" ?checked=${data.value === 'true'} />
`;

const DropDown = (data, path) => html`
  <select data-ref="${data.reference}" id=${ifDefined(path)} ?required="${data.required === true}">
    <option value="" title="Select...">Select...</option>
    ${data.control.modes[0].options.map(
    item => html`
        <option ?selected=${item.value === data.value}>${item.value}</option>
      `,
  )}
  </select>
`;

const showDataList = data => html`
  ${data.pxResults.map(
    item => html`
      <option>
        ${item.pyUserName}
      </option>
    `,
  )}
`;

/**
 * Generate the Combobox component
 */
const Combobox = (data, path) => {
  /* If the values are already under the options list - then just use it */
  if (data.control.modes && data.control.modes[0] && data.control.modes[0].options) {
    return html`
      <input
        data-ref="${data.reference}"
        list="${data.reference}"
        ?required="${data.required === true}"
        type="text"
        class="combobox loaded"
        id="${ifDefined(path)}"
        value="${unescapeHTML(data.value)}"
      />
      <datalist id="${data.reference}">
        ${data.control.modes[0].options.map(
    item => html`
            <option value="${item.key}">
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
      data-ref="${data.reference}"
      list="${data.reference}"
      data-pageid="${dataPageID}"
      ?required="${data.required === true}"
      type="text"
      class="combobox"
      id="${ifDefined(path)}"
      value="${data.value}"
    />
    <datalist id="${data.reference}"></datalist>
  `;
};

/**
 * Generate the Loading indicator based on pure CSS
 */
const LoadingIndicator = () => html`
  <div class="lds-ring">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
`;

export { Field, showDataList, LoadingIndicator };
