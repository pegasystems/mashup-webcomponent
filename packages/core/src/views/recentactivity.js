/* global i18n */
import { html } from 'lit';
import { ButtonMenu } from './button-menu';

const RecentActivity = (title, cases, onDisplayCaseTypes, onReload, onCreate, onOpen) => html`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
    ${i18n.t('Your recent activity')}
      ${cases.length > 0 ? html`<span>(${cases.length})</span>` : ''}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button type='button' class="pzhc pzbutton Simple"
      title='${i18n.t('Click to refresh the recentactivity')}' @click="${onReload}">${i18n.t('Refresh')}</button>
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
              <th span='col'>${i18n.t('Request date')}</th>
              <th span='col'>${i18n.t('Description')}</th>
              <th span='col'>${i18n.t('Status')}</th>
            </tr>
          </thead>
          <tbody>
            ${cases.map(
    (item) => html`
                <tr>
                  <td data-title='Reference number'> <button @click="${onOpen}" class="pzhc pzbutton" data-type="assignment" data-id="${item.pzInsKey}">
                  ${item.pyID}</button></td>
                  <td data-title='Request date'>${i18n.t(new Date(item.pxCreateDateTime).toString().split(' ').slice(1, 4)
    .join(' ')
    .replace(/ ([^ ]*)$/, ',$1'))}</td>
                  <td data-title='Description'>${item.pyLabel}</td>
                  <td data-title='Status'>${item.pyStatusWork}</td>
                  </td>
                </tr>
              `,
  )}
          </tbody>
        </table>
        </div>
      `
    : html`
        <div class="margin-t-2x">${i18n.t('no cases')}</div>
      `}
`;

export { RecentActivity };
