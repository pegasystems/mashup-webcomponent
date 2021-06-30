/* global i18n */
import { html } from 'lit-html';
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
        <table class='responsive'>
          <caption class='sr-only'>${i18n.t('My worklist')}</caption>
          <thead>
            <tr>
              <th span='col'>${i18n.t('Name')}</th>
              <th span='col'>${i18n.t('Case ID')}</th>
              <th span='col' class="right-aligned">${i18n.t('Urgency')}</th>
              <th span='col' class="right-aligned">${i18n.t('Action')}</th>
            </tr>
          </thead>
          <tbody>
            ${cases.map(
    (item) => html`
                <tr>
                  <td data-title='Name'>${i18n.t(item.name)}</td>
                  <td data-title='Case ID'>${item.caseID}</td>
                  <td data-title='Urgency' class="right-aligned">${item.urgency}</td>
                  <td data-title='Action' class="right-aligned">
                    <button @click="${onOpen}" class="pzhc pzbutton" data-type="assignment" data-id="${item.ID}">
                    ${i18n.t('Open')}</button>
                  </td>
                </tr>
              `,
  )}
          </tbody>
        </table>
      `
    : html`
        <div class="margin-t-2x">${i18n.t('no assignments')}</div>
      `}
`;

export { WorkList };
