import { render, html } from 'lit-html';

/* This is a more complex component that renders a menu when clicking on a button
  label is the label of the button
  onDisplay is called when rendering the list of items in the menu - it must return some html template
  onClick is called when clicking on a menu item */
const ButtonMenu = (label, onDisplay, onClick) => {
  if (onClick == null) return null;

  const node = document.createElement('ul');

  const dismissModalOnClickaway = (event) => {
    if (event) {
      if (event.target && event.target.nextElementSibling === node) return;
      if (event.path && event.path[0].nextElementSibling === node) return;
      if (node) {
        document.body.removeEventListener('click', dismissModalOnClickaway, true);
        node.remove();
      }
    }
  };

  const buttonMenuHandler = (event) => {
    event.preventDefault();
    if (event.type === 'blur') {
      dismissModalOnClickaway();
      return;
    }
    const el = event.target;
    if (el.tagName === 'BUTTON') {
      if (el.nextElementSibling === null) {
        event.target.parentNode.appendChild(node);
        render(onDisplay(), node);
        document.body.addEventListener('click', dismissModalOnClickaway, true);
      } else {
        el.nextElementSibling.remove();
        document.body.removeEventListener('click', dismissModalOnClickaway, true);
      }
      return;
    }
    node.remove();
    onClick(el);
  };

  return html`
    <div class="button-menu" @click="${buttonMenuHandler}"><button @blur="${buttonMenuHandler}" class="pzhc pzbutton Simple action-menu">${label}</button></div>
  `;
};

export { ButtonMenu };
