/* global i18n */
import { html } from 'lit';
import { ButtonMenu } from './button-menu';

const WorkList = (title, cases, onDisplayCaseTypes, onReload, onCreate, onOpen) => html`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
    ${i18n.t(title)}
      ${cases.length > 0 ? html`<span>(${cases.length})</span>` : ''}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple"
      title='${i18n.t('Click to refresh the worklist')}' @click="${onReload}">${i18n.t('Refresh')}</button>
      ${ButtonMenu('Create', 'Create a new case', onDisplayCaseTypes, onCreate)}
    </div>
  </div>
  ${cases.length > 0
    ? html`
    <div class='widgetborder'>
        <table class='responsive'>
          <thead>
            <tr>
              <th span='col'>${i18n.t('Reference number')}</th>
              <th span='col'>${i18n.t('Description')}</th>
              <th span='col' class="right-aligned">${i18n.t('Action')}</th>
            </tr>
          </thead>
          <tbody>
            ${cases.map(
    (item) => html`
                <tr>
                  <td data-title='Reference number'>${item.caseID.split(' ')[1]}</td>
                  <td data-title='Name'>${i18n.t(item.name)}</td>
                  <td data-title='Action' class="right-aligned">
                    <button @click="${onOpen}" class="pzhc pzbutton" data-type="assignment" data-id="${item.ID}">
                    ${i18n.t('Open')}</button>
                  </td>
                </tr>
              `,
  )}
          </tbody>
        </table>
      </div>
      `
    : html`
        <div class="margin-t-2x">${i18n.t('no assignments')}</div>
      `}
`;

export { WorkList };
