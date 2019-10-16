import { html } from 'lit-html';

const worklist = (cases, reloadHandler, createCaseHandler, openCaseHandler) => html`
  <div class="flex right-aligned">
    <button id="reload" @click="${reloadHandler}">Reload</button>
    <button id="create" @click="${createCaseHandler}">Create</button>
  </div>
  ${cases.length > 0
    ? html`
        <table id="worklist">
          <thead>
            <tr>
              <th>Name</th>
              <th>case ID</th>
              <th class="right-aligned">Urgency</th>
              <th class="right-aligned">Action</th>
            </tr>
          </thead>
          <tbody>
            ${cases.map(
    item => html`
                <tr>
                  <td>${item.name}</td>
                  <td>${item.caseID}</td>
                  <td class="right-aligned">${item.urgency}</td>
                  <td class="right-aligned">
                    <button @click="${openCaseHandler}" class="Strong pzhc pzbutton" data-type="assignment" data-id="${item.ID}">Open</button>
                  </td>
                </tr>
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
