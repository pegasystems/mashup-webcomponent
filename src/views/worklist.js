import { html } from 'lit-html';
import { ButtonMenu } from './button-menu';

const WorkList = (title, cases, onDisplayCaseTypes, onReload, onCreate, onOpen) => html`
  <div class="flex layout-content-inline_middle main-header">
    <h2>
      ${title}
      ${cases.length > 0
    ? html`
            (${cases.length})
          `
    : ''}
    </h2>
    <div class="flex layout-content-inline_middle margin-l-auto">
      <button class="pzhc pzbutton Simple" arial-label='Click to refresh the worklist'
      title='Click to refresh the worklist' @click="${onReload}">Refresh</button>
      ${ButtonMenu('Create', 'Create a new case', onDisplayCaseTypes, onCreate)}
    </div>
  </div>
  ${cases.length > 0
    ? html`
        <table>
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
                    <button @click="${onOpen}" class="pzhc pzbutton" data-type="assignment" data-id="${item.ID}">Open</button>
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

export { WorkList };
