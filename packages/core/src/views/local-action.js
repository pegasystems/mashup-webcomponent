/* global i18n */
import { render, html } from 'lit-html';
import { displayModal } from './modal-manager';
import { timesIcon } from './icons';
import { LoadingIndicator } from './loading';

export const RenderLocalAction = (title, content) => html`
<div class="flex layout-content-inline_middle main-header">
  <h2>${i18n.t(title)}</h2>
  <div class="flex layout-content-inline_middle margin-l-auto">
    <button type='button' data-action-id='close'
    class="pzhc pzbutton Simple" aria-label="${i18n.t('Close modal')}">${timesIcon()}</button>
  </div>
</div>
<div class="validation" role="alert" aria-live="assertive"></div>
<form id="modalcontent">${content}</form>
`;

export const ShowLocalAction = (data, onDisplay, onCancel) => {
  const flowAction = data.control.actionSets[0].actions[0].actionProcess.localAction;
  const target = data.control.actionSets[0].actions[0].actionProcess.target;
  const buttonFormat = data.control.modes[1].controlFormat ? data.control.modes[1].controlFormat : '';
  if (target === 'modalDialog') {
    const demoButtonHandler = (modalnode) => {
      render(RenderLocalAction(data.control.label, LoadingIndicator()), modalnode);
      onDisplay(flowAction, modalnode);
    };
    return displayModal(flowAction, data.control.label, buttonFormat, demoButtonHandler, onCancel);
  }
  const openLocalAction = () => {
    onDisplay(flowAction);
  };
  return html`<div><button type="button" @click="${openLocalAction}" class="pzhc pzbutton ${buttonFormat}">${i18n.t(data.control.label)}</button></<div>`;
};
