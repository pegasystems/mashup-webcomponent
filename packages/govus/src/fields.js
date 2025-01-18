/* global i18n */
 
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined';
import { unescapeHTML, pad2char, convertTimestampToDate } from '../../core/src/utils/form-utils';
import { FieldPreProcessing } from '../../core/src/utils/fields-utils';

const DisplayLabel = (data, path, type) => {
  if (typeof path === 'undefined') return null;
  const iconrequired = data.requiredstate ? html` <abbr title="required" class="usa-hint usa-hint--required">*</abbr>` : '';
  if (type === 'field-checkbox') {
    if (data.label && data.label !== '') {
      return html`<legend>${data.displaylabel}</legend>`;
    }
    return null;
  }
  return html`
    ${data.label !== ''
    ? html`<label class="usa-label"
    for="${ifDefined(path)}">${data.displaylabel}${iconrequired}
    </label>`
    : null}
  `;
};

const DisplayHelperText = (data, path) => {
  if (data.helperText && data.helperText !== '') {
    return html`<div id=${`${path}-info`} class="usa-hint">${data.displayhelperText}</div>`;
  }
  return null;
};

const GetAriaDescribedByID = (data, path) => {
  if (data.helperText && data.helperText !== '') {
    return `${path}-info`;
  }
  return undefined;
};

const GetPlaceholder = (data) => {
  if (data.placeholder && data.placeholder !== '') {
    return data.displayplaceholder;
  }
  return undefined;
};
export const AddWrapperDiv = (data, path, type, ComponentTemplate) => {
  if (typeof path === 'undefined' || path === '') {
    return html`
      ${ComponentTemplate}
    `;
  }
  return html`
    <div class="usa-field" ?disabled="${data.disabledstate}">
      ${DisplayLabel(data, path, type)}${DisplayHelperText(data, path)}${ComponentTemplate}
    </div>
  `;
};

export const DisplaySummaryRow = (data, path, type, ComponentTemplate) => html`<div>
    <dt class="usa-field">
      ${DisplayLabel(data, path, type)}
      </dt>
    <dd>${ComponentTemplate}</dd>
    </div>
  `;

/**
 * Render a field - this includes rendering the label and the component
 */
export const Field = (data, path, isReadOnly, webcomp, context) => {
  const retVal = FieldPreProcessing(data, path, isReadOnly, webcomp, context);
  if (retVal !== 'OK') return retVal;

  if (isReadOnly === true || data.config.readonlystate) {
    return AddWrapperDiv(data.config, path, 'field-text', DisplayText(data.config, data.type, path));
  }
  switch (data.type) {
    case 'TextContent':
      return DisplayText(data.config, data.type, path);
    case 'Decimal':
    case 'TextInput':
      return AddWrapperDiv(data.config, path, 'field-textinput', TextInput(data.config, path));
    case 'Phone':
      return AddWrapperDiv(data.config, path, 'field-phoneinput', PhoneInput(data.config, path));
    case 'Email':
      return AddWrapperDiv(data.config, path, 'field-emailinput', EmailInput(data.config, path));
    case 'Integer':
      return AddWrapperDiv(data.config, path, 'field-numberinput', NumberInput(data.config, path));
    case 'Percentage':
      return AddWrapperDiv(data.config, path, 'field-percentage', PercentageInput(data.config, path));
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
      return AddWrapperDiv(data.config, path, 'field-datetime', DateTimeInput(data.config, path));
    case 'Date':
      return AddWrapperDiv(data.config, path, 'field-date', DateInput(data.config, path));
    case 'Time':
      return AddWrapperDiv(data.config, path, 'field-time', TimeInput(data.config, path));
    case 'AutoComplete':
      return AddWrapperDiv(data.config, path, 'field-autocomplete', Combobox(data.config, path));
    case 'SemanticLink':
      return AddWrapperDiv(data.config, path, 'field-semanticlink', SemanticLink(data.config, path));
    case 'Location':
      return AddWrapperDiv(data.config, path, 'field-location', LocationInput(data.config, path, webcomp));
    default:
      return null;
  }
};

/**
 * Formatted Text component
 */
const DisplayText = (data, type, path) => {
  let value = data.displayvalue;
  if (value !== '') {
    if (type === 'Phone') {
      return html`<a data-ref="${data.reference}" id="${ifDefined(path)}" href="${`tel:${value}`}">${value}</a>`;
    } if (type === 'Date') {
      const options = {
        year: 'numeric', month: 'short', day: 'numeric',
      };
      value = new Intl.DateTimeFormat([], options).format(new Date(data.displayvalue));
    } else if (type === 'DateTime') {
      value = convertTimestampToDate(data.displayvalue);
      const options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      };
      value = new Intl.DateTimeFormat([], options).format(new Date(data.displayvalue));
    } else if (type === 'Time') {
      const options = {
        hour: 'numeric',
        minute: 'numeric',
      };
      value = new Intl.DateTimeFormat([], options).format(new Date(data.displayvalue));
    }
  }
  if (type === 'TextContent') {
    if (data.displayAs === 'Paragraph') {
      return html`<p>${i18n.t(data.content)}</p>`;
    } if (data.displayAs === 'Heading 1') {
      return html`<h1>${i18n.t(data.content)}</h1>`;
    } if (data.displayAs === 'Heading 2') {
      return html`<h2>${i18n.t(data.content)}</h2>`;
    } if (data.displayAs === 'Heading 3') {
      return html`<h3>${i18n.t(data.content)}</h3>`;
    } if (data.displayAs === 'Heading 4') {
      return html`<h4>${i18n.t(data.content)}</h4>`;
    }
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
    class="usa-input"
    data-ref="${data.reference}"
    ?required="${data.requiredstate}"
    ?readonly="${data.readonlystate}"
    ?disabled="${data.disabledstate}"
    placeholder="${ifDefined(GetPlaceholder(data))}"
    type="text"
    aria-describedby="${ifDefined(GetAriaDescribedByID(data, path))}"
    id="${ifDefined(path)}"
    value="${unescapeHTML(data.displayvalue)}"
  />
`;

/**
 * PhoneInput component
 */
const PhoneInput = (data, path) => {
  let callingcode = '';
  for (const ccode of data.options) {
    if (data.displayvalue.indexOf(ccode.pyCallingCode) === 0) {
      callingcode = ccode.pyCallingCode;
    }
  }
  data.displayvalue = data.displayvalue.substring(callingcode.length);
  return html`
<div class='field-phoneinput'>
<select
  class="usa-select field-countrycode"
  ?readonly="${data.readonlystate}"
  ?disabled="${data.disabledstate}"
  aria-label="${i18n.t('Select country code')}">
  ${data.options.map((item) => html`<option ?selected=${item.pyCallingCode === callingcode}
  value='${item.pyCallingCode}'>${item.pyCallingCode}</option>`)}
</select>
 <input
   class="usa-input"
   data-ref="${data.reference}"
   ?required="${data.requiredstate}"
   ?readonly="${data.readonlystate}"
   ?disabled="${data.disabledstate}"
   placeholder="${ifDefined(GetPlaceholder(data))}"
   type="tel"
   aria-describedby="${ifDefined(GetAriaDescribedByID(data, path))}"
   id="${ifDefined(path)}"
   value="${unescapeHTML(data.displayvalue)}"
 />
 </div>
`;
};

/**
 * NumberInput component
 */
const NumberInput = (data, path) => html`
  <input
    class="usa-input"
    data-ref="${data.reference}"
    ?required="${data.requiredstate}"
    ?readonly="${data.readonlystate}"
    ?disabled="${data.disabledstate}"
    placeholder="${ifDefined(GetPlaceholder(data))}"
    type="number"
    aria-describedby="${ifDefined(GetAriaDescribedByID(data, path))}"
    id="${ifDefined(path)}"
    value="${unescapeHTML(data.displayvalue)}"
  />
`;

/**
 * PercentageInput component
 */
const PercentageInput = (data, path) => html`
 <input
   class="usa-input"
   data-ref="${data.reference}"
   ?required="${data.requiredstate}"
   ?readonly="${data.readonlystate}"
   ?disabled="${data.disabledstate}"
   placeholder="${ifDefined(GetPlaceholder(data))}"
   type="text"
   aria-describedby="${ifDefined(GetAriaDescribedByID(data, path))}"
   id="${ifDefined(path)}"
   value="${unescapeHTML(data.displayvalue)}"
 />
`;

/**
 * CurrencyInput component
 */
const CurrencyInput = (data, path) => html`
  <div ?readonly="${data.readOnly}">
  <span class="currency-symbol">$</span>
  <input
    class="usa-input"
    data-ref="${data.reference}"
    ?required="${data.requiredstate}"
    ?readonly="${data.readonlystate}"
    ?disabled="${data.disabledstate}"
    placeholder="${ifDefined(GetPlaceholder(data))}"
    type="number"
    aria-describedby="${ifDefined(GetAriaDescribedByID(data, path))}"
    id="${ifDefined(path)}"
    value="${unescapeHTML(data.displayvalue)}"
  />
  </div>
`;

/**
 * EmailInput component
 */
const EmailInput = (data, path) => html`
  <input
    class="usa-input"
    data-ref="${data.reference}"
    ?required="${data.requiredstate}"
    ?readonly="${data.readonlystate}"
    ?disabled="${data.disabledstate}"
    placeholder="${ifDefined(GetPlaceholder(data))}"
    type="email"
    aria-describedby="${ifDefined(GetAriaDescribedByID(data, path))}"
    id="${ifDefined(path)}"
    value="${unescapeHTML(data.displayvalue)}"
  />
`;

/**
 * TextArea component
 */
const TextArea = (data, path) => html`
  <textarea
    class="usa-textarea"
    rows="3"
    data-ref="${data.reference}"
    ?required="${data.requiredstate}"
    ?readonly="${data.readonlystate}"
    ?disabled="${data.disabledstate}"
    placeholder="${ifDefined(GetPlaceholder(data))}"
    type="email"
    aria-describedby="${ifDefined(GetAriaDescribedByID(data, path))}"
    id="${ifDefined(path)}"
  >${unescapeHTML(data.displayvalue)}</textarea>
`;

/**
 * Checkbox component
 */
const Checkbox = (data, path) => {
  const iconrequired = data.requiredstate ? ' icon-required' : '';
  return html`<input
  class="usa-checkbox__input"
  data-ref="${data.reference}"
  ?required="${data.requiredstate}"
  ?readonly="${data.readonlystate}"
  onclick="${ifDefined(data.readonlystate ? 'return false;' : undefined)}"
  ?disabled="${data.disabledstate}"
  aria-describedby="${ifDefined(GetAriaDescribedByID(data, path))}"
  id=${ifDefined(path)}
  type="checkbox" ?checked=${data.displayvalue === 'true' || data.displayvalue === true}
  />
  <label class="usa-checkbox__label${iconrequired}" for=${ifDefined(path)}>
  ${data.displaycaption}
    </label></div>
`;
};

/**
 * RadioButtons component
 */
const RadioButtons = (data, path) => {
  let listValues = [{ value: 'true' }, { value: 'false' }];
  if (data.options) {
    listValues = data.options;
  }
  return html`<fieldset class="usa-fieldset">
    ${listValues.map((item, index) => {
    const innerpath = `rb-${path}-${index}`;
    return html`
        <div class="usa-radio">
          <input
            class="usa-radio__input"
            data-ref="${data.reference}"
            name=${ifDefined(path)}
            id=${innerpath}
            type="radio"
            ?required="${data.requiredstate}"
            ?readonly="${data.readonlystate}"
            ?disabled="${data.disabledstate}"
            value="${item.key}"
            onclick="${ifDefined(data.readonlystate ? 'return false;' : undefined)}"
            ?checked="${item.key === data.displayvalue}"
          />
          <label class="usa-radio__label" for="${innerpath}">${item.value}</label>
        </div>
      `;
  })}
  </div>`;
};

/**
 * Dropdown component
 */
const DropDown = (data, path) => html`<select
  class="usa-select"
  data-ref="${data.reference}"
  aria-describedby="${ifDefined(GetAriaDescribedByID(data, path))}"
  id=${ifDefined(path)}
  ?required="${data.requiredstate}"
  ?readonly="${data.readonlystate}"
  ?disabled="${data.disabledstate}">
  placeholder="${ifDefined(GetPlaceholder(data))}"
    <option value="" title="${i18n.t('Select...')}">${i18n.t('Select...')}</option>
    ${data.options.map(
    (item) => html`<option ?selected=${item.key === data.displayvalue} value='${item.key}'>${item.value}</option>`,
  )}
  </select>`;

/**
 * DateTime component
 */
const DateTimeInput = (data, path) => {
  let value = data.displayvalue;
  if (value !== '') { /* Should be formatted as yyyy-MM-ddThh:mm */
    const dt = convertTimestampToDate(value);
    if (dt instanceof Date && dt.getTime() === dt.getTime()) {
      value = `${dt.getUTCFullYear()}-${pad2char(dt.getUTCMonth() + 1)}-${pad2char(dt.getUTCDate())}` +
      `T${pad2char(dt.getUTCHours())}:${pad2char(dt.getUTCMinutes())}`;
    } else if (data.displayvalue.length === 8) {
      value = `${data.displayvalue.substring(0, 4)}-${data.displayvalue.substring(4, 6)}-${data.displayvalue.substring(6, 8)}T00:00`;
    } else if (data.displayvalue.length === 24) {
       
      value = `${data.displayvalue.substring(0, 4)}-${data.displayvalue.substring(5, 7)}-${data.displayvalue.substring(8, 10)}T${data.displayvalue.substring(11, 13)}:${data.displayvalue.substring(14, 16)}`;
    }
  }
  return html`
    <input
      data-ref="${data.reference}"
      ?required="${data.requiredstate}"
      ?readonly="${data.readonlystate}"
      ?disabled="${data.disabledstate}"
      type="datetime-local"
      aria-describedby="${ifDefined(GetAriaDescribedByID(data, path))}"
      id="${ifDefined(path)}"
      value="${value}"
    />
  `;
};

/**
 * Date component
 */
const DateInput = (data, path) => {
  let value = data.displayvalue;
  let valueMonth = '';
  let valueDate = '';
  let valueYear = '';
  if (value !== '') { /* Should be formatted as yyyy-MM-dd */
    const dt = convertTimestampToDate(value);
    if (dt instanceof Date && dt.getTime() === dt.getTime()) {
      valueYear = dt.getUTCFullYear();
      valueMonth = dt.getUTCMonth() + 1;
      valueDate = dt.getUTCDate();
    } else if (data.displayvalue.length === 8) {
      valueYear = data.displayvalue.substring(0, 4);
      valueMonth = data.displayvalue.substring(4, 6);
      valueDate = data.displayvalue.substring(6, 8);
    }
    value = dt;
  }
  return html`
  <div class="input-date usa-memorable-date" id="${ifDefined(path)}"
  aria-describedby="${ifDefined(GetAriaDescribedByID(data, path))}" data-ref="${data.reference}">
  <div class="usa-form-group usa-form-group--month">
      <label class="usa-label" for="${`${path}-month`}">
      ${i18n.t('Month')}
      </label>
      <input data-ref="${data.reference}" ?required="${data.requiredstate}"
      ?readonly="${data.readonlystate}"
      ?disabled="${data.disabledstate}" class="input-date-month usa-input usa-input--inline"  value="${valueMonth}"
      id="${`${path}-month`}" name="${`${path}-month`}" type="text" pattern="[0-9]*" inputmode="numeric">
    </div>
    <div class="usa-form-group usa-form-group--day">
      <label class="usa-label" for="${`${path}-day`}">
        ${i18n.t('Day')}
      </label>
      <input data-ref="${data.reference}" ?required="${data.requiredstate}"
      ?readonly="${data.readonlystate}"
      ?disabled="${data.disabledstate}" class="input-date-day usa-input usa-input--inline" value="${valueDate}"
      id="${`${path}-day`}" name="${`${path}-day`}" type="text" pattern="[0-9]*" inputmode="numeric">
    </div>
    <div class="usa-form-group usa-form-group--year">
      <label class="usa-label" for="${`${path}-year`}">
      ${i18n.t('Year')}
      </label>
      <input data-ref="${data.reference}" ?required="${data.requiredstate}"
      ?readonly="${data.readonlystate}"
      ?disabled="${data.disabledstate}" class="input-date-year usa-input usa-input--inline" value="${valueYear}"
      id="${`${path}-year`}" name="${`${path}-year`}" type="text" pattern="[0-9]*" inputmode="numeric">
    </div>
</div>`;
};

/**
 * Time component
 */
const TimeInput = (data, path) => {
  let value = data.displayvalue;
  if (value !== '') { /* Should be formatted as hh:mm:ss */
    const dt = convertTimestampToDate(value);
    if (dt instanceof Date && dt.getTime() === dt.getTime()) {
      value = `${pad2char(dt.getUTCHours())}-${pad2char(dt.getUTCMinutes())}-${pad2char(dt.getUTCSeconds())}`;
    } else if (data.displayvalue.length === 8) {
      value = `${data.displayvalue.substring(9, 10)}:${data.displayvalue.substring(10, 11)}:${data.displayvalue.substring(11, 12)}`;
    }
  }
  return html`
    <input
      data-ref="${data.reference}"
      ?required="${data.requiredstate}"
      ?readonly="${data.readonlystate}"
      ?disabled="${data.disabledstate}"
      type="time"
      aria-describedby="${ifDefined(GetAriaDescribedByID(data, path))}"
      id="${ifDefined(path)}"
      value="${value}"
    />
  `;
};

/**
 * Combobox component
 */
const Combobox = (data, path) => {
  if (data.options) {
    return html`
    <div class="usa-combo-box loaded">
    <select class="usa-select"
        data-ref="${data.reference}"
        list="${data.reference}"
        ?required="${data.requiredstate}"
        ?readonly="${data.readonlystate}"
        ?disabled="${data.disabledstate}"
        placeholder="${ifDefined(GetPlaceholder(data))}"
        type="text"
         aria-describedby="${ifDefined(GetAriaDescribedByID(data, path))}"
        id="${ifDefined(path)}"
        value="${unescapeHTML(data.displayvalue)}"
      />
        ${data.options.map(
    (item) => html`
            <option value="${item.key}">
              ${item.value}
            </option>
          `,
  )}
    </select>
    </div>`;
  }
  return null;
};

/**
 * SemanticLink component - PLACEHOLDER
 */
const SemanticLink = () => html`
 <a>semantic link</a>
`;

/**
 * Location Input component
 */
const LocationInput = (data, path) => html`<input
 class="usa-input location"
 data-ref="${data.reference}"
 ?required="${data.requiredstate}"
 ?readonly="${data.readonlystate}"
 ?disabled="${data.disabledstate}"
 placeholder="${ifDefined(GetPlaceholder(data))}"
 type="text"
 aria-describedby="${ifDefined(GetAriaDescribedByID(data, path))}"
 id="${ifDefined(path)}"
 value="${unescapeHTML(data.displayvalue)}"
/>`;
