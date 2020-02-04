import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { Field } from './fields';
import { getNewRowProps } from '../utils/form-utils';
import { ButtonMenu } from './button-menu';

const SubmitAreaActions = (onCancel, onSave) => html`
  <div class="action-button-area">
    <button class="pzhc pzbutton" @click="${onCancel}">Cancel</button>
    <button class="pzhc pzbutton" @click="${onSave}">Save</button>
    <button data-submit="submit" class="Strong pzhc pzbutton">Submit</button>
  </div>
`;

const CreateAreaActions = onCancel => html`
  <div class="action-button-area">
    <button class="pzhc pzbutton" @click="${onCancel}">Cancel</button>
    <button data-submit="create" class="Strong pzhc pzbutton">Create</button>
  </div>
`;

const CaseHeader = (name, data, onDisplayActions, onCreate) => {
  if (name === '') return null;
  if (!data.actions || data.actions.length === 0) {
    return html`
      <h2>${name}</h2>
    `;
  }
  return html`
    <div class="flex layout-content-inline_middle">
      <h2>${name}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${ButtonMenu('Actions', onDisplayActions, onCreate)}
      </div>
    </div>
  `;
};

const mainLayout = (data, path, onCancel, onSave) => html`
  <div>${Layout(data, path)}</div>
  ${SubmitAreaActions(onCancel, onSave)}
`;

const createCaseLayout = (data, path, onCancel) => html`
  <div>${Layout(data, path)}</div>
  ${CreateAreaActions(onCancel)}
`;

const genPageValidationErrors = response => html`
  <ul>
    ${response.errors[0].ValidationMessages.map((item) => {
    if (item.Path) {
      return html`
          <li>${item.Path.substring(1)}: ${item.ValidationMessage}</li>
        `;
    }
    return null;
  })}
  </ul>
`;

const genCaseTypesList = (data) => {
  const itemList = [];
  const keys = Object.entries(data);
  for (const i of keys) {
    itemList.push(
      html`
        <li><a data-value="${i[0]}">${i[1].name}</a></li>
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
          <li><a data-value="${i[1].ID}">${i[1].name}</a></li>
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

const Layout = (data, path) => html`
  ${data.map((item, index) => {
    const tmppath = `${path}-${index}`;
    if (item.layout) {
      if (item.layout.groupFormat.trim() === '' || item.layout.groupFormat === 'CENTER') {
        item.layout.groupFormat = 'default';
      }
      const format = item.layout.groupFormat.replace(/ /g, '_').toLowerCase();
      const classname = `flex content content-items-maxwidth layout-content-${format} content-${format}`;
      if (item.layout.view && item.layout.view.groups) {
        return html`
          <div class="${classname}">${Layout(item.layout.view.groups, tmppath)}</div>
        `;
      }
      if (item.layout.groups) {
        return html`
          <div class="${classname}">${Layout(item.layout.groups, tmppath)}</div>
        `;
      }
      if (item.layout.rows) {
        if (item.layout.header) {
        /* We could also use groupFormat (Grid vs Dynamic) or layoutFormat (REPEATINGROW vs REPEATINGLAYOUT) */
          return html`
            ${TableTitle(item.layout)}
            <table>
              <thead>
                <tr>
                  ${TableHeader(item.layout.header.groups)}
                </tr>
              </thead>
              <tbody>
                ${Table(item.layout.rows, tmppath)}
              </tbody>
            </table>
            ${TableAction(item.layout)}
          `;
        }
        return html`
          ${TableTitle(item.layout)}
          <div class="rdl">
            ${List(item.layout.rows, tmppath)}
          </div>
          ${TableAction(item.layout)}
        `;
      }
      return null;
    }
    if (item.field) {
      return html`
        ${Field(item.field, tmppath)}
      `;
    }
    if (item.view && item.view.groups) {
      return html`
        ${Layout(item.view.groups, tmppath)}
      `;
    }
    return null;
  })}
`;

/* The metadata doesn't provide the type of h2/h3 used */
const TableTitle = (data) => {
  if (data.title !== '') {
    return html`
      <div class="header-bar">
        <div class="header-content"><h3 class="header-title">${data.title}</h3></div>
      </div>
    `;
  }
  return null;
};

const TableAction = (data, bShowDelete) => {
  let ref = data.fieldListID;

  /* if the reference starts by a dot, need to remove it */
  if (data.fieldListID.charAt(0) === '.') {
    ref = data.fieldListID.substring(1);
  }

  /* If the array 'newRow' is present, then the table or RDL is editable - automatically add the add button
     It is preferable to show the delete button on each row - so will not show the button by default */
  if (data.newRow) {
    const newRowList = [];
    getNewRowProps(data.newRow, newRowList);
    return html`
      <div class="table-action-area">
        <button class="pzhc pzbutton Simple" data-newrow="${ifDefined(newRowList.join())}" data-ref=${ref} data-action-click="addRow">Add item</button>
        ${bShowDelete
    ? html`
              <button class="pzhc pzbutton Simple" data-ref=${ref} data-action-click="deleteRow">Delete item</button>
            `
    : ''}
      </div>
    `;
  }
  return null;
};

const TableHeader = data => html`
  ${data.map(
    item => html`
      <th>${item.caption.value}</th>
    `,
  )}
`;

const Table = data => html`
  ${data.map(
    item => html`
      <tr>
        ${item.groups.map(
    tdItem => html`
            <td>${Field(tdItem.field)}</td>
          `,
  )}
      </tr>
    `,
  )}
`;

const List = (data, path) => html`
  ${data.map((item, index) => {
    const tmppath = `${path}/row${index}`;
    if (item.groups) {
      return html`
        <div>
          ${Layout(item.groups, tmppath)}
        </div>
      `;
    }
    return null;
  })}
`;

export {
  mainLayout, createCaseLayout, setFormInlineError, genPageValidationErrors, genCaseTypesList, genActionsList, CaseHeader,
};
