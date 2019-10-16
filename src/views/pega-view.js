import { html } from 'lit-html';

const mainLayout = (data, path, onCancel, onSave, onSubmit) => html`
  <div>${pegaLayout(data, path)}</div>
  ${pegaSubmitAreaActions(onCancel, onSave, onSubmit)}
`;

const createCaseLayout = (data, path, onCancel, onCreate) => html`
  <div>${pegaLayout(data, path)}</div>
  ${pegaCreateAreaActions(onCancel, onCreate)}
`;

const confirmPageLayout = onCancel => html`
  <h2>Thank you.</div>
  <p>Your information has been submitted.</p>
  <button class="Strong pzhc pzbutton primary" @click="${onCancel}">Go back to worklist</button>
`;

const pegaLayout = (data, path) => html`
  ${data.map((item, index) => {
    const tmppath = `${path}/${index}`;
    if (item.layout) {
      if (item.layout.groupFormat.trim() === '' || item.layout.groupFormat === 'CENTER') {
        item.layout.groupFormat = 'default';
      }
      const format = item.layout.groupFormat.replace(/ /g, '_').toLowerCase();
      const classname = `flex content content-items-maxwidth layout-content-${format} content-${format}`;
      if (item.layout.view && item.layout.view.groups) {
        return html`
          <div class="${classname}">${pegaLayout(item.layout.view.groups, tmppath)}</div>
        `;
      }
      if (item.layout.groups) {
        return html`
          <div class="${classname}">${pegaLayout(item.layout.groups, tmppath)}</div>
        `;
      }
      return null;
    }
    if (item.field) {
      return html`
        ${pegaField(item.field, tmppath)}
      `;
    }
    if (item.view && item.view.groups) {
      return html`
        <div class="flex">${pegaLayout(item.view.groups, tmppath)}</div>
      `;
    }
    return null;
  })}
`;

const pegaField = (data, path) => {
  if (typeof data === 'undefined' || typeof data.control === 'undefined' || typeof data.control.type === 'undefined') {
    return null;
  }
  switch (data.control.type) {
    case 'pxTextInput':
      return html`
        ${pegaTextInput(data, path)}
      `;
    case 'pxTextArea':
      return html`
        ${pegaTextArea(data, path)}
      `;
    case 'pxRadioButtons':
      return html`
        ${pegaRadioButtons(data, path)}
      `;
    case 'pxCheckbox':
      return html`
        ${pegaCheckbox(data, path)}
      `;
    case 'pxDropdown':
      return html`
        ${pegaDropDown(data, path)}
      `;
    case 'pxDisplayText':
      return html`
        ${pegaDisplayText(data, path)}
      `;
    case 'pxIcon':
      return html`
        ${pegaIcon(data, path)}
      `;
    default:
      return null;
  }
};

const pegaSubmitAreaActions = (onCancel, onSave, onSubmit) => html`
  <div class="flex content-inline_middle margin-t-2x">
    <button path="pzhc pzbutton workareabutton-cancel" @click="${onCancel}">Cancel</button>
    <button class="pzhc pzbutton margin-l-auto" path="workareabutton-save" @click="${onSave}">Save</button>
    <button class="Strong pzhc pzbutton" path="workareabutton-submit" @click="${onSubmit}">Submit</button>
  </div>
`;

const pegaCreateAreaActions = (onCancel, onCreate) => html`
  <div class="flex content-inline_middle margin-t-2x">
    <button path="pzhc pzbutton workareabutton-cancel" @click="${onCancel}">Cancel</button>
    <button class="Strong pzhc pzbutton margin-l-auto primary" path="workareabutton-submit" @click="${onCreate}">Create</button>
  </div>
`;

const pegaDisplayLabel = (data, path) => html`
  ${data.label !== '' || data.labelReserveSpace === true
    ? html`
        <label class="field-caption dataLabelForWrite icon-required" for="${path}">${data.label}</label>
      `
    : null}
`;

const pegaDisplayText = (data, path) => html`
  <div class="content-item field-item field-text">
    ${pegaDisplayLabel(data, path)}
    <span ref="${data.reference}" required=${data.required} id="${path}" value="${data.value}" />
  </div>
`;

const pegaTextInput = (data, path) => html`
  <div class="content-item field-item field-textinput">
    ${pegaDisplayLabel(data, path)}
    <input ref="${data.reference}" required="${data.required}" type="text" id="${path}" value="${data.value}" />
  </div>
`;

const pegaTextArea = (data, path) => html`
  <div class="content-item field-item field-textarea">
    ${pegaDisplayLabel(data, path)}
    <textarea ref="${data.reference}" rows="3" required="${data.required}" id="${path}" value="${data.value}"></textarea>
  </div>
`;

const pegaIcon = (data, path) => html`
  <div class="content-item field-item field-text">
    <i class="${data.control.modes[1].iconStyle}" ref="${data.reference}" required="${data.required}" id="${path}" value="${data.value}" />${pegaDisplayLabel(
  data,
  path,
)}
  </div>
`;

const pegaRadioButtons = (data, path) => html`
  <div class="content-item field-item field-radiogroup" role="radiogroup">
    ${pegaDisplayLabel(data, path)}
    <div>
      ${data.control.modes[0].options.map((item, index) => {
    const innerpath = `rb-${path}-${index}`;
    return html`
          <div class="col-2">
            <input ref="${data.reference}" name=${path} id=${innerpath} type="radio" value=${item.value} />
            <label for=${innerpath}>${item.value}</label>
          </div>
        `;
  })}
    </div>
  </div>
`;

const pegaCheckbox = (data, path) => html`
  <div class="content-item field-item field-checkbox">
    <input ref="${data.reference}" id=${path} type="checkbox" />
    ${pegaDisplayLabel(data, path)}
  </div>
`;

const pegaDropDown = (data, path) => html`
  <div class="content-item field-item field-dropdown">
    ${pegaDisplayLabel(data, path)}
    <div class="field-item dataValueWrite">
      <select ref="${data.reference}" id=${path}>
        ${data.control.modes[0].options.map(
    item => html`
            <option>${item.value}</option>
          `,
  )}
      </select>
    </div>
  </div>
`;
export { mainLayout, createCaseLayout, confirmPageLayout };
