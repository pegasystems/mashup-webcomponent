/* global i18n */
/* eslint-disable no-param-reassign */
import { render, html } from 'lit-html';
import { LoadingIndicator } from './loading';
import {
  paperclipIcon, trashIcon, timesIcon, documentIcon, threedotIcon,
} from './icons';
import { displayModal } from './modal-manager';
import { ButtonMenu } from './button-menu';

export const AttachmentButton = (title, label, format, onDisplay) => {
  const attachmentButtonHandler = (modalnode) => {
    render(genAttachmentsList(modalnode, []), modalnode); // render the modal and display the loading screen
    onDisplay(modalnode); // Call the API to retrieve the attachments
  };
  return displayModal(title, label, format, attachmentButtonHandler);
};

export const genAttachmentsList = (target, data, caseID, webcomp, tmpFiles) => {
  let id = 0; /* used for actions like download or delete */

  function base64ToArrayBuffer(base64) {
    const binaryString = window.atob(base64);
    const binaryLen = binaryString.length;
    const bytes = new Uint8Array(binaryLen);
    for (let i = 0; i < binaryLen; i++) {
      const ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }
    return bytes;
  }

  const downloadContent = (filedata) => {
    if (typeof filedata === 'undefined' ||
    (typeof filedata === 'string' && filedata === '')) return;
    if (data[id].category === 'URL') {
      window.open(filedata);
      return;
    }
    let filename = data[id].fileName;
    if (typeof filename === 'undefined') filename = data[id].name;
    if (typeof filename === 'undefined') filename = data[id].pyAttachName;
    if (!filename) return;
    const elem = window.document.createElement('a');
    if (data[id].category === 'Correspondence') {
      filename = `${data[id].name}.html`;
      const content = `<html><head><title>${data[id].name}</title></head><body>${filedata}</body></html>`;
      const blob = new Blob([content], { type: 'text' });
      elem.href = window.URL.createObjectURL(blob);
    } else {
      const sampleArr = base64ToArrayBuffer(filedata);
      const blob = new Blob([sampleArr], { type: 'octet/stream' });
      elem.href = window.URL.createObjectURL(blob);
    }
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  };

  const downloadAttachment = (event) => {
    event.stopPropagation();
    const el = event.target;
    id = el.getAttribute('data-id');
    webcomp.fetchData.call(webcomp, 'attachment', { id: data[id].ID, target: downloadContent });
  };

  const deleteAttachment = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const el = event.target.closest('button');
    id = el.getAttribute('data-id');
    webcomp.sendData.call(webcomp, 'deleteattachment', { id: data[id].ID, target });
  };

  const deleteUploadedFile = (event) => {
    event.stopPropagation();
    const el = event.target.closest('button');
    id = parseInt(el.getAttribute('data-id'), 10);
    tmpFiles.splice(id, 1);
    render(genAttachmentsList(target, data, caseID, webcomp, tmpFiles), target);
  };

  const updateUploadedFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const el = event.target;
    id = el.getAttribute('data-id');
    if (el.tagName === 'INPUT') {
      const propname = el.getAttribute('data-prop-id');
      tmpFiles[id][propname] = el.value;
    } else if (el.tagName === 'SELECT') {
      tmpFiles[id].category = el.value;
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const el = event.target;
    const related = event.relatedTarget;
    const bTargetIsIncluded = el === null ? null : el.closest('.attach-files');
    const bRelTargetIsIncluded = related === null ? null : related.closest('.attach-files');
    if (event.type === 'dragenter' || event.type === 'dragover') {
      if (bTargetIsIncluded != null) {
        bTargetIsIncluded.classList.add('drop-file-hover');
      }
    } else if (event.type === 'dragleave' || event.type === 'drop') {
      if (bRelTargetIsIncluded === null && bTargetIsIncluded !== null) {
        bTargetIsIncluded.classList.remove('drop-file-hover');
      }
    }
    if (event.type === 'drop') {
      const dt = event.dataTransfer;
      const files = dt.files;
      if (!target) {
        target = el.closest('.attach-files');
      }
      renderFilesToBeUploaded(el, files);
    }
  };

  const uploadFiles = (event) => {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
    for (let i = 0; i < tmpFiles.length; i++) {
      const file = tmpFiles[i];
      delete file.editing;
      file.loading = true;
      if (file.type === 'URL') {
        data.unshift(file);
        webcomp.sendData.call(webcomp, 'attachments', { id: caseID, actionid: [file], target });
      } else {
        data.unshift({ name: file.displayName, extension: file.extension, loading: true });
        webcomp.sendData.call(webcomp, 'uploadattachment', { actionid: file, target });
      }
    }
    render(genAttachmentsList(target, data, caseID, webcomp), target);
  };

  const renderFilesToBeUploaded = (el, files) => {
    const newfiles = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      let filepartidx = file.name.lastIndexOf('.');
      if (filepartidx === -1) filepartidx = file.name.length;
      file.displayName = file.name.substring(0, filepartidx);
      file.extension = file.name.substring(filepartidx + 1);
      file.editing = true;
      file.category = 'File';
      newfiles.push(file);
    }
    render(genAttachmentsList(target, data, caseID, webcomp, newfiles), target);
  };

  const uploadFile = (event) => {
    event.stopPropagation();
    let el = event.target;
    if (el.tagName === 'BUTTON') {
      el = event.target.parentNode.parentNode.firstElementChild;
      el.click();
      return;
    }
    if (!target) {
      target = el.closest('.attach-files');
    }
    renderFilesToBeUploaded(el, el.files);
  };

  const enterURL = (event) => {
    event.stopPropagation();
    const newfiles = [{
      type: 'URL', category: 'URL', name: '', url: '', editing: true,
    }];
    render(genAttachmentsList(target, data, caseID, webcomp, newfiles), target);
  };

  const cancelUpload = (event) => {
    event.stopPropagation();
    render(genAttachmentsList(target, data, caseID, webcomp), target);
  };

  const renderAttachmentCategories = (itemid, value) => html`
    <select data-id="${itemid}" @change="${updateUploadedFile}" class='flex-all' aria-label='${i18n.t('Category')}'>
    ${webcomp.attachmentcategories.map((item) => html`
      <option ?selected=${item.ID === value}>${item.ID}</option>
    `)}
    </select>`;

  const renderItemTitle = (itemid, item) => {
    const options = {
      year: 'numeric', month: 'numeric', day: 'numeric',
    };
    let createTime = new Date(item.createTime);
    createTime = createTime.toLocaleDateString(undefined, options);
    return html`
    <div class='list-item-title'>
      <button type='button' class='Light'  data-id="${itemid}" @click="${downloadAttachment}">${item.name}</button>
      ${item.loading ? '' : html`
      <span class='list-item-meta'><span>${item.createdBy}</span><span>${createTime}</span><span>${i18n.t('Category:')} ${item.category}</span></span>`}
    </div>`;
  };

  const renderFileAttachment = (item, loading) => html`<div class='row-item'>
    <span class='doc-icon'>${documentIcon()}<span>${item.extension}</span></span>
    <div class='list-item-title'><span>${item.displayName}</span>${loading ? html`<span class="list-item-meta"><span>
    ${i18n.t('Uploading...')}</span></span>` : ''}</div>
  </div>`;

  const renderActionMenu = () => html`<li role="menuitem" tabindex="-1" data-value="Download">${i18n.t('Download')}</li>
  <li role="menuitem" tabindex="-1" data-value="Delete">${i18n.t('Delete')}</li>`;

  const performActionMenu = (event) => {
    let el = event.target;
    if (event.path && event.path.length > 0) {
      el = event.path[0];
    } else if (event.originalTarget) {
      el = event.originalTarget;
    }
    if (el) {
      const action = el.getAttribute('data-value');
      const key = data[id].pzInsKey || data[id].ID;
      if (action === 'Download') {
        webcomp.fetchData.call(webcomp, 'attachment', { id: key, target: downloadContent });
      } else if (action === 'Delete') {
        webcomp.sendData.call(webcomp, 'deleteattachment', { id: key, target });
        render(genAttachmentsList(undefined, [], caseID, webcomp, []), target);
      }
    }
  };

  const renderAttachedFile = (item) => html`<div class='row-item'>
    <span class='doc-icon'>${documentIcon()}<span>${item.extension}</span></span>
    <div class='list-item-title'><span>${item.pyAttachName || item.name}</span>
    <span class="list-item-meta"><span>${item.pyCategoryName || item.category}</span>
    <span>${item.pxCreateOperator || item.createdBy}</span></span></div>
    ${ButtonMenu(threedotIcon(), 'Actions', renderActionMenu, performActionMenu, 'button-action')}
  </div>`;

  const renderItemAction = (itemid, item) => {
    if (item.loading) return html`${renderItemTitle(itemid, item)}${LoadingIndicator()}`;
    if (item.editing) {
      if (item.type === 'URL') {
        return html`
      <div class='flex content-item field-item'>
        <label for='url-name'>Name</label>
        <input type='text' id='url-name' data-prop-id='name' @change="${updateUploadedFile}" data-id="${itemid}" value="${item.name}"/>
      </div>
      <div class='flex content-item field-item'>
        <label for='url-url'>URL</label>
        <input type='text' id='url-url' data-prop-id='url' @change="${updateUploadedFile}" data-id="${itemid}" value="${item.url}"/>
      </div>`;
      }
      return html`
      <input type='text' data-prop-id='displayName' class='flex-all' @change="${updateUploadedFile}" 
      data-id="${itemid}" value="${item.displayName}" aria-label='${i18n.t('name')}'/>
      ${renderAttachmentCategories(itemid, item.category)}
      <span class='flex-all'>${item.name}</span>
      <span>${Math.round(item.size / 1000)}Kb</span>
      <button type='button' data-id="${itemid}" @click="${deleteUploadedFile}" class='pzhc pzbutton Simple' 
      aria-label=${i18n.t('Delete')}>${trashIcon()}</button>`;
    }
    return html`${renderItemTitle(itemid, item)}
    <button type='button' data-id="${itemid}" @click="${deleteAttachment}" class='pzhc pzbutton Simple' 
    aria-label=${i18n.t('Delete')}>${trashIcon()}</button>`;
  };

  const renderAttachment = (filelist) => {
    if (!caseID) {
      return LoadingIndicator();
    }
    const itemList = [];
    if (typeof filelist !== 'undefined') {
      const keys = Object.entries(filelist);
      for (const i of keys) {
        let extension = i[1].extension;
        if (typeof extension === 'undefined') extension = i[1].type;
        if (!extension) extension = '';
        if (extension.length > 5) extension = extension.substring(0, 5);
        if (i[1].type === 'URL' && i[1].editing) {
          itemList.push(
            html`<div class='flex layout-content-stacked content-items-maxwidth'>
              ${renderItemAction(i[0], i[1])}
            </div>`,
          );
        } else {
          itemList.push(
            html`<div class='row-item'>
              <span class='doc-icon'>${documentIcon()}<span>${extension}</span></span>
              ${renderItemAction(i[0], i[1])}
            </div>`,
          );
        }
      }
    }
    if (itemList && itemList.length > 0) return itemList;
    return html`<div class='empty'>${i18n.t('no attachments found')}</div>`;
  };

  const renderFilesAttached = () => {
    if (typeof tmpFiles !== 'undefined' && tmpFiles.length > 0) {
      return html`
      <div id="modalcontent" class='attach-files list-items'>
        <div class='upload-content'>${renderAttachment(tmpFiles)}</div>
        <div class="action-button-area">
          <button type="button" class="pzhc pzbutton" @click="${cancelUpload}">${i18n.t('Cancel')}</button>
          <button type="button" class="Strong pzhc pzbutton" @click="${uploadFiles}">${i18n.t('Upload')}</button>
        </div>
      </div>`;
    }
    return html`
      <form id="modalcontent" @dragenter="${handleDrop}" @dragover="${handleDrop}" @dragleave="${handleDrop}"  
      @drop="${handleDrop}" class='attach-files list-items'>
        <div class="file-upload">
          <input @change="${uploadFile}" type="file" multiple="">
          ${paperclipIcon()}<span>${i18n.t(' Drag and drop files, attach ')}
          <button type='button' aria-label='${i18n.t('click to attach a file')}' class='Light' @click="${uploadFile}">
          ${i18n.t('files')}</button> ${i18n.t('or add a')} 
          <button type='button' aria-label='${i18n.t('click to add a URL link')}' class='Light' @click="${enterURL}">
          ${i18n.t('link')}</button></span>
        </div>
        ${renderAttachment(data)}
      </form>
    `;
  };

  if (!target) {
    if (data && data.length > 0 && data[0].pyAttachName) {
      id = 0;
      data[0].extension = '';
      const elms = data[0].pyAttachName.split('.');
      if (elms.length > 1) {
        data[0].extension = elms[elms.length - 1];
      }
      return renderAttachedFile(data[0]);
    }
    /* Single file attachment for a property */
    return html`<div @dragenter="${handleDrop}" @dragover="${handleDrop}" @dragleave="${handleDrop}"  
    @drop="${handleDrop}" class='attach-files list-items'>
      <div class="file-upload">
        <input @change="${uploadFile}" type="file">
        ${paperclipIcon()}<span>${i18n.t(' Drag and drop or ')}
        <button type='button' aria-labelledby='${i18n.t('click to attach a file')}' class='Light' @click="${uploadFile}">${i18n.t('choose file')}</button>
      </div>
    </div>`;
  }
  if (target && target.classList.contains('attach-files')) {
    if (tmpFiles && tmpFiles.length > 0) {
      webcomp.sendData.call(webcomp, 'uploadattachment', { actionid: tmpFiles[0], target });
      return renderFileAttachment(tmpFiles[0], true);
    } if (data && data.length > 0) {
      return renderAttachedFile(data[0]);
    }
  }
  let modalHeader = 'Attachments';
  if (typeof tmpFiles !== 'undefined' && tmpFiles.length > 0) {
    if (tmpFiles[0].type === 'URL') {
      modalHeader = 'Attach a link';
    } else {
      modalHeader = 'Attach files';
    }
  }
  return html`
    <div class="flex layout-content-inline_middle main-header">
      <h2>${i18n.t(modalHeader)}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        <button type='button' data-action-id='close'
        class="pzhc pzbutton Simple" aria-label="${i18n.t('Close modal')}">${timesIcon()}</button>
      </div>
    </div>
    ${renderFilesAttached()}
  `;
};
