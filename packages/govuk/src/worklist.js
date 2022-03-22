/* global i18n */
import { html } from 'lit';

const WorkList = (cases, onOpen) => html`
<section>
<h2 class='govuk-heading-m'>${i18n.t('My worklist')}</h2>
  ${cases.length > 0
    ? html`
        <table class='govuk-table'>
          <caption class="sr-only govuk-table__caption govuk-table__caption--m">${i18n.t('My worklist')}</caption>
          <thead class="govuk-table__head">
            <tr class="govuk-table__row">
              <th span='col' class="govuk-table__header">${i18n.t('Name')}</th>
              <th span='col' class="govuk-table__header">${i18n.t('Case ID')}</th>
              <th span='col' class="govuk-table__header">${i18n.t('Status')}</th>
              <th span='col' class="govuk-table__header">${i18n.t('Urgency')}</th>
              <th span='col' class="govuk-table__header">${i18n.t('Action')}</th>
            </tr>
          </thead>
          <tbody class="govuk-table__body">
            ${cases.map(
    (item) => html`
                <tr class="govuk-table__row">
                  <td scope="row" class="govuk-table__header">${i18n.t(item.name)}</td>
                  <td class="govuk-table__cell">${item.caseID}</td>
                  <td class="govuk-table__cell">${item.label}</td>
                  <td class="govuk-table__cell">${item.urgency}</td>
                  <td class="govuk-table__cell">
                    <button @click="${onOpen}" class="govuk-button govuk-button--secondary"
                    data-module="govuk-button" data-type="assignment" data-id="${item.ID}">
                    ${i18n.t('Open')}</button>
                  </td>
                </tr>
              `,
  )}
          </tbody>
        </table>
      `
    : html`
        <div>${i18n.t('no assignments')}</div>
      `}
      </section>`;

export { WorkList };
