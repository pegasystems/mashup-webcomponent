import { html } from 'lit-html';
import { Field } from './fields';
import { SimpleTable, ListTitle, ListAction } from './lists';

const Layout = (data, path, isReadOnly) => html`
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
          <div class="${classname}">${Layout(item.layout.view.groups, tmppath, isReadOnly)}</div>
        `;
      }
      if (item.layout.groups) {
        if (typeof item.layout.title === 'string' && item.layout.title !== '' && typeof item.layout.titleFormat) {
          switch (item.layout.titleFormat) {
            case 'h2':
              return html`<div class="${classname}"><h2>${item.layout.title}</h2>
                      ${Layout(item.layout.groups, tmppath, isReadOnly)}</div>`;
            case 'h3':
              return html`<div class="${classname}"><h3>${item.layout.title}</h3>
                      ${Layout(item.layout.groups, tmppath, isReadOnly)}</div>`;
            case 'h4':
              return html`<div class="${classname}"><h4>${item.layout.title}</h4>
                      ${Layout(item.layout.groups, tmppath, isReadOnly)}</div>`;
            default:
              return html`<div class="${classname}"><h2>${item.layout.title}</h2>
                      ${Layout(item.layout.groups, tmppath, isReadOnly)}</div>`;
          }
        }
        return html`
          <div class="${classname}">${Layout(item.layout.groups, tmppath, isReadOnly)}</div>
        `;
      }
      if (item.layout.rows) {
        if (item.layout.header) {
        /* We could also use groupFormat (Grid vs Dynamic) or layoutFormat (REPEATINGROW vs REPEATINGLAYOUT) */
          return html`${SimpleTable(item, tmppath, isReadOnly)}`;
        }
        return html`${SimpleList(item, tmppath, isReadOnly)}`;
      }
      return null;
    }
    if (item.field) {
      return html`${Field(item.field, tmppath, isReadOnly)}`;
    }
    if (item.view && item.view.groups) {
      return html`${Layout(item.view.groups, tmppath, isReadOnly)}`;
    }
    return null;
  })}
`;

const SimpleList = (item, path, isReadOnly) => html`
${ListTitle(item.layout)}
          <div class="rdl">
            ${List(item.layout.rows, path, isReadOnly)}
          </div>
          ${ListAction(item.layout, false, isReadOnly)}
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

export {
  Layout,
};
