import { html } from 'lit-html';

export const RelatedCases = (cases, onOpen) => {
  if (!cases || cases.length === 0) return null;
  return html`
  <h3>
    Related cases
  </h3>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th class="right-aligned">Action</th>
      </tr>
    </thead>
      <tbody>
        ${cases.map((item) => html`
        <tr>
          <td>${item.ID}</td>
          <td class="right-aligned">
            <button type='button' @click="${onOpen}" class="pzhc pzbutton" data-type="assignment" data-id="${item.ID}">Open</button>
          </td>
        </tr>`)}
  </tbody >
  </table > `;
};
