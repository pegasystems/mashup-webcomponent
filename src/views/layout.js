import { html } from 'lit-html';
import { Field } from './fields';
import { SimpleTable, ListTitle, ListAction } from './lists';

const Layout = (data, path) => html`
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
          <div class="${classname}">${Layout(item.layout.view.groups, tmppath)}</div>
        `;
      }
      if (item.layout.groups) {
        return html`
          <div class="${classname}">${Layout(item.layout.groups, tmppath)}</div>
        `;
      }
      if (item.layout.rows) {
        if (item.layout.header) {
        /* We could also use groupFormat (Grid vs Dynamic) or layoutFormat (REPEATINGROW vs REPEATINGLAYOUT) */
          return html`${SimpleTable(item, tmppath)}`;
        }
        return html`${SimpleList(item, tmppath)}`;
      }
      return null;
    }
    if (item.field) {
      return html`${Field(item.field, tmppath)}`;
    }
    if (item.view && item.view.groups) {
      return html`${Layout(item.view.groups, tmppath)}`;
    }
    return null;
  })}
`;

const SimpleList = (item, path) => html`
${ListTitle(item.layout)}
          <div class="rdl">
            ${List(item.layout.rows, path)}
          </div>
          ${ListAction(item.layout)}
`;

const List = (data, path) => html`
  ${data.map((item, index) => {
    const tmppath = `${path}/row${index}`;
    if (item.groups) {
      return html`
        <div>
          ${Layout(item.groups, tmppath)}
        </div>
      `;
    }
    return null;
  })}
`;

export {
  Layout,
};
