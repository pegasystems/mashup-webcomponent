import { html } from 'lit-html';

/*
  Display a modal window - call the displayModal to render the button and pass as parameter the title and
  label of the button, and the callback to call when the modal is open to render the content

  The onOpen function will receive the node DOM element of the modal content that can be used for render
*/
export const displayModal = (title, label, onOpen) => {
  const node = document.createElement('div');
  node.setAttribute('role', 'modal');
  node.setAttribute('class', 'mashup-modal');
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
            !el.classList.contains('mashup-modal') && el.closest('.mashup-modal') !== null) return;
      }
      unmountHanders();
    }
  };

  const modalClickHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const el = event.target;
    const nodeEl = el.closest('.modal-content');
    if (nodeEl !== null) {
      if (nodeEl.children.length === 1) {
        node.style.opacity = 0;
        nodeEl.appendChild(node);
        onOpen(modalnode);
        document.body.addEventListener('click', dismissModalOnClickaway);
        /* Force update so that animation can be trigger */
        // eslint-disable-next-line no-unused-vars
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
  <div class='modal-content'>
    <button type="button" @click="${modalClickHandler}" class="pzhc pzbutton Simple" title="${title}">${label}</button>
  </div>`;
};
