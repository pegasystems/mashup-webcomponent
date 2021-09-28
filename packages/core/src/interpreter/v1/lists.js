import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined';
import { Field } from './fields';
import { getNewRowProps } from '../../utils/form-utils';
import { plusIcon } from '../../views/icons';

export const SimpleTable = (item, path, isReadOnly) => html`
  ${ListTitle(item.layout)}
  <table>
  <caption class="sr-only">${item.layout.title}</caption>
    <thead>
      <tr>
        ${TableHeader(item.layout.header.groups)}
      </tr>
    </thead>
    <tbody>
      ${Table(item.layout.rows, path)}
    </tbody>
  </table>
  ${ListAction(item.layout, isReadOnly)}
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

export const ListAction = (data, isReadOnly) => {
  let ref = data.fieldListID;
  if (typeof data.reference !== 'undefined') ref = data.reference;

  /* if the reference starts by a dot, need to remove it */
  if (ref.charAt(0) === '.') {
    ref = ref.substring(1);
  }

  /* If the array 'newRow' is present, then the table or RDL is editable.
  It is preferable to show the delete button on each row - so will not show the delete action here */
  if (data.newRow && isReadOnly !== true) {
    const newRowList = [];
    getNewRowProps(data.newRow, newRowList);
    return html`
      <div class="table-action-area">
        <button type="button" class="pzhc pzbutton Simple" data-newrow="${ifDefined(newRowList.join())}"
        data-ref=${ref} data-action-click="addRow">${plusIcon()}Add item</button>
      </div>
    `;
  }
  return null;
};

const TableHeader = (data) => html`
  ${data.map((item) => html`
    <th scope='col'>${item.caption ? html`${item.caption.value}` : ''}</th>`)}
`;

const Table = (data) => html`
  ${data.map((item) => html`
    <tr>
      ${item.groups.map((tdItem) => html`
      <td>${Field(tdItem.field)}</td>`)}
    </tr>`)}
`;
