/* global i18n */
import { html } from 'lit';

const DataView = (title, config, data, onReload, onOpen) => html`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
    ${i18n.t(title)}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple"
      title='${i18n.t('Click to refresh the list')}' @click="${onReload}">${i18n.t('Refresh')}</button>
    </div>
  </div>
  ${data.length > 0
    ? html`
        <table class='responsive'>
          <caption class='sr-only'>${i18n.t('My worklist')}</caption>
          <thead>
            <tr>
            ${config.fields.map((cell) => html`<th scope="col" data-title='${i18n.t(cell.label)}'>${i18n.t(cell.label)}</td>`)}
            </tr>
          </thead>
          <tbody>
            ${data.map(
    (item) => html`
                <tr>
                ${config.fields.map((cell) => {
    if (!item[cell.name]) return html`<td data-title='${i18n.t(cell.label)}'></td>`;
    if (cell.name === 'pzInsKey') {
      return html`<td data-title='${i18n.t(cell.label)}'>
      <button @click="${onOpen}" class="pzhc pzbutton" data-type="assignment" data-id="${item.pzInsKey}">${i18n.t('Open')}</button></td>`;
    }
    if (cell.type === 'date') {
      try {
        const dateval = new Intl.DateTimeFormat([], {
          year: 'numeric', month: 'short', day: 'numeric',
        }).format(new Date(item[cell.name]));
        return html`<td data-title='${i18n.t(cell.label)}'>${dateval}</td>`;
      } catch (e) {
        console.error('invalid date', e);
      }
    }
    return html`<td data-title='${i18n.t(cell.label)}'>${i18n.t(item[cell.name])}</td>`;
  })}
                  </td>
                </tr>
              `,
  )}
          </tbody>
        </table>
      `
    : html`
        <div class="margin-t-2x">${i18n.t(config.noresults ?? 'No records found.')}</div>
      `}
`;

export { DataView };
