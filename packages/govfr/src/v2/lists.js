/* global i18n */
import { html } from 'lit';
import { Field } from './fields';
import { LoadingIndicator } from '../loading';
import { getValue } from '../../../core/src/utils/form-utils';

export const SimpleTable = (data, isReadOnly, webcomp) => {
  const isreadonlytable = isReadOnly || data.config.renderMode !== 'Editable';
  return html`
  <table class="fr-table fr-table--no-caption" data-fr-js-table="true">
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
  <table class="fr-table fr-table--no-caption" data-fr-js-table="true">
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
    <ul class="fr-btns-group fr-btns-group--inline">
        <li><button type="button" class="fr-btn"
        data-newrow="${newRowList.join()}"
        data-ref=${propRef} data-action-click="addRow">Ajouter une ligne</button></li>
      </ul>
    `;
  }
  return null;
};

const TableContent = (data, isReadOnly, webcomp) => {
  const propRef = data.config.referenceList.replace('@P .', '');
  const headers = data.config.children[0].children;
  const rows = getValue(webcomp.data.data.caseInfo.content, propRef);
  if (!rows) return null;
  return html`
  ${rows.map((row, index) => html`
    <tr>
    ${headers.map((tdItem) => {
    const field = tdItem;
    return html`
    <td>${Field(field, undefined, isReadOnly, webcomp, `${propRef}(${index + 1})`)}</td>`;
  })}${!isReadOnly ? html`<td><button type="button" class="fr-btn"
  data-ref=${`${propRef}(${index + 1}).pyTemplate`}
  data-action-click='deleteRow'>Supprimer</button></td>` : null}
    </tr>`)}
`;
};
