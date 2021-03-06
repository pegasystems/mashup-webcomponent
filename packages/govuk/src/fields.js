/* global i18n */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-self-compare */
import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import {
  getValue, unescapeHTML, pad2char, convertTimestampToDate, isValidExpression,
} from '../../core/src/utils/form-utils';

const DisplayLabel = (data, path, type) => {
  if (typeof path === 'undefined') return null;
  const iconrequired = data.requiredstate ? 'icon-required' : '';
  if (type === 'field-checkbox') {
    if (data.label && data.label !== '') {
      return html`<legend>${data.displaylabel}</legend>`;
    }
    return null;
  }
  return html`
    ${data.label !== ''
    ? html`<label class="govuk-label ${iconrequired}" 
    for="${ifDefined(path)}">${data.displaylabel}
    </label>`
    : null}
  `;
};

const DisplayHelperText = (data, path) => {
  if (data.helperText && data.helperText !== '') {
    return html`<div id=${`${path}-info`} class="govuk-hint">${data.displayhelperText}</div>`;
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
  if (typeof path === 'undefined' || path === '' || path.indexOf('-table') !== -1) {
    return html`
      ${ComponentTemplate}
    `;
  }
  return html`
    <div class="govuk-form-group" ?disabled="${data.disabledstate}">
      ${DisplayLabel(data, path, type)}${DisplayHelperText(data, path)}${ComponentTemplate}
    </div>
  `;
};

export const DisplaySummaryRow = (data, path, type, ComponentTemplate) => {
  if (typeof path === 'undefined' || path === '' || path.indexOf('-table') !== -1) {
    return html`
      ${ComponentTemplate}
    `;
  }
  return html`<div class="govuk-summary-list__row">
    <dt class="govuk-summary-list__key">
      ${DisplayLabel(data, path, type)}
      </dt>
    <dd class="govuk-summary-list__value">${ComponentTemplate}</dd>
    </div>
  `;
};

/**
 * Render a field - this includes rendering the label and the component
 */
export const Field = (data, path, isReadOnly, webcomp, context) => {
  if (data.config.visibility === false) return null;
  let isDeclarativeTarget = false;
  data.config.displayvalue = '';
  data.config.displaylabel = i18n.t(data.config.label);
  data.config.displayplaceholder = i18n.t(data.config.placeholder);
  data.config.displayhelperText = i18n.t(data.config.helperText);
  data.config.displaycaption = i18n.t(data.config.caption);
  if (data.config.value) {
    let propName = data.config.value.replace('@P .', '');
    data.config.reference = ((typeof context === 'undefined' || context === '') ? propName : `${context}.${propName}`);
    data.config.displayvalue = getValue(webcomp.casedata.content, data.config.reference);
    if (typeof data.config.datasource === 'string' && data.config.datasource.indexOf('@ASSOCIATED') === 0) {
      propName = data.config.datasource.replace('@ASSOCIATED .', '');
      let val = '';
      if (webcomp.data.context_data) {
        val = webcomp.data.context_data.content;
      } else if (webcomp.data.uiResources.context_data && webcomp.data.uiResources.context_data.caseInfo &&
        webcomp.data.uiResources.context_data.caseInfo.content) {
        val = webcomp.data.uiResources.context_data.caseInfo.content;
      }
      const obj = (context === '' ? val : getValue(val, context));
      if (obj) {
        data.config.options = obj.summary_of_associated_lists__[propName];
      }
      if (typeof data.config.options === 'undefined') {
        val = webcomp.data.uiResources.resources.fields[propName];
        if (val && val.datasource) {
          if (val.datasource.records) {
            data.config.options = val.datasource.records;
          } else if (val.datasource.name && webcomp.data.data.shared[val.datasource.name]) {
            const dp = webcomp.data.data.shared[val.datasource.name];
            if (Object.keys(dp).length > 0) {
              const dpName = Object.keys(dp)[0];
              if (dp[dpName].pxResults) {
                const keyName = val.datasource.propertyForValue.replace('@P .', '');
                const valueName = val.datasource.propertyForDisplayText.replace('@P .', '');
                data.config.options = [];
                for (const item in dp[dpName].pxResults) {
                  const elem = dp[dpName].pxResults[item];
                  data.config.options[item] = { key: elem[keyName], value: elem[valueName] };
                }
              }
            }
          }
        }
      }
    } else if (typeof data.config.datasource === 'object' && data.config.datasource.source && data.config.datasource.source.indexOf('@DATASOURCE') === 0) {
      const ref = data.config.datasource.source.replace('@DATASOURCE ', '').replace('.pxResults', '');
      if (webcomp.data.data[ref] && webcomp.data.data[ref].pxResults) {
        data.config.options = webcomp.data.data[ref].pxResults;
      } else if (webcomp.data.uiResources.context_data && webcomp.data.uiResources.context_data.caseInfo &&
        webcomp.data.uiResources.context_data.caseInfo.content) {
        const val = webcomp.data.uiResources.context_data.caseInfo.content;
        if (val[context] && val[context].summary_of_lists__[ref] && val[context].summary_of_lists__[ref].pxResults) {
          const paramDP = val[context].summary_of_lists__[ref].pxResults.replace('.pxResults', '');
          if (webcomp.data.data[paramDP] && webcomp.data.data[paramDP].pxResults) {
            data.config.options = [];
            const keyName = data.config.datasource.fields.key.replace('@P .', '');
            const valueName = data.config.datasource.fields.text.replace('@P .', '');
            for (const item in webcomp.data.data[paramDP].pxResults) {
              const elem = webcomp.data.data[paramDP].pxResults[item];
              data.config.options[item] = { key: elem[keyName], value: elem[valueName] };
            }
          }
        }
      }
    }
    if (!data.config.options) {
      data.config.options = [];
    }
    if (!data.config.displayvalue) {
      data.config.displayvalue = '';
    } else if (typeof data.config.displayvalue !== 'object') {
      data.config.displayvalue = `${data.config.displayvalue}`;
    }
    if (webcomp.data.uiResources && webcomp.data.uiResources.resources && webcomp.data.uiResources.resources.fields &&
      webcomp.data.uiResources.resources.fields[propName]) {
      if (webcomp.data.uiResources.resources.fields[propName].isDeclarativeTarget) {
        isDeclarativeTarget = true;
        webcomp.isDeclarativeTarget = true;
      }
    }
  }
  if (isReadOnly === true) {
    return DisplaySummaryRow(data.config, path, 'field-text', DisplayText(data.config, data.type, path));
  }

  if (typeof data.config.visibility === 'string' || typeof data.config.readOnly === 'string' ||
  typeof data.config.disabled === 'string' || typeof data.config.required === 'string') {
    webcomp.refreshOnChange = true;
  }
  const content = webcomp.data.data.caseInfo.content;

  /* Visibility condition */
  if (typeof data.config.visibility === 'string' && data.config.visibility !== 'true') {
    if (!isValidExpression(data.config.visibility, content)) return null;
  } else if (data.config.visibility === false || data.config.visibility === 'false') {
    return null;
  }
  /* Read-only condition */
  data.config.readonlystate = false;
  if (typeof data.config.readOnly === 'string' && data.config.readOnly !== 'false') {
    data.config.readonlystate = isValidExpression(data.config.readOnly, content);
  } else if (data.config.readOnly === true || data.config.readOnly === 'true' || isDeclarativeTarget) {
    data.config.readonlystate = true;
  }
  /* Required condition */
  data.config.requiredstate = false;
  if (typeof data.config.required === 'string' && data.config.required !== 'false') {
    data.config.requiredstate = isValidExpression(data.config.required, content);
  } else if (data.config.required === true || data.config.required === 'true') {
    data.config.requiredstate = true;
  }
  /* Disabled condition */
  data.config.disabledstate = false;
  if (typeof data.config.disabled === 'string' && data.config.disabled !== 'false') {
    data.config.disabledstate = isValidExpression(data.config.disabled, content);
  } else if (data.config.disabled === true || data.config.disabled === 'true') {
    data.config.disabledstate = true;
  }
  if (data.config.disabledstate) {
    data.config.requiredstate = false;
    data.config.readonlystate = false;
  }
  switch (data.type) {
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
  return html`
    <span class="dataValueRead" data-ref="${data.reference}" id="${ifDefined(path)}">${unescapeHTML(value)}</span>
  `;
};

/**
 * TextInput component
 */
const TextInput = (data, path) => html`
  <input
    class="govuk-input"
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
<div class='field-phoneinput' ?readonly="${data.readOnly}"> 
<select
  class="govuk-select field-countrycode"
  ?readonly="${data.readonlystate}"
  ?disabled="${data.disabledstate}"
  aria-label="${i18n.t('Select country code')}">
  ${data.options.map((item) => html`<option ?selected=${item.pyCallingCode === callingcode} 
  value='${item.pyCallingCode}'>${item.pyCallingCode}</option>`)}
</select>
 <input
   class="govuk-input"
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
    class="govuk-input"
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
   class="govuk-input"
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
  <div class='field-currencyinput' ?readonly="${data.readOnly}">
  <span class="currency-symbol">$</span>
  <input
    class="govuk-input"
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
    class="govuk-input"
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
    class="govuk-textarea"
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
  const iconrequired = data.requiredstate ? 'icon-required' : '';
  return html`<div class="govuk-checkboxes__item">
  <input
  class="govuk-checkboxes__input"
  data-ref="${data.reference}"
  ?required="${data.requiredstate}"
  ?readonly="${data.readonlystate}"
  onclick="${ifDefined(data.readonlystate ? 'return false;' : undefined)}"
  ?disabled="${data.disabledstate}"
  aria-describedby="${ifDefined(GetAriaDescribedByID(data, path))}"
  id=${ifDefined(path)}
  type="checkbox" ?checked=${data.displayvalue === 'true' || data.displayvalue === true}
  />
  <label class="govuk-label govuk-checkboxes__label ${iconrequired}" for=${ifDefined(path)}>
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
  return html`<div class="govuk-radios">
    ${listValues.map((item, index) => {
    const innerpath = `rb-${path}-${index}`;
    return html`
        <div class="govuk-radios__item">
          <input
            class="govuk-radios__input" 
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
          <label class="govuk-label govuk-radios__label" for="${innerpath}">${item.value}</label>
        </div>
      `;
  })}
  </div>`;
};

/**
 * Dropdown component
 */
const DropDown = (data, path) => html`<select
  class="govuk-select"
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
    let dt = convertTimestampToDate(value);
    if (dt instanceof Date && dt.getTime() === dt.getTime()) {
      dt = new Date(dt.getTime() + dt.getTimezoneOffset() * 60000);
      value = `${dt.getFullYear()}-${pad2char(dt.getMonth() + 1)}-${pad2char(dt.getDate())}T${pad2char(dt.getHours())}:${pad2char(dt.getMinutes())}`;
    } else if (data.displayvalue.length === 8) {
      value = `${data.displayvalue.substring(0, 4)}-${data.displayvalue.substring(4, 6)}-${data.displayvalue.substring(6, 8)}T00:00`;
    } else if (data.displayvalue.length === 24) {
      // eslint-disable-next-line max-len
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
      class="govuk-input"
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
    let dt = convertTimestampToDate(value);
    if (dt instanceof Date && dt.getTime() === dt.getTime()) {
      dt = new Date(dt.getTime() + dt.getTimezoneOffset() * 60000);
      valueYear = dt.getFullYear();
      valueMonth = dt.getMonth() + 1;
      valueDate = dt.getDate();
    } else if (data.displayvalue.length === 8) {
      valueYear = data.displayvalue.substring(0, 4);
      valueMonth = data.displayvalue.substring(4, 6);
      valueDate = data.displayvalue.substring(6, 8);
    }
    value = dt;
  }
  return html`
  <div class="input-date govuk-date-input" id="${ifDefined(path)}" 
  aria-describedby="${ifDefined(GetAriaDescribedByID(data, path))}" data-ref="${data.reference}">
  <div class="govuk-date-input__item">
    <div class="govuk-form-group">
      <label class="govuk-label govuk-date-input__label" for="${`${path}-day`}">
        ${i18n.t('Day')}
      </label>
      <input data-ref="${data.reference}" ?required="${data.requiredstate}"
      ?readonly="${data.readonlystate}"
      ?disabled="${data.disabledstate}" class="input-date-day govuk-input govuk-date-input__input govuk-input--width-2" value="${valueDate}" 
      id="${`${path}-day`}" name="${`${path}-day`}" type="text" pattern="[0-9]*" inputmode="numeric"></div>
  </div>
  <div class="govuk-date-input__item">
    <div class="govuk-form-group">
      <label class="govuk-label govuk-date-input__label" for="${`${path}-month`}">
      ${i18n.t('Month')}
      </label>
      <input data-ref="${data.reference}" ?required="${data.requiredstate}"
      ?readonly="${data.readonlystate}"
      ?disabled="${data.disabledstate}" class="input-date-month govuk-input govuk-date-input__input govuk-input--width-2"  value="${valueMonth}"
      id="${`${path}-month`}" name="${`${path}-month`}" type="text" pattern="[0-9]*" inputmode="numeric"></div>
  </div>
  <div class="govuk-date-input__item">
    <div class="govuk-form-group">
      <label class="govuk-label govuk-date-input__label" for="${`${path}-year`}">
      ${i18n.t('Year')}
      </label>
      <input data-ref="${data.reference}" ?required="${data.requiredstate}"
      ?readonly="${data.readonlystate}"
      ?disabled="${data.disabledstate}" class="input-date-year govuk-input govuk-date-input__input govuk-input--width-4" value="${valueYear}"
      id="${`${path}-year`}" name="${`${path}-year`}" type="text" pattern="[0-9]*" inputmode="numeric"></div>
  </div>
</div>`;
};

/**
 * Time component
 */
const TimeInput = (data, path) => {
  let value = data.displayvalue;
  if (value !== '') { /* Should be formatted as hh:mm:ss */
    let dt = convertTimestampToDate(value);
    if (dt instanceof Date && dt.getTime() === dt.getTime()) {
      dt = new Date(dt.getTime() + dt.getTimezoneOffset() * 60000);
      value = `${pad2char(dt.getHours())}-${pad2char(dt.getMinutes())}-${pad2char(dt.getSeconds())}`;
    } else if (data.displayvalue.length === 8) {
      value = `${data.displayvalue.substring(9, 10)}:${data.displayvalue.substring(10, 11)}:${data.displayvalue.substring(11, 12)}`;
    }
  }
  return html`
    <input
      class="govuk-input"
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
      <input
        data-ref="${data.reference}"
        list="${data.reference}"
        ?required="${data.requiredstate}"
        ?readonly="${data.readonlystate}"
        ?disabled="${data.disabledstate}"
        placeholder="${ifDefined(GetPlaceholder(data))}"
        type="text"
        class="govuk-input combobox loaded"
        aria-describedby="${ifDefined(GetAriaDescribedByID(data, path))}"
        id="${ifDefined(path)}"
        value="${unescapeHTML(data.displayvalue)}"
      />
      <datalist id="${data.reference}">
        ${data.options.map(
    (item) => html`
            <option value="${item.key}">
              ${item.value}
            </option>
          `,
  )}
      </datalist>
    `;
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
 class="govuk-input location"
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
