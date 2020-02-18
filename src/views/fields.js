/* eslint-disable no-self-compare */
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { unescapeHTML, pad2char, convertTimestampToDate } from '../utils/form-utils';
import { ActionSet, AddWrapperDiv, getReference } from '../utils/field-utils';

/**
 * Render a field - this includes rendering the label and the component
 */
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

/**
 * Formatted Text component
 */
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

/**
 * TextInput component
 */
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

/**
 * NumberInput component
 */
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

/**
 * CurrencyInput component
 */
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

/**
 * EmailInput component
 */
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

/**
 * TextArea component
 */
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

/**
 * DeleteButton component
 */
const DeleteButton = (data, path) => html`
  <button
    class="pzhc pzbutton Icon"
    title="Delete row"
    id="${ifDefined(path)}"
    data-ref="${ifDefined(getReference(data))}"
    data-action-click="deleteRow"
  ></button>
`;

/**
 * DateTime component
 */
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

/**
 * Checkbox component
 */
const Checkbox = (data, path) => html`
  <input data-ref="${data.reference}" id=${ifDefined(path)} type="checkbox" ?checked=${data.value === 'true'} />
`;

/**
 * Dropdown component
 */
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

/**
 * Combobox component - render a list of items from a data page
 */
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
 * Combobox component
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
 * Loading indicator component
 */
const LoadingIndicator = () => html`
  <span class="loading">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
  </span>
`;

const showConfirm = (name, id, status) => html`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${name} (${id})</h2>
    <span class='badge-bg-info centered'><span class='badge_text'>${status}</span></span>
  </div>
  <div class="flex layout-content-inline_middle success">
    Thank you. Your information has been submitted.
  </div>
  <h3>Case information</h3>
  <div id="case-data">${LoadingIndicator()}</div>`;

const showErrorMessage = (msg, onClose) => html`
  <div class="error">${msg}
  ${onClose != null ? html`
    <button title="Click to close the banner" class="pzhc pzbutton Icon" @click="${onClose}">
    <svg width= "24" height="24" viewBox="0 0 24 24" >
    <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81
    2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
    </svg></button>` : ''}
  </div>`;

export {
  Field, showDataList, LoadingIndicator, showConfirm, showErrorMessage,
};
