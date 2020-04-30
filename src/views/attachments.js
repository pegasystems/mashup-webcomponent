/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import { render, html } from 'lit-html';
import { LoadingIndicator } from './fields';
import {
  paperclipIcon, penIcon, trashIcon, timesIcon, documentIcon, checkIcon,
} from './icons';

export const AttachmentButton = (onDisplay) => {
  const node = document.createElement('div');
  node.setAttribute('role', 'modal');
  node.setAttribute('class', 'modal');
  const modalnode = document.createElement('div');
  node.appendChild(modalnode);

  const unmountHanders = () => {
    document.body.removeEventListener('click', dismissModalOnClickaway);
    if (node) {
      if (node.previousElementSibling) {
        node.previousElementSibling.focus();
      }
      node.remove();
    }
  };

  const dismissModalOnClickaway = (event) => {
    if (event) {
      let el = event.target;
      if (el.download) return;
      if (event.path && event.path.length > 0) {
        el = event.path[0];
      } else if (event.originalTarget) {
        el = event.originalTarget;
      }
      if (el) {
        const closeBtn = el.closest('button');
        if ((closeBtn === null || closeBtn.getAttribute('data-action-id') !== 'close') &&
            !el.classList.contains('modal') && el.closest('.attach-content') !== null) return;
      }
      unmountHanders();
    }
  };

  const attachmentButtonHandler = (event) => {
    event.preventDefault();
    const el = event.target;
    const nodeEl = el.closest('.attach-content');
    if (nodeEl !== null) {
      if (nodeEl.children.length === 1) {
        node.style.opacity = 0;
        nodeEl.appendChild(node);
        render(genAttachmentsList(node, []), modalnode);
        onDisplay(modalnode);
        document.body.addEventListener('click', dismissModalOnClickaway);
        /* Force update so that animation can be trigger */
        const tmpval = node.offsetHeight;
        node.style = '';
      } else {
        unmountHanders();
      }
      return;
    }
    unmountHanders();
  };

  return html`
    <div class='attach-content'>
    <button type="button" @click="${attachmentButtonHandler}" class="pzhc pzbutton Simple" title="Attachments">${paperclipIcon()}</button>
    </div>
  `;
};

export const genAttachmentsList = (target, data, caseID, webcomp, fetchdata, senddata, tmpFiles) => {
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
    if (data[id].category === 'URL') {
      window.open(filedata);
      return;
    }
    const filename = data[id].fileName;
    const sampleArr = base64ToArrayBuffer(filedata);
    const blob = new Blob([sampleArr], { type: 'octet/stream' });
    const elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = filename;
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
  };

  const downloadAttachment = (event) => {
    event.stopPropagation();
    const el = event.target;
    id = el.getAttribute('data-id');
    fetchdata.call(webcomp, 'attachment', { id: data[id].ID, target: downloadContent });
  };

  const deleteAttachment = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const el = event.target.closest('button');
    id = el.getAttribute('data-id');
    senddata.call(webcomp, 'deleteattachment', { id: data[id].ID, target });
  };

  const deleteUploadedFile = (event) => {
    event.stopPropagation();
    const el = event.target.closest('button');
    id = parseInt(el.getAttribute('data-id'), 10);
    tmpFiles.splice(id, 1);
    render(genAttachmentsList(target, data, caseID, webcomp, fetchdata, senddata, tmpFiles), target);
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
      renderFilesToBeUploaded(el, files);
    }
  };

  const uploadFiles = (event) => {
    event.stopPropagation();
    event.preventDefault();
    for (let i = 0; i < tmpFiles.length; i++) {
      const file = tmpFiles[i];
      delete file.editing;
      if (file.type === 'URL') {
        data.unshift(file);
        senddata.call(webcomp, 'attachments', { id: caseID, actionid: [file], target });
      } else {
        file.uploading = true;
        data.unshift({ name: file.displayName, extension: file.extension, loading: true });
        senddata.call(webcomp, 'uploadattachment', { actionid: file, target });
      }
    }
    render(genAttachmentsList(target, data, caseID, webcomp, fetchdata, senddata), target);
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
    render(genAttachmentsList(target, data, caseID, webcomp, fetchdata, senddata, newfiles), target);
  };

  const uploadFile = (event) => {
    event.stopPropagation();
    let el = event.target;
    if (el.tagName === 'A') {
      el = event.target.parentNode.parentNode.firstElementChild;
      el.click();
      return;
    }
    renderFilesToBeUploaded(el, el.files);
  };

  const enterURL = (event) => {
    event.stopPropagation();
    const newfiles = [{
      type: 'URL', category: 'URL', name: '', url: '', editing: true,
    }];
    render(genAttachmentsList(target, data, caseID, webcomp, fetchdata, senddata, newfiles), target);
  };

  const cancelUpload = (event) => {
    event.stopPropagation();
    render(genAttachmentsList(target, data, caseID, webcomp, fetchdata, senddata), target);
  };

  const renderAttachmentCategories = (itemid, value) => html`
    <select data-id="${itemid}" @change="${updateUploadedFile}" class='flex-all' aria-label='category'>
    ${webcomp.attachmentcategories.map(item => html`
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
      <a data-id="${itemid}" @click="${downloadAttachment}">${item.name}</a>
      ${item.loading ? '' : html`
      <span class='list-item-meta'><span>${item.createdBy}</span><span>${createTime}</span><span>category: ${item.category}</span></span>`}
    </div>`;
  };

  const renderItemAction = (itemid, item) => {
    if (item.loading) return html`${renderItemTitle(itemid, item)}${LoadingIndicator()}`;
    if (item.editing) {
      if (item.type === 'URL') {
        return html`
      <div class='flex content-item field-item'>
        <label for='url-name'>Name</label>
        <input id='url-name' data-prop-id='name' @change="${updateUploadedFile}" data-id="${itemid}" value="${item.name}" aria-label='name'/>
      </div>
      <div class='flex content-item field-item'>
        <label for='url-url'>URL</label>
        <input id='url-url' data-prop-id='url' @change="${updateUploadedFile}" data-id="${itemid}" value="${item.url}" aria-label='URL'/>
      </div>`;
      }
      return html`
      <input data-prop-id='displayName' class='flex-all' @change="${updateUploadedFile}" data-id="${itemid}" value="${item.displayName}" aria-label='name'/>
      ${renderAttachmentCategories(itemid, item.category)}
      <span class='flex-all'>${item.name}</span>
      <span>${Math.round(item.size / 1000)}Kb</span>
      <button data-id="${itemid}" @click="${deleteUploadedFile}" class='pzhc pzbutton Simple' title='Delete'>${trashIcon()}</button>`;
    }
    return html`${renderItemTitle(itemid, item)}
    <button data-id="${itemid}" @click="${deleteAttachment}" class='pzhc pzbutton Simple' title='Delete'>${trashIcon()}</button>`;
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
        if (i[1].type === 'URL') extension = 'URL';
        if (i[1].type === 'URL' && i[1].editing) {
          itemList.push(
            html`<div class='flex layout-content-stacked content-items-maxwidth'>
              ${renderItemAction(i[0], i[1])}
            </div>`,
          );
        } else {
          itemList.push(
            html`<div class='row-item'>
              <span class='doc-icon'>${documentIcon()}<span>${extension.substring(0, 4)}</span></span>
              ${renderItemAction(i[0], i[1])}
            </div>`,
          );
        }
      }
    }
    if (itemList && itemList.length > 0) return itemList;
    return html`<div class='empty'>no attachments found</div>`;
  };

  const renderFilesAttached = () => {
    if (typeof tmpFiles !== 'undefined' && tmpFiles.length > 0) {
      return html`
      <div class='attach-files list-items'>
        <div class='upload-content'>${renderAttachment(tmpFiles)}</div>
        <div class="action-button-area">
          <button type="button" class="pzhc pzbutton" @click="${cancelUpload}">Cancel</button>
          <button type="button" class="Strong pzhc pzbutton" @click="${uploadFiles}">Upload</button>
        </div>
      </div>`;
    }
    return html`
      <form @dragenter="${handleDrop}" @dragover="${handleDrop}" @dragleave="${handleDrop}"  @drop="${handleDrop}" class='attach-files list-items'>
        <div class="file-upload">
          <input @change="${uploadFile}" type="file" multiple="">
          ${paperclipIcon()}
          <span>Drag and drop files, attach <a @click="${uploadFile}">files</a> or add a <a @click="${enterURL}">link</a></span>
        </div>
        ${renderAttachment(data)}
      </form>
    `;
  };

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
      <h2>${modalHeader}</h2>
      <div class="flex layout-content-inline_middle margin-l-auto">
        <button type='button' data-action-id='close'
        class="pzhc pzbutton Simple" title="Close">${timesIcon()}</button>
      </div>
    </div>
    ${renderFilesAttached()}
  `;
};
