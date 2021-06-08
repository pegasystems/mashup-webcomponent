import { html } from 'lit-html';
import { Field } from './fields';
import { plusIcon, trashIcon } from '../../views/icons';
import { LoadingIndicator } from '../../views/loading';

export const SimpleTable = (data, isReadOnly, webcomp) => {
  const isreadonlytable = isReadOnly || data.config.renderMode !== 'Editable';
  return html`
  <table class='responsive'>
    <thead>
      <tr>
        ${TableHeader(data.config.children[0].children, isReadOnly)}
      </tr>
    </thead>
    <tbody>
      ${TableContent(data, isreadonlytable, webcomp)}
    </tbody>
  </table>
  ${ListAction(data, isreadonlytable)}`;
};

export const DisplayList = (data, isReadOnly, webcomp) => {
  webcomp.sendData('dataviews', { id: data.config.referenceList, content: { paging: { pageNumber: 1, pageSize: 41 } } });
  return html`
  <table class='responsive'>
    <thead>
      <tr>
        ${TableHeader(data.config.presets[0].children[0].children, isReadOnly)}
      </tr>
    </thead>
    <tbody>${LoadingIndicator()}
    </tbody>
  </table>`;
};

const TableHeader = (data, isReadOnly) => html`
  ${data.map((item) => html`
    <th scope='col'>${item.config.label.replace('@L ', '')}</th>`)}${!isReadOnly ? html`<th></th>` : null}
`;

const ListAction = (data, isReadOnly) => {
  if (!isReadOnly) {
    const newRowList = [];
    data.config.children[0].children.map((item, index) => {
      newRowList[index] = item.config.value.replace('@P .', '');
      return null;
    });
    const propRef = data.config.referenceList.replace('@P .', '');
    return html`
      <div class="table-action-area">
        <button type="button" class="pzhc pzbutton Simple" aria-label="Add row" data-newrow="${newRowList.join()}"
        data-ref=${propRef} data-action-click="addRow">${plusIcon()}Add item</button>
      </div>
    `;
  }
  return null;
};

const TableContent = (data, isReadOnly, webcomp) => {
  const propRef = data.config.referenceList.replace('@P .', '');
  const headers = data.config.children[0].children;
  const rows = webcomp.data.data.caseInfo.content[propRef];
  if (!rows) return null;
  return html`
  ${rows.map((row, index) => html`
    <tr>
    ${headers.map((tdItem) => {
    const field = tdItem;
    const label = tdItem.config.label.replace('@L ', '');
    return html`
    <td data-title="${label}">${Field(field, '', isReadOnly, webcomp, `${propRef}(${index + 1})`)}</td>`;
  })}${!isReadOnly ? html`<td><button type="button" class="pzhc pzbutton Simple" aria-label="Delete row" data-ref=${`${propRef}(${index + 1}).pyTemplate`}  
  data-action-click='deleteRow'>${trashIcon()}</button></td>` : null}
    </tr>`)}
`;
};
