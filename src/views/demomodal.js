import { render, html } from 'lit-html';
import { displayModal } from './modal-manager';
import { timesIcon } from './icons';

/* This is a simple example of opening a modal using the modal manager */
export const DemoModal = () => {
  const demoButtonHandler = (modalnode) => {
    render(modalContent(), modalnode);
  };

  const modalContent = () => html`
    <div class="flex layout-content-inline_middle main-header">
      <h2>Demo modal</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        <button type='button' data-action-id='close'
        class="pzhc pzbutton Simple" title="Close">${timesIcon()}</button>
      </div>
    </div>
    <div>This is a demo modal</div>
  `;

  return displayModal('Demo', 'open modal', demoButtonHandler);
};
