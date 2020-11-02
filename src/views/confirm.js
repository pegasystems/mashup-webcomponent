import { html } from 'lit-html';
import { AttachmentButton } from './attachments';
import { paperclipIcon } from './icons';
import { LoadingIndicator } from './loading';

/* This component renders the case confirm screen - this screen is shown when all assignments
   have been completed and the confirm harness is rendered - this is different from the review screeen */
export const showConfirm = (name, id, status, onDisplayAttachments) => html`
  <div class="flex layout-content-inline_middle main-header">
    <h2>${name} (${id})</h2>
    <span class='badge-bg-info centered'><span class='badge_text'>${status}</span></span>
    ${onDisplayAttachments ? html`<div class="flex layout-content-inline_middle margin-l-auto">
        ${AttachmentButton('Attachments', paperclipIcon(), 'Simple', onDisplayAttachments)}
      </div>` : ''}
  </div>
  <div class="flex layout-content-inline_middle success">
    Thank you. Your information has been submitted.
  </div>
  <h3>Case information</h3>
  <div id="case-data">${LoadingIndicator()}</div>`;
