import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html';
import { Field } from './fields';
import { SimpleTable, ListTitle, ListAction } from './lists';

export const Layout = (data, path, isReadOnly, webcomp) => html`
  ${data.map((item, index) => {
    const tmppath = `${path}-${index}`;
    if (item.layout) {
      if (item.layout.view && item.layout.view.groups) {
        return html`
          <div>${Layout(item.layout.view.groups, tmppath, isReadOnly, webcomp)}</div>
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
        switch (item.layout.groupFormat) {
          case 'Inline grid double':
            return html`${headerStr}
            <div class="fr-grid-col-6">
            ${Layout(item.layout.groups, tmppath, isReadOnly, webcomp)}
            </div>`;
          default:
            return html`
          <div>${headerStr}${Layout(item.layout.groups, tmppath, isReadOnly, webcomp)}</div>
        `;
        }
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
    if (item.paragraph) {
      return html`<div>${unsafeHTML(item.paragraph.value)}</div>`;
    } if (item.field) {
      return Field(item.field, tmppath, isReadOnly);
    }
    if (item.view && item.view.groups) {
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
      <fieldset class="fr-fieldset">
      ${Layout(item.groups, tmppath, isReadOnly)}
      </fieldset>`;
    }
    return null;
  })}
`;
