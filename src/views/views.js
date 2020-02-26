import { html } from 'lit-html';
import { Layout } from './layout';
import { ButtonMenu } from './button-menu';
import { AssignmentList } from './assignmentlist';
import { RelatedCases } from './relatedcases';

const SubmitActionArea = (onCancel, onSave) => html`
  <div class="action-button-area">
    ${onCancel !== null ? html`<button class="pzhc pzbutton" @click="${onCancel}">Cancel</button>` : ''}
    <button class="pzhc pzbutton" @click="${onSave}">Save</button>
    <button data-submit="submit" class="Strong pzhc pzbutton">Submit</button>
  </div>
`;

const SaveActionArea = (onCancel, onSave) => html`
  <div class="action-button-area">
    ${onCancel !== null ? html`<button class="pzhc pzbutton" @click="${onCancel}">Cancel</button>` : ''}
    <button class="pzhc pzbutton Strong" @click="${onSave}">Save</button>
  </div>
`;

const CloseActionArea = (onCancel) => {
  if (onCancel === null) return null;
  return html`
  <div class="action-button-area">
    <button class="pzhc pzbutton Strong" @click="${onCancel}">Close</button>
  </div>`;
};


const CreateActionArea = onCancel => html`
  <div class="action-button-area">
    ${onCancel !== null ? html`<button class="pzhc pzbutton" @click="${onCancel}">Cancel</button>` : ''}
    <button data-submit="create" class="Strong pzhc pzbutton">Create</button>
  </div>
`;

/* We also have the case priority in ${data.urgency} and the user assigned as ${data.routedTo} */
const CaseHeader = (name, data, casedata, status, onDisplayActions, onCreate, onOpen) => {
  /* Case of openCaseByHandle - not an assignment */
  if (typeof data.caseID === 'undefined' && casedata.content) {
    return html`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${casedata.content.pyLabel} (${casedata.content.pyID})</h2>
      ${status !== '' ? html`<span class='badge-bg-info centered'><span class='badge_text'>${status}</span></span>` : ''}
      <div class="flex layout-content-inline_middle margin-l-auto">
      ${casedata.actions && casedata.actions.length > 0 ? html`
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${ButtonMenu('Actions', 'Start a new action', onDisplayActions, onCreate)}
      </div>` : ''}
      </div>
    </div>
    ${AssignmentList(casedata.assignments, onOpen)}
    ${RelatedCases(casedata.childCases, onOpen)}
    <h3>Case information</h3>`;
  }
  if (name === '') return '';
  if (typeof data.caseID === 'undefined') {
    return html`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${name}</h2>
    </div>`;
  }
  const id = data.caseID.split(' ')[1];
  return html`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${data.name} (${id})</h2>
    ${status !== '' ? html`<span class='badge-bg-info centered'><span class='badge_text'>${status}</span></span>` : ''}
    ${data.actions && data.actions.length > 0 ? html`
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${ButtonMenu('Actions', 'Start a new action', onDisplayActions, onCreate)}
      </div>` : ''}
 </div>
 <h3>${name}</h3>`;
};

const mainLayout = (data, path, onCancel, onSave) => html`
  <div>${Layout(data, path)}</div>
  ${SubmitActionArea(onCancel, onSave)}
`;

const reviewLayout = (data, path, onCancel) => html`
  <div>${Layout(data, path, true)}</div>
  ${CloseActionArea(onCancel)}
`;

const saveCaseLayout = (data, path, onCancel, onSave) => html`
  <div>${Layout(data, path)}</div>
  ${SaveActionArea(onCancel, onSave)}
`;

const createCaseLayout = (data, path, onCancel) => html`
  <div>${Layout(data, path)}</div>
  ${CreateActionArea(onCancel)}
`;

const genPageValidationErrors = response => html`
  <ul>
    ${response.errors[0].ValidationMessages.map((item) => {
    if (item.Path) {
      return html`
          <li>${item.Path.substring(1)}: ${item.ValidationMessage}</li>
        `;
    }
    return html`
    <li>${item.ValidationMessage}</li>
  `;
  })}
  </ul>
`;

const genCaseTypesList = (data) => {
  const itemList = [];
  const keys = Object.entries(data);
  for (const i of keys) {
    itemList.push(
      html`
        <li role="menuitem" tabindex="-1" data-value="${i[0]}">${i[1].name}</li>
      `,
    );
  }
  return html`
    ${itemList}
  `;
};

const genActionsList = (name, data) => {
  const itemList = [];
  const keys = Object.entries(data.actions);
  for (const i of keys) {
    if (i[1].name !== name) {
      itemList.push(
        html`
          <li role="menuitem" tabindex="-1" data-value="${i[1].ID}">${i[1].name}</li>
        `,
      );
    }
  }
  return html`
    ${itemList}
  `;
};

/* set an error on every form fields */
const setFormInlineError = (form, errorMsg) => {
  for (const i in form.elements) {
    const el = form.elements[i];
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT') {
      const ref = `.${el.getAttribute('data-ref')}`;
      if (ref !== null && ref !== 'pyID') {
        for (const err in errorMsg) {
          if (errorMsg[err].Path === ref) {
            el.setCustomValidity(errorMsg[err].ValidationMessage);
            break;
          }
        }
      }
    }
  }
};

export {
  saveCaseLayout, reviewLayout, mainLayout, createCaseLayout, setFormInlineError, genPageValidationErrors, genCaseTypesList, genActionsList, CaseHeader,
};
