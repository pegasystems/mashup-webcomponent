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
      <button type='button' class="pzhc pzbutton Simple" arial-label='Click to refresh the worklist'
      title='Click to refresh the worklist' @click="${onReload}">Refresh</button>
      ${ButtonMenu('Create', 'Create a new case', onDisplayCaseTypes, onCreate)}
    </div>
  </div>
  ${cases.length > 0
    ? html`
        <table class='responsive'>
          <thead>
            <tr>
              <th span='col'>Name</th>
              <th span='col'>case ID</th>
              <th span='col' class="right-aligned">Urgency</th>
              <th span='col' class="right-aligned">Action</th>
            </tr>
          </thead>
          <tbody>
            ${cases.map(
    (item) => html`
                <tr>
                  <td data-title='Name'>${item.name}</td>
                  <td data-title='Case ID'>${item.caseID}</td>
                  <td data-title='Urgency' class="right-aligned">${item.urgency}</td>
                  <td data-title='Action' class="right-aligned">
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
