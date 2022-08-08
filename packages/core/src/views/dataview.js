/* global i18n */
import { html } from 'lit';

const DataView = (title, data, onReload, onOpen) => html`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
    ${i18n.t(title)}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple"
      title='${i18n.t('Click to refresh the tasklist')}' @click="${onReload}">${i18n.t('Refresh')}</button>
    </div>
  </div>
  ${data.length > 0
    ? html`<div class='rdl'>${data.map(
      (item) => html`
                <div class="flex align-center">
                  <div class="flex-all">
                  ${i18n.t(item.name)}</div>
                  <div>
                    <button @click="${onOpen}" class="pzhc pzbutton" data-type="assignment" data-id="${item.ID}">
                    ${i18n.t('Begin')}</button>
                  </div>
                </div>
              `,
    )}</div>`
    : html`
        <div class="margin-t-2x">${i18n.t('no tasks')}</div>
      `}
`;

export { DataView };
