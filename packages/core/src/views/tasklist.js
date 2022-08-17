/* global i18n */
import { html } from 'lit';
import { ButtonMenu } from './button-menu';
import { infoIcon } from './icons';

const TaskList = (title, cases, onDisplayCaseTypes, onReload, onCreate, onOpen) => html`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
    ${i18n.t(title)}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple"
      title='${i18n.t('Click to refresh the tasklist')}' @click="${onReload}">${i18n.t('Refresh')}</button>
      ${ButtonMenu('Create', 'Create a new case', onDisplayCaseTypes, onCreate)}
    </div>
  </div>
  ${cases.length > 0
    ? html`<div class='rdl'>${cases.map(
      (item) => html`
                <div class="flex align-center">
                  ${infoIcon()}
                  <div class="flex flex-col flex-all">
                    <h3>${i18n.t(item.name)}</h3>
                    <div>${i18n.t(item.instructions)}</div>
                  </div>
                    <button @click="${onOpen}" class="pzhc pzbutton" data-type="assignment" data-id="${item.ID}">
                    ${i18n.t('Begin')}</button>
                </div>
              `,
    )}</div>`
    : html`
        <div class="margin-t-2x">${i18n.t('no tasks')}</div>
      `}
`;

export { TaskList };
