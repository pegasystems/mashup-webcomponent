import { html } from 'lit-html';

/*
  Display a modal window - call the displayModal to render the button and pass as parameter the title and
  label of the button, and the callback to call when the modal is open to render the content

  The onOpen function will receive the node DOM element of the modal content that can be used for render
*/
export const displayModal = (title, label, format, onOpen, onCancel) => {
  const node = document.createElement('div');
  node.setAttribute('role', 'alertdialog');
  node.setAttribute('aria-modal', 'true');
  node.setAttribute('aria-labelledby', title);
  node.setAttribute('aria-describedby', '');
  node.setAttribute('class', 'mashup-modal');
  const modalnode = document.createElement('div');
  node.appendChild(modalnode);
  const focusableElements =
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const unmountHanders = () => {
    document.body.removeEventListener('click', dismissModalOnClickaway);
    document.body.removeEventListener('keydown', modalKeyHandler);
    if (node) {
      if (node.previousElementSibling) {
        node.previousElementSibling.removeAttribute('aria-hidden');
        node.previousElementSibling.focus();
      }
      node.remove();
    }
    if (onCancel) {
      onCancel();
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

  const modalKeyHandler = (event) => {
    if (event.key === 'Escape') {
      dismissModalOnClickaway(event);
      return;
    }
    const isTabPressed = event.key === 'Tab' || event.keyCode === 9;
    if (!isTabPressed) {
      return;
    }
    const focusableContent = node.querySelectorAll(focusableElements);
    const lastFocusableElement = focusableContent[focusableContent.length - 1];
    const firstFocusableElement = focusableContent[0];

    if (event.shiftKey) {
      if (document.activeElement === firstFocusableElement) {
        lastFocusableElement.focus();
        event.preventDefault();
      }
    } else if (document.activeElement === lastFocusableElement) {
      firstFocusableElement.focus();
      event.preventDefault();
    }
  };

  const modalClickHandler = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const el = event.target;
    const nodeEl = el.closest('.modalcontent');
    if (nodeEl !== null) {
      if (nodeEl.children.length === 1) {
        nodeEl.firstElementChild.setAttribute('aria-hidden', 'true');
        node.style.opacity = 0;
        nodeEl.appendChild(node);
        onOpen(modalnode);
        const firstFocusableElement = node.querySelectorAll(focusableElements)[0];
        firstFocusableElement.focus();
        document.body.addEventListener('click', dismissModalOnClickaway);
        document.body.addEventListener('keydown', modalKeyHandler);
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
  <div class='modalcontent'>
    <button type="button" @click="${modalClickHandler}" class="pzhc pzbutton ${format}" title="${title}">${label}</button>
  </div>`;
};
