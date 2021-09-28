/* global i18n */
import { render, html } from 'lit';
import { createUID } from '../utils/form-utils';

/* This is a more complex component that renders a menu when clicking on a button
  label is the label of the button
  onDisplay is called when rendering the list of items in the menu - it must return some html template
  onClick is called when clicking on a menu item */
export const ButtonMenu = (label, ariaLabel, onDisplay, onClick, variant) => {
  if (onClick == null) return null;
  let focusMenuItem;
  const uuid = createUID();
  const node = document.createElement('ul');
  node.setAttribute('id', `menu-overlay-${uuid}`);
  node.setAttribute('role', 'menu');
  node.setAttribute('aria-labelledby', `menubutton-${uuid}`);
  node.setAttribute('tabindex', '-1');

  const unmountHanders = () => {
    document.body.removeEventListener('click', dismissModalOnClickaway);
    document.body.removeEventListener('keydown', keydownHandler);
    if (node) {
      if (node.previousElementSibling) {
        node.previousElementSibling.setAttribute('aria-expanded', 'false');
        node.previousElementSibling.focus();
      }
      node.remove();
    }
  };

  const keydownHandler = (event) => {
    if (event.keyCode === 38) {
      focusMenuItem = focusMenuItem.previousElementSibling;
      if (focusMenuItem === null) focusMenuItem = node.lastElementChild;
      focusMenuItem.focus();
    } else if (event.keyCode === 40) {
      focusMenuItem = focusMenuItem.nextElementSibling;
      if (focusMenuItem === null) focusMenuItem = node.firstElementChild;
      focusMenuItem.focus();
    } else if (event.keyCode === 27 || event.keyCode === 9) {
      unmountHanders();
    } else if (event.keyCode === 13) {
      onClick(event);
      unmountHanders();
    }
  };

  const dismissModalOnClickaway = (event) => {
    if (event) {
      let el = event.target;
      if (event.path && event.path.length > 0) {
        el = event.path[0];
      } else if (event.originalTarget) {
        el = event.originalTarget;
      }
      if (el && el.nextElementSibling === node) return;
      if (el.parentNode === node) {
        onClick(event);
      }
      unmountHanders();
    }
  };

  const buttonMenuHandler = (event) => {
    if (event.type === 'keydown') {
      if (event.keyCode !== 40) return;
    }
    event.preventDefault();
    event.stopPropagation();
    if (event.type === 'blur') {
      dismissModalOnClickaway(event);
      return;
    }
    const el = event.currentTarget;
    if (el.tagName === 'BUTTON') {
      if (el.nextElementSibling === null) {
        el.parentNode.appendChild(node);
        el.setAttribute('aria-expanded', 'true');
        render(onDisplay(), node);
        focusMenuItem = el.nextElementSibling.firstElementChild;
        focusMenuItem.focus();
        document.body.addEventListener('click', dismissModalOnClickaway);
        document.body.addEventListener('keydown', keydownHandler);
      } else {
        unmountHanders();
      }
      return;
    }
    onClick(event);
    unmountHanders();
  };

  return html`
    <div class="button-menu">
    <button type='button' id="${`menubutton-${uuid}`}" aria-haspopup="true" aria-controls="${`menu-overlay-${uuid}`}" aria-expanded="false"
    @click="${buttonMenuHandler}" @keydown="${buttonMenuHandler}" @blur="${buttonMenuHandler}"
    class="${`pzhc pzbutton Simple ${variant || 'action-menu'}`}" aria-label="${i18n.t(ariaLabel)}">${i18n.t(label)}</button>
    </div>
  `;
};
