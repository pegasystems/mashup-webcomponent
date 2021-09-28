import { html } from 'lit';
import { Field } from './fields';
import { SimpleTable, ListTitle, ListAction } from './lists';
import { AttachmentButton } from '../../views/attachments';
import { ShowLocalAction } from '../../views/local-action';

export const Layout = (data, path, isReadOnly, webcomp) => html`
  ${data.map((item, index) => {
    const tmppath = `${path}-${index}`;
    if (item.layout) {
      if (item.layout.groupFormat.trim() === '' || item.layout.groupFormat === 'CENTER') {
        item.layout.groupFormat = 'default';
      }
      const format = item.layout.groupFormat.replace(/ /g, '_').toLowerCase();
      const classname = `flex content layout-content-${format} content-${format}`;
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
              headerStr = html`<h2>${item.layout.title}</h2>`;
              break;
            case 'h3':
              headerStr = html`<h3>${item.layout.title}</h3>`;
              break;
            case 'h4':
              headerStr = html`<h4>${item.layout.title}</h4>`;
              break;
            default:
              headerStr = html`<h2>${item.layout.title}</h2>`;
              break;
          }
        }
        return html`
        ${headerStr}<div class="${classname}">${Layout(item.layout.groups, tmppath, isReadOnly, webcomp)}</div>
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
      if (item.field.control && item.field.control.actionSets && item.field.control.actionSets.length > 0 &&
          item.field.control.actionSets[0] && item.field.control.actionSets[0].actions[0] &&
        item.field.control.actionSets[0].actions[0].action === 'localAction') {
        const currentaction = webcomp.actionID;
        return ShowLocalAction(item.field, webcomp.displayLocalAction, () => { webcomp.reloadAssignment(currentaction); });
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
    const tmppath = `${path}-row${index}`;
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
