/* global i18n */
import { html } from 'lit-html';

export const RelatedCases = (cases, onOpen) => {
  if (!cases || cases.length === 0) return null;
  return html`
  <h3>
    ${i18n.t('Related cases')}
  </h3>
  <table>
    <thead>
      <tr>
        <th span='col'>${i18n.t('ID')}</th>
        <th span='col' class="right-aligned">${i18n.t('Action')}</th>
      </tr>
    </thead>
      <tbody>
        ${cases.map((item) => html`
        <tr>
          <td>${item.ID}</td>
          <td class="right-aligned">
            <button type='button' @click="${onOpen}" class="pzhc pzbutton" data-type="assignment" data-id="${item.ID}">${i18n.t('Open')}</button>
          </td>
        </tr>`)}
  </tbody>
  </table>`;
};
