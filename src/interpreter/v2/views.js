import { html } from 'lit-html';
import { Layout } from './layout';
import { ButtonMenu } from '../../views/button-menu';
import { AttachmentButton } from '../../views/attachments';
import { paperclipIcon } from '../../views/icons';

const SubmitActionArea = (onCancel, onSave) => html`
  <div class="action-button-area">
    ${onCancel !== null ? html`<button type="button" class="pzhc pzbutton" @click="${onCancel}">Cancel</button>` : ''}
    ${onSave !== null ? html`<button type="button" class="pzhc pzbutton" @click="${onSave}">Save</button>` : ''}
    <button type="button" data-submit="submit" class="Strong pzhc pzbutton">Submit</button>
  </div>
`;

const LocalActionArea = (onCancel, onSave) => html`
  <div class="action-button-area">
    ${onCancel !== null ? html`<button type="button" class="pzhc pzbutton" @click="${onCancel}">Cancel</button>` : ''}
    <button type="button" data-submit="save" class="pzhc pzbutton Strong" @click="${onSave}">Submit</button>
  </div>
`;

const CloseActionArea = (onCancel) => {
  if (onCancel === null) return null;
  return html`
  <div class="action-button-area">
  ${onCancel !== null ? html`<button type="button" class="pzhc pzbutton Strong" @click="${onCancel}">Close</button>` : ''}
  </div>`;
};

const CreateActionArea = onCancel => html`
  <div class="action-button-area">
    ${onCancel !== null ? html`<button type="button" class="pzhc pzbutton" @click="${onCancel}">Cancel</button>` : ''}
    <button type="button" data-submit="create" class="Strong pzhc pzbutton">Create</button>
  </div>
`;

const AssignmentList = (assignments, onOpen) => {
  if (!assignments || assignments.length === 0) return null;
  return html`
  <h3>
    Assignments
  </h3>
  <table>
    <thead>
      <tr>
        <th>Priority</th>
        <th>Task</th>
        <th>Assigned to</th>
        <th class="right-aligned">Action</th>
      </tr>
    </thead>
      <tbody>
        ${assignments.map(item => html`
        <tr>
          <td>${item.urgency}</td>
          <td>${item.name}</td>
          <td>${item.assigneeInfo.name}</td>
          <td class="right-aligned">
            <button type='button' @click="${onOpen}" class="pzhc pzbutton" data-type="assignment" data-id="${item.ID}">Open</button>
          </td>
        </tr>`)
}
  </tbody >
  </table > `;
};

/* We also have the case priority in ${data.urgency} and the user assigned as ${data.routedTo} */
export const CaseHeader = (name, data, casedata, status, numAttachments, onDisplayActions, onCreate, onOpen, onDisplayAttachments) => {
  /* Case of openCaseByHandle - not an assignment */
  const attachmentsLabel = html`${paperclipIcon()}<span class='count-badge'>${numAttachments}</span>`;
  if (typeof data.caseID === 'undefined' && casedata.content) {
    return html`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${casedata.content.pyLabel} (${casedata.content.pyID})</h2>
      ${status !== '' ? html`<span class='badge-bg-info centered'><span class='badge_text'>${status}</span></span>` : ''}
      <div class="flex layout-content-inline_middle margin-l-auto">
        ${onDisplayAttachments ? AttachmentButton('Attachments', attachmentsLabel, 'Simple', onDisplayAttachments) : ''}
        ${casedata.actions && casedata.actions.length > 0 ? html`
          ${ButtonMenu('Actions', 'Start a new action', onDisplayActions, onCreate)}` : ''}
      </div>
    </div>
    ${AssignmentList(casedata.assignments, onOpen)}
    <h3>Case information</h3>`;
  }
  if (name === '' || typeof data.caseID === 'undefined') return '';
  const id = data.caseID.split(' ')[1];
  return html`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${data.name} (${id})</h2>
    ${status !== '' ? html`<span class='badge-bg-info centered'><span class='badge_text'>${status}</span></span>` : ''}
    <div class="flex layout-content-inline_middle margin-l-auto">
      ${onDisplayAttachments ? AttachmentButton('Attachments', attachmentsLabel, 'Simple', onDisplayAttachments) : ''}
      ${data.actions && data.actions.length > 0 ? html`
        ${ButtonMenu('Actions', 'Start a new action', onDisplayActions, onCreate)}` : ''}
    </div>
  </div>
 <h3>${name}</h3>`;
};

export const mainLayout = (data, path, onCancel, onSave, webcomp) => html`
  <div>${Layout(data, path, false, webcomp, '')}</div>
  ${SubmitActionArea(onCancel, onSave)}
`;

export const reviewLayout = (data, path, onCancel, webcomp) => html`
  <div>${Layout(data, path, true, webcomp)}</div>
  ${CloseActionArea(onCancel)}
`;

export const saveCaseLayout = (data, path, onCancel, onSave, webcomp) => html`
  <div>${Layout(data, path, false, webcomp)}</div>
  ${LocalActionArea(onCancel, onSave)}
`;

export const createCaseLayout = (data, path, onCancel, webcomp) => html`
  <div>${Layout(data, path, false, webcomp)}</div>
  ${CreateActionArea(onCancel)}
`;

export const genPageValidationErrors = (response) => {
  if (response.errorDetails) {
    return html`
    <ul>
      ${response.errorDetails.map(item => html`<li>${item.localizedValue}</li>`)}
    </ul>`;
  }
  return html`
  <ul>
    ${response.errors[0].ValidationMessages.map((item) => {
    if (item.Path) {
      return html`
          <li>${item.Path.substring(1)}: ${item.ValidationMessage}</li>
        `;
    }
    return html`
    <li>${item.ValidationMessage}</li>
  `;
  })}
  </ul>`;
};

export const genCaseTypesList = (data) => {
  const itemList = [];
  const keys = Object.entries(data);
  for (const i of keys) {
    itemList.push(
      html`
        <li role="menuitem" tabindex="-1" data-value="${i[0]}">${i[1].name}</li>
      `,
    );
  }
  return html`
    ${itemList}
  `;
};

export const genActionsList = (name, data) => {
  const itemList = [];
  const keys = Object.entries(data.actions);
  for (const i of keys) {
    if (i[1].name !== name) {
      itemList.push(
        html`
          <li role="menuitem" tabindex="-1" data-value="${i[1].ID}">${i[1].name}</li>
        `,
      );
    }
  }
  return html`
    ${itemList}
  `;
};
