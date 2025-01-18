/* global i18n */
import { html } from 'lit';
import { Field } from './fields';
import { SimpleTable, DisplayList } from './lists';
import { getValue } from '../../utils/form-utils';

export const Layout = (data, path, isReadOnly, webcomp, context) => {
  if (typeof data === 'undefined') return null;
  if (Array.isArray(data) && data.length === 1 && data[0].type === 'View') {

    data = data[0];
  }
  if (data.config && data.config.template) {
    if (data.config.template === 'SimpleTable') {
      if (data.config.multiRecordDisplayAs === 'fieldGroup') {
        const propRef = data.config.referenceList.replace('@P .', '').replace('@USER .', '');
        const rows = getValue(webcomp.data.data.caseInfo.content, propRef);
        if (!rows) return null;
        const heading = data.config.heading.replace('@L ', '').replace('@FL ', '');
        return html`${rows.map((row, index) => html`<div><h4>${`${heading} ${index}`}</h4>
        ${Layout(data.children[0].children, `${path}-fieldgroup-${index}`, isReadOnly, webcomp, `${propRef}(${index + 1})`)}</div>`)}`;
      }
      return SimpleTable(data, isReadOnly, webcomp);
    }
    if (data.config.template === 'ListView') {
      return DisplayList(data, isReadOnly, webcomp);
    }
    if (data.config.template === 'DataReference') {
      webcomp.isDeclarativeTarget = true;
    }
    if (data.config.template === 'TwoColumn' && data.children.length === 1) {
      data.config.template = 'OneColumn';
    }
    switch (data.config.template) {
      case 'DetailsTwoColumn':
      case 'TwoColumn':
        return html`
          <div class="flex layout-content-inline_grid_double">
            <div class="flex layout-content-stacked">${Layout(data.children[0].children, `${path}-0`, isReadOnly, webcomp, context)}</div>
            <div class="flex layout-content-stacked">${Layout(data.children[1].children, `${path}-1`, isReadOnly, webcomp, context)}</div>
          </div>
        `;
      case 'DefaultForm':
        return html`
          <div class="${`flex layout-content-default-form layout-content-default-form-${data.config.NumCols}`}">
            ${Layout(data.children[0].children, `${path}-0`, isReadOnly, webcomp, context)}
          </div>
        `;
      case 'DataReference':
        return html`
          <div class="flex layout-content-stacked">
            ${Layout(data.children, `${path}-0`, isReadOnly, webcomp, context)}
          </div>
        `;
      case 'OneColumn':
        return html`
          <div class="flex layout-content-stacked">
            ${Layout(data.children[0].children, `${path}-0`, isReadOnly, webcomp, context)}
          </div>
        `;
      case 'Details': /* Details template is always read-only */
        return html`
          <div class="flex layout-content-stacked_with_labels_left">
            ${Layout(data.children[0].children, `${path}-0`, true, webcomp, context)}
          </div>
        `;
      default:
        return null;
    }
  } else {
    return html`${data.map((item, index) => {
      const tmppath = `${path}-${index}`;
      if (item.type === 'Region') {
        return Layout(item.children, `${path}-0`, true, webcomp, context);
      }
      if (item.type === 'reference' && item.config.type === 'view') {
        let newCtx = '';
        if (item.config.context) newCtx = item.config.context;
        if (item.config.inheritedProps && item.config.inheritedProps.length === 1 && item.config.inheritedProps[0].prop === 'label') {
          const label = i18n.t(item.config.inheritedProps[0].value);
          let subview = webcomp.data.uiResources.resources.views[item.config.name];
          if (subview) {
            if (Array.isArray(subview) && subview.length === 1 && subview[0].type === 'View') {
              subview = subview[0];
            }
            if (subview.config.multiRecordDisplayAs === 'fieldGroup') {
              return Layout(subview, tmppath, isReadOnly, webcomp, context === '' ? newCtx.substring(1) : context + newCtx);
            }
            const subviewclass = subview.config.template === 'SimpleTable' || subview.config.template === 'ListView' ? 'field-table' : 'field-subview';
            return html`<div class='flex content-item field-item ${subviewclass}'><h4>${label}</h4>${
              Layout(
                subview,
                tmppath,
                isReadOnly,
                webcomp,
                (context === '' ? newCtx.substring(1) : context + newCtx),
              )}</div>`;
          }
        }
        return Layout(
          webcomp.data.uiResources.resources.views[item.config.name],
          tmppath,
          isReadOnly,
          webcomp,
          (!context || context === '' ? newCtx.substring(1) : context + newCtx),
        );
      }
      return Field(item, tmppath, isReadOnly, webcomp, context);
    })}`;
  }
};
