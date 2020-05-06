import { html } from 'lit-html';
import { LoadingIndicator, Field } from './fields';
import { SimpleTable, ListTitle, ListAction } from './lists';
import { AttachmentButton } from './attachments';
import { timesIcon, paperclipIcon } from './icons';

const Layout = (data, path, isReadOnly, webcomp) => html`
  ${data.map((item, index) => {
    const tmppath = `${path}-${index}`;
    if (item.layout) {
      if (item.layout.groupFormat.trim() === '' || item.layout.groupFormat === 'CENTER') {
        item.layout.groupFormat = 'default';
      }
      const format = item.layout.groupFormat.replace(/ /g, '_').toLowerCase();
      const classname = `flex content content-items-maxwidth layout-content-${format} content-${format}`;
      if (item.layout.view && item.layout.view.groups) {
        return html`
          <div class="${classname}">${Layout(item.layout.view.groups, tmppath, isReadOnly, webcomp)}</div>
        `;
      }
      if (item.layout.groups) {
        let headerStr = '';
        if (typeof item.layout.title === 'string' && item.layout.title !== '' && typeof item.layout.titleFormat) {
          switch (item.layout.titleFormat) {
            case 'h2':
              headerStr = html`<div class="${classname}"><h2>${item.layout.title}</h2>`;
              break;
            case 'h3':
              headerStr = html`<div class="${classname}"><h3>${item.layout.title}</h3>`;
              break;
            case 'h4':
              headerStr = html`<div class="${classname}"><h4>${item.layout.title}</h4>`;
              break;
            default:
              headerStr = html`<div class="${classname}"><h2>${item.layout.title}</h2>`;
              break;
          }
        }
        return html`
          <div class="${classname}">${headerStr}${Layout(item.layout.groups, tmppath, isReadOnly, webcomp)}</div>
        `;
      }
      if (item.layout.rows) {
        if (item.layout.header) {
        /* We could also use groupFormat (Grid vs Dynamic) or layoutFormat (REPEATINGROW vs REPEATINGLAYOUT) */
          return SimpleTable(item, tmppath, isReadOnly);
        }
        return SimpleList(item, tmppath, isReadOnly);
      }
      return null;
    }
    if (item.field) {
      if (item.field.control && item.field.control.type === 'pxAttachContent') {
        return AttachmentButton('Upload file', 'Upload file', '', webcomp.displayAttachments);
      }
      return Field(item.field, tmppath, isReadOnly);
    }
    if (item.view && item.view.groups) {
      if (item.view.viewID === 'pyAttachFieldOptional' && item.view.appliesTo === 'Embed-Attach-File') {
        return AttachmentButton('Upload file', 'Upload file', '', webcomp.displayAttachments);
      }
      return Layout(item.view.groups, tmppath, isReadOnly, webcomp);
    }
    return null;
  })}
`;

const SimpleList = (item, path, isReadOnly) => html`
  ${ListTitle(item.layout)}
  <div class="rdl">
    ${List(item.layout.rows, path, isReadOnly)}
  </div>
  ${ListAction(item.layout, isReadOnly)}
`;

const List = (data, path, isReadOnly) => html`
  ${data.map((item, index) => {
    const tmppath = `${path}/row${index}`;
    if (item.groups) {
      return html`
        <div>
          ${Layout(item.groups, tmppath, isReadOnly)}
        </div>
      `;
    }
    return null;
  })}
`;

const showConfirm = (name, id, status, onDisplayAttachments) => html`
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

const showErrorMessage = (msg, onClose) => html`
  <div class="error">${msg}
  ${onClose != null ? html`
    <button type='button' title="Click to close the banner" class="pzhc pzbutton Light" @click="${onClose}">
    ${timesIcon()}</button>` : ''}
  </div>`;

export {
  Layout, showConfirm, showErrorMessage,
};
