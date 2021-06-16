import { render, html } from 'lit-html';
import { displayModal } from './modal-manager';
import { timesIcon } from './icons';

/* This is a simple example of opening a modal using the modal manager - to use this example
   just includes this component and include the DemoModal in an html template. This will render
   a button labelled 'open modal' and when clicked with display a modal dialog */
export const DemoModal = () => {
  const demoButtonHandler = (modalnode) => {
    render(modalContent(), modalnode);
  };

  const modalContent = () => html`
    <div class="flex layout-content-inline_middle main-header">
      <h2>Demo modal</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        <button type='button' data-action-id='close'
        class="pzhc pzbutton Simple" aria-label="Close">${timesIcon()}</button>
      </div>
    </div>
    <div id="modalcontent">This is a demo modal</div>
  `;

  return displayModal('Demo', 'open modal', '', demoButtonHandler);
};
