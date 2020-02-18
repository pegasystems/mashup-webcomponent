import { html } from 'lit-html';
import { ifDefined } from 'lit-html/directives/if-defined';
import { Field } from './fields';
import { getNewRowProps } from '../utils/form-utils';

export const SimpleTable = (item, path) => html`
  ${ListTitle(item.layout)}
  <table>
    <thead>
      <tr>
        ${TableHeader(item.layout.header.groups)}
      </tr>
    </thead>
    <tbody>
      ${Table(item.layout.rows, path)}
    </tbody>
  </table>
  ${ListAction(item.layout)}
`;
/* The metadata doesn't provide the type of h2/h3 used */
export const ListTitle = (data) => {
  if (data.title !== '') {
    return html`
      <div class="header-bar">
        <div class="header-content"><h3 class="header-title">${data.title}</h3></div>
      </div>
    `;
  }
  return null;
};

export const ListAction = (data, bShowDelete) => {
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
        <button class="pzhc pzbutton Simple" data-newrow="${ifDefined(newRowList.join())}"
        data-ref=${ref} data-action-click="addRow">Add item</button>
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
  ${data.map(item => html`
    <th>${item.caption.value}</th>`)}
`;

const Table = data => html`
  ${data.map(item => html`
    <tr>
      ${item.groups.map(tdItem => html`
      <td>${Field(tdItem.field)}</td>`)}
    </tr>`)}
`;
