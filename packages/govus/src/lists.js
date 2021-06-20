/* global i18n */
import { html } from 'lit-html';
import { Field } from './fields';
import { LoadingIndicator } from './loading';

export const SimpleTable = (data, isReadOnly, webcomp) => {
  const isreadonlytable = isReadOnly || data.config.renderMode !== 'Editable';
  return html`
  <table class="usa-table usa-table--borderless">
    <caption>${data.config.name}</caption>
    <thead>
      <tr>
        ${TableHeader(data.config.children[0].children, isreadonlytable)}
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
  <table class="usa-table usa-table--borderless">
    <caption>${data.config.name}</caption>
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
    <th scope='col'>${i18n.t(item.config.label)}</th>`)}${!isReadOnly ? html`<th></th>` : null}
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
        <button type="button" class="usa-button"
        aria-label="${i18n.t('Add row')}" data-newrow="${newRowList.join()}"
        data-ref=${propRef} data-action-click="addRow">${i18n.t('Add item')}</button>
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
    return html`
    <td>${Field(field, undefined, isReadOnly, webcomp, `${propRef}(${index + 1})`)}</td>`;
  })}${!isReadOnly ? html`<td><button type="button" class="usa-button"
  aria-label="${i18n.t('Delete item')}" data-ref=${`${propRef}(${index + 1}).pyTemplate`}  
  data-action-click='deleteRow'>Delete</button></td>` : null}
    </tr>`)}
`;
};
