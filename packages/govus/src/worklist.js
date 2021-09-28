/* global i18n */
import { html } from 'lit';

const WorkList = (cases, onOpen) => html`
  ${cases.length > 0
    ? html`
        <table class="usa-table usa-table--borderless">
          <caption>
            ${i18n.t('My pending cases')}
          </caption>
          <thead>
            <tr>
              <th span="col">${i18n.t('Name')}</th>
              <th span="col">${i18n.t('Status')}</th>
              <th span="col">${i18n.t('Action')}</th>
            </tr>
          </thead>
          <tbody>
            ${cases.map(
    (item) => html`
                <tr>
                  <td scope="row">${i18n.t(item.name)}</td>
                  <td>${item.label}</td>
                  <td>
                    <button @click="${onOpen}" class="usa-button" data-module="govuk-button" data-type="assignment" data-id="${item.ID}">
                      ${i18n.t('Open')}
                    </button>
                  </td>
                </tr>
              `,
  )}
          </tbody>
        </table>
      `
    : html`
        <div style='line-height: 50px;text-align:center'>${i18n.t('you do not have any pending cases.')}</div>
      `}
`;

export { WorkList };
