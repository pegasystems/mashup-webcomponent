import { html } from 'lit-html';

const worklist = (cases, reloadHandler) => html`
  <button id="reload" @click="${reloadHandler}">Reload</button>
  ${cases.length > 0
    ? html`
        <table id="worklist">
          <thead>
            <tr>
              <th>case ID</th>
              <th>assignment ID</th>
              <th>Name</th>
              <th>Routed to</th>
              <th class="right-aligned">Urgency</th>
            </tr>
          </thead>
          <tbody>
            ${cases.map(
    item => html`
                <tr>
                  <td>${item.caseID}</td>
                  <td><a data-type="assignment">${item.ID}</a></td>
                  <td>${item.name}</td>
                  <td>${item.routedTo}</td>
                  <td class="right-aligned">${item.urgency}</td>
                </tr>

                <tr></tr>
              `,
  )}
          </tbody>
        </table>
      `
    : html`
        <div class="margin-t-2x">no assignments</div>
      `}
`;

export { worklist };
