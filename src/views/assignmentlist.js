import { html } from 'lit-html';

export const AssignmentList = (assignments, onOpen) => {
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
          <td>${item.instructions !== '' ? item.instructions : item.name}</td>
          <td>${item.routedTo}</td>
          <td class="right-aligned">
            <button @click="${onOpen}" class="pzhc pzbutton" data-type="assignment" data-id="${item.ID}">Open</button>
          </td>
        </tr>`)
}
  </tbody >
  </table > `;
};
