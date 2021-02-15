/* eslint-disable no-self-compare */
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import {
  getValue, unescapeHTML, pad2char, convertTimestampToDate,
} from '../../utils/form-utils';

const DisplayLabel = (data, path, type) => {
  if (typeof path === 'undefined') return null;
  const iconrequired = data.required ? 'icon-required' : '';
  if (type === 'field-checkbox') {
    return html`
    ${data.label !== ''
    ? html`<div class="field-caption dataLabelForWrite ${iconrequired}" >${unescapeHTML(data.label ? data.label : data.caption).replace('@L ', '')}
    </div>`
    : null}
  `;
  }
  return html`
    ${data.label !== ''
    ? html`<label class="field-caption dataLabelForWrite ${iconrequired}" 
    for="${ifDefined(path)}">${unescapeHTML(data.label ? data.label : data.caption).replace('@L ', '')}
    </label>`
    : null}
  `;
};

export const AddWrapperDiv = (data, path, type, ComponentTemplate) => {
  if (typeof path === 'undefined') {
    return html`
      ${ComponentTemplate}
    `;
  }
  return html`
    <div class="flex content-item field-item ${type}">
      ${DisplayLabel(data, path, type)}${ComponentTemplate}
    </div>
  `;
};

/**
 * Render a field - this includes rendering the label and the component
 */
export const Field = (data, path, isReadOnly, webcomp, context) => {
  const propName = data.config.value.replace('@P .', '');
  data.config.reference = ((typeof context === 'undefined' || context === '') ? propName : `${context}.${propName}`);
  data.config.value = getValue(webcomp.casedata.content, data.config.reference);
  if (data.config.datasource && data.config.datasource.indexOf('@ASSOCIATED') === 0) {
    const val = webcomp.data.context_data ? webcomp.data.context_data.content : webcomp.data.uiResources.context_data.caseInfo.content;
    const obj = (context === '' ? val : getValue(val, context));
    if (obj) {
      // eslint-disable-next-line no-underscore-dangle
      data.config.options = obj.summary_of_associated_lists__[propName];
    }
  }
  if (!data.config.options) {
    data.config.options = [];
  }
  if (!data.config.value) {
    data.config.value = '';
  } else {
    data.config.value = `${data.config.value}`;
  }
  if (isReadOnly === true || data.config.readOnly === 'true') {
    return AddWrapperDiv(data.config, path, 'field-text', DisplayText(data.config, path));
  }
  switch (data.type) {
    case 'Decimal':
    case 'TextInput':
      return AddWrapperDiv(data.config, path, 'field-textinput', TextInput(data.config, path));
    case 'Email':
      return AddWrapperDiv(data.config, path, 'field-emailinput', EmailInput(data.config, path));
    case 'Integer':
      return AddWrapperDiv(data.config, path, 'field-numberinput', NumberInput(data.config, path));
    case 'Currency':
      return AddWrapperDiv(data.config, path, 'field-currencyinput', CurrencyInput(data.config, path));
    case 'RadioButtons':
      return AddWrapperDiv(data.config, path, 'field-radiogroup', RadioButtons(data.config, path));
    case 'TextArea':
      return AddWrapperDiv(data.config, path, 'field-textarea', TextArea(data.config, path));
    case 'Checkbox':
      return AddWrapperDiv(data.config, path, 'field-checkbox', Checkbox(data.config, path));
    case 'Dropdown':
      return AddWrapperDiv(data.config, path, 'field-dropdown', DropDown(data.config, path));
    case 'DateTime':
      return AddWrapperDiv(data.config, path, 'field-datetime', DateTime(data.config, path));
    case 'Date':
      return AddWrapperDiv(data.config, path, 'field-datetime', pxDate(data.config, path));
    case 'Time':
      return AddWrapperDiv(data.config, path, 'field-datetime', Time(data.config, path));

    default:
      return null;
  }
};

/**
 * Formatted Text component
 */
const DisplayText = (data, path) => html`
    <span class="dataValueRead" data-ref="${data.reference}" id="${ifDefined(path)}">${unescapeHTML(data.value)}</span>
  `;

/**
 * TextInput component
 */
const TextInput = (data, path) => html`
  <input
    data-ref="${data.reference}"
    ?required="${data.required === 'true'}"
    type="text"
    id="${ifDefined(path)}"
    value="${unescapeHTML(data.value)}"
  />
`;

/**
 * NumberInput component
 */
const NumberInput = (data, path) => html`
  <input
    data-ref="${data.reference}"
    ?required="${data.required === 'true'}"
    type="number"
    id="${ifDefined(path)}"
    value="${unescapeHTML(data.value)}"
  />
`;

/**
 * NumberInput component
 */
const CurrencyInput = (data, path) => html`
  <input
    data-ref="${data.reference}"
    ?required="${data.required === 'true'}"
    type="number"
    id="${ifDefined(path)}"
    value="${unescapeHTML(data.value)}"
  />
`;

/**
 * EmailInput component
 */
const EmailInput = (data, path) => html`
  <input
    data-ref="${data.reference}"
    ?required="${data.required === 'true'}"
    type="email"
    id="${ifDefined(path)}"
    value="${unescapeHTML(data.value)}"
  />
`;

/**
 * TextArea component
 */
const TextArea = (data, path) => html`
  <textarea
    rows="3"
    data-ref="${data.reference}"
    ?required="${data.required === 'true'}"
    type="email"
    id="${ifDefined(path)}"
  >${unescapeHTML(data.value)}</textarea>
`;

/**
 * Checkbox component
 */
const Checkbox = (data, path) => html`
  <input
  data-ref="${data.reference}"
  id=${ifDefined(path)}
  type="checkbox" ?checked=${data.value === 'true'}
  />
`;

/**
 * RadioButtons component
 */
const RadioButtons = (data, path) => {
  let listValues = [{ value: 'true' }, { value: 'false' }];
  if (data.options) {
    listValues = data.options;
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
            value="${item.key}"
            ?checked="${item.key === data.value}"
          />
          <label for="${innerpath}">${item.value}</label>
        </div>
      `;
  })}
  `;
};

/**
 * Dropdown component
 */
const DropDown = (data, path) => html`<select
  data-ref="${data.reference}"
  id=${ifDefined(path)}
  ?required="${data.required === 'true'}">
    <option value="" title="Select...">Select...</option>
    ${data.options.map(
    (item) => html`<option ?selected=${item.key === data.value} value='${item.key}'>${item.value}</option>`,
  )}
  </select>`;

/**
 * DateTime component
 */
const DateTime = (data, path) => {
  let value = data.value;
  if (value !== '') {
    let dt = convertTimestampToDate(value);
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
      ?required="${data.required === 'true'}"
      pattern="\\d{4}-\\d{2}-\\d{2}"
      placeholder="mm/dd/yyyy"
      type="date"
      id="${ifDefined(path)}"
      value="${value}"
    />
  `;
};

/**
 * Date component
 */
const pxDate = (data, path) => {
  let value = data.value;
  if (value !== '') {
    let dt = convertTimestampToDate(value);
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
      ?required="${data.required === 'true'}"
      pattern="\\d{4}-\\d{2}-\\d{2}"
      placeholder="mm/dd/yyyy"
      type="date"
      id="${ifDefined(path)}"
      value="${value}"
    />
  `;
};

/**
 * Time component
 */
const Time = (data, path) => {
  let value = data.value;
  if (value !== '') {
    let dt = convertTimestampToDate(value);
    if (dt instanceof Date && dt.getTime() === dt.getTime()) {
      dt = new Date(dt.getTime() + dt.getTimezoneOffset() * 60000);
      value = `${dt.getFullYear()}-${pad2char(dt.getMonth() + 1)}-${pad2char(dt.getDate())}`;
    }
  }
  return html`
    <input
      data-ref="${data.reference}"
      ?required="${data.required === 'true'}"
      placeholder="HH:MM"
      type="time"
      id="${ifDefined(path)}"
      value="${value}"
    />
  `;
};
