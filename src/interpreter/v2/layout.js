import { html } from 'lit-html';
import { Field } from './fields';

export const Layout = (data, path, isReadOnly, webcomp, context) => {
  if (typeof data === 'undefined') return null;
  if (data.config && data.config.template) {
    if (data.config.template === 'TwoColumn' && data.children.length === 1) {
      data.config.template = 'OneColumn';
    }
    switch (data.config.template) {
      case 'TwoColumn':
        return html`
          <div class="flex layout-content-inline_grid_double">
            <div class="flex layout-content-stacked">${Layout(data.children[0].children, `${path}-0`, isReadOnly, webcomp, context)}</div>
            <div class="flex layout-content-stacked">${Layout(data.children[1].children, `${path}-1`, isReadOnly, webcomp, context)}</div>
          </div>
        `;
      case 'OneColumn':
        return html`
          <div class="flex layout-content-stacked">
            ${Layout(data.children[0].children, `${path}-0`, isReadOnly, webcomp, context)}
          </div>
        `;
      case 'Details':
        return html`
          <div class="flex layout-content-stacked_with_labels_left">
            ${Layout(data.children[0].children, `${path}-0`, isReadOnly, webcomp, context)}
          </div>
        `;
      default:
        return null;
    }
  } else {
    return html`${data.map((item, index) => {
      const tmppath = `${path}-${index}`;
      if (item.type === 'reference' && item.config.type === 'view') {
        let newCtx = '';
        if (item.config.context) newCtx = item.config.context;
        return Layout(webcomp.data.uiResources.resources.views[item.config.name], tmppath, isReadOnly, webcomp,
          (context === '' ? newCtx.substring(1) : context + newCtx));
      }
      return Field(item, tmppath, isReadOnly, webcomp, context);
    })}`;
  }
};
