/* global i18n */
/* eslint-disable max-len */
import { LitElement, html } from 'lit';

const IconCommon = (val) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20px" height="20px" fill="currentColor">${val}</svg>`;

const boldIcon = () => IconCommon('<path d="M10.187 17H5.773c-.637 0-1.092-.138-1.364-.415-.273-.277-.409-.718-.409-1.323V4.738c0-.617.14-1.062.419-1.332.279-.27.73-.406 1.354-.406h4.68c.69 0 1.288.041 1.793.124.506.083.96.242 1.36.478.341.197.644.447.906.75a3.262 3.262 0 0 1 .808 2.162c0 1.401-.722 2.426-2.167 3.075C15.05 10.175 16 11.315 16 13.01a3.756 3.756 0 0 1-2.296 3.504 6.1 6.1 0 0 1-1.517.377c-.571.073-1.238.11-2 .11zm-.217-6.217H7v4.087h3.069c1.977 0 2.965-.69 2.965-2.072 0-.707-.256-1.22-.768-1.537-.512-.319-1.277-.478-2.296-.478zM7 5.13v3.619h2.606c.729 0 1.292-.067 1.69-.2a1.6 1.6 0 0 0 .91-.765c.165-.267.247-.566.247-.897 0-.707-.26-1.176-.778-1.409-.519-.232-1.31-.348-2.375-.348H7z"></path>');

const italicIcon = () => IconCommon('<path d="m9.586 14.633.021.004c-.036.335.095.655.393.962.082.083.173.15.274.201h1.474a.6.6 0 1 1 0 1.2H5.304a.6.6 0 0 1 0-1.2h1.15c.474-.07.809-.182 1.005-.334.157-.122.291-.32.404-.597l2.416-9.55a1.053 1.053 0 0 0-.281-.823 1.12 1.12 0 0 0-.442-.296H8.15a.6.6 0 0 1 0-1.2h6.443a.6.6 0 1 1 0 1.2h-1.195c-.376.056-.65.155-.823.296-.215.175-.423.439-.623.79l-2.366 9.347z"></path>');

const underlineIcon = () => IconCommon('<path d="M3 18v-1.5h14V18zm2.2-8V3.6c0-.4.4-.6.8-.6.3 0 .7.2.7.6v6.2c0 2 1.3 2.8 3.2 2.8 1.9 0 3.4-.9 3.4-2.9V3.6c0-.3.4-.5.8-.5.3 0 .7.2.7.5V10c0 2.7-2.2 4-4.9 4-2.6 0-4.7-1.2-4.7-4z"></path>');

const alignLeftIcon = () => IconCommon('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 4c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.929a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75z"></path>');

const alignRightIcon = () => IconCommon('<path d="M18 3.75a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 8a.75.75 0 0 1-.75.75H2.75a.75.75 0 1 1 0-1.5h14.5a.75.75 0 0 1 .75.75zm0 4a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75zm0-8a.75.75 0 0 1-.75.75H7.321a.75.75 0 1 1 0-1.5h9.929a.75.75 0 0 1 .75.75z"></path>');

const alignMiddleIcon = () => IconCommon('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm0 8c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm2.286 4c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75zm0-8c0 .414.336.75.75.75h9.928a.75.75 0 1 0 0-1.5H5.036a.75.75 0 0 0-.75.75z"></path>');

const numberListIcon = () => IconCommon('<path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM3.5 3v5H2V3.7H1v-1h2.5V3zM.343 17.857l2.59-3.257H2.92a.6.6 0 1 0-1.04 0H.302a2 2 0 1 1 3.995 0h-.001c-.048.405-.16.734-.333.988-.175.254-.59.692-1.244 1.312H4.3v1h-4l.043-.043zM7 14.75a.75.75 0 0 1 .75-.75h9.5a.75.75 0 1 1 0 1.5h-9.5a.75.75 0 0 1-.75-.75z"></path>');

const bulletListIcon = () => IconCommon('<path d="M7 5.75c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0C1 4.784 1.777 4 2.75 4c.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75C1.784 7.5 1 6.723 1 5.75zm6 9c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zm-6 0c0-.966.777-1.75 1.75-1.75.966 0 1.75.777 1.75 1.75 0 .966-.777 1.75-1.75 1.75-.966 0-1.75-.777-1.75-1.75z"></path>');

const increaseIndentIcon = () => IconCommon('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zM1.632 6.95 5.02 9.358a.4.4 0 0 1-.013.661l-3.39 2.207A.4.4 0 0 1 1 11.892V7.275a.4.4 0 0 1 .632-.326z"></path>');

const decreaseIndentIcon = () => IconCommon('<path d="M2 3.75c0 .414.336.75.75.75h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 0 0-.75.75zm5 6c0 .414.336.75.75.75h9.5a.75.75 0 1 0 0-1.5h-9.5a.75.75 0 0 0-.75.75zM2.75 16.5h14.5a.75.75 0 1 0 0-1.5H2.75a.75.75 0 1 0 0 1.5zm1.618-9.55L.98 9.358a.4.4 0 0 0 .013.661l3.39 2.207A.4.4 0 0 0 5 11.892V7.275a.4.4 0 0 0-.632-.326z"></path>');

const blockquoteIcon = () => IconCommon('<path d="M3 10.423a6.5 6.5 0 0 1 6.056-6.408l.038.67C6.448 5.423 5.354 7.663 5.22 10H9c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574zm8 0a6.5 6.5 0 0 1 6.056-6.408l.038.67c-2.646.739-3.74 2.979-3.873 5.315H17c.552 0 .5.432.5.986v4.511c0 .554-.448.503-1 .503h-5c-.552 0-.5-.449-.5-1.003v-4.574z"></path>');

const undoIcon = () => IconCommon('<path d="m5.042 9.367 2.189 1.837a.75.75 0 0 1-.965 1.149l-3.788-3.18a.747.747 0 0 1-.21-.284.75.75 0 0 1 .17-.945L6.23 4.762a.75.75 0 1 1 .964 1.15L4.863 7.866h8.917A.75.75 0 0 1 14 7.9a4 4 0 1 1-1.477 7.718l.344-1.489a2.5 2.5 0 1 0 1.094-4.73l.008-.032H5.042z"></path>');

const redoIcon = () => IconCommon('<path d="m14.958 9.367-2.189 1.837a.75.75 0 0 0 .965 1.149l3.788-3.18a.747.747 0 0 0 .21-.284.75.75 0 0 0-.17-.945L13.77 4.762a.75.75 0 1 0-.964 1.15l2.331 1.955H6.22A.75.75 0 0 0 6 7.9a4 4 0 1 0 1.477 7.718l-.344-1.489A2.5 2.5 0 1 1 6.039 9.4l-.008-.032h8.927z"></path>');

const linkIcon = () => IconCommon('<path d="m11.077 15 .991-1.416a.75.75 0 1 1 1.229.86l-1.148 1.64a.748.748 0 0 1-.217.206 5.251 5.251 0 0 1-8.503-5.955.741.741 0 0 1 .12-.274l1.147-1.639a.75.75 0 1 1 1.228.86L4.933 10.7l.006.003a3.75 3.75 0 0 0 6.132 4.294l.006.004zm5.494-5.335a.748.748 0 0 1-.12.274l-1.147 1.639a.75.75 0 1 1-1.228-.86l.86-1.23a3.75 3.75 0 0 0-6.144-4.301l-.86 1.229a.75.75 0 0 1-1.229-.86l1.148-1.64a.748.748 0 0 1 .217-.206 5.251 5.251 0 0 1 8.503 5.955zm-4.563-2.532a.75.75 0 0 1 .184 1.045l-3.155 4.505a.75.75 0 1 1-1.229-.86l3.155-4.506a.75.75 0 0 1 1.045-.184z"></path>');

const imageIcon = () => IconCommon('<path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"></path>');

export class RichTextEditor extends LitElement {
  static get properties() {
    return {
      content: {},
      root: {},
    };
  }

  createRenderRoot() {
    return this;
  }

  constructor(value, reference, id) {
    super();
    this.content = value;
    this.root = '';
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.content, 'text/html');
    document.execCommand('defaultParagraphSeparator', false, 'br');
    const node = document.createElement('div');
    const root = doc.querySelector('body');
    node.setAttribute('contenteditable', 'true');
    node.setAttribute('data-ref', reference);
    node.setAttribute('id', id);
    node.innerHTML = root.innerHTML;
    this.root = node;
  }

  render() {
    return html`<div class='rich-text-main'>
      <div class="editor-actions">
        <div class="toolbar">
          ${this.renderToolbar((command, val) => { document.execCommand(command, false, val); })}
        </div>
      </div>
      <div class="editor">${this.root}</div>
    </div>`;
  }

  async firstUpdated() {
    document.addEventListener('selectionchange', () => {
      this.requestUpdate();
    });
  }

  // eslint-disable-next-line class-methods-use-this
  renderToolbar(command) {
    const selection = document.getSelection
      ? document.getSelection()
      : null;
    const tags = [];
    if (selection && selection.type === 'Range') {
      let parentNode = selection.baseNode;
      if (parentNode) {
        while (parentNode != null) {
          const parentTagName = (parentNode && parentNode.tagName) ? parentNode.tagName.toLowerCase().trim() : undefined;
          if (parentTagName) tags.push(parentTagName);
          parentNode = parentNode.parentNode;
        }
      }
    }

    const commands = [
      {
        icon: 'Clear',
        title: 'Remove all styling',
        command: 'removeFormat',
      },
      {
        title: 'Change format',
        command: 'formatblock',
        values: [
          { name: 'Normal Text', value: '--' },
          { name: 'Heading 1', value: 'h1' },
          { name: 'Heading 2', value: 'h2' },
          { name: 'Heading 3', value: 'h3' },
          { name: 'Heading 4', value: 'h4' },
          { name: 'Heading 5', value: 'h5' },
          { name: 'Heading 6', value: 'h6' },
          { name: 'Paragraph', value: 'p' },
          { name: 'Pre-Formatted', value: 'pre' },
        ],
      },
      {
        title: 'Change font size',
        command: 'fontsize',
        values: [
          { name: 'Font Size', value: '--' },
          { name: 'Very Small', value: '1' },
          { name: 'Small', value: '2' },
          { name: 'Normal', value: '3' },
          { name: 'Medium Large', value: '4' },
          { name: 'Large', value: '5' },
          { name: 'Very Large', value: '6' },
          { name: 'Maximum', value: '7' },
        ],
      },
      {
        icon: () => boldIcon(),
        title: 'Bold',
        command: 'bold',
        active: tags.includes('b'),
      },
      {
        icon: () => italicIcon(),
        title: 'Italic',
        command: 'italic',
        active: tags.includes('i'),
      },
      {
        icon: () => underlineIcon(),
        title: 'Underline',
        command: 'underline',
        active: tags.includes('u'),
      },
      {
        icon: () => alignLeftIcon(),
        title: 'Align left',
        command: 'justifyleft',
      },
      {
        icon: () => alignMiddleIcon(),
        title: 'Align middle',
        command: 'justifycenter',
      },
      {
        icon: () => alignRightIcon(),
        title: 'Align right',
        command: 'justifyright',
      },
      {
        icon: () => numberListIcon(),
        title: 'Numbered list',
        command: 'insertorderedlist',
        active: tags.includes('ol'),
      },
      {
        icon: () => bulletListIcon(),
        title: 'Bullet list',
        command: 'insertunorderedlist',
        active: tags.includes('ul'),
      },
      {
        icon: () => blockquoteIcon(),
        command: 'formatblock',
        title: 'Format block quote',
        command_value: 'blockquote',
      },
      {
        icon: () => decreaseIndentIcon(),
        title: 'decrease indent',
        command: 'outdent',
      },
      {
        icon: () => increaseIndentIcon(),
        title: 'Increase indent',
        command: 'indent',
      },
      {
        icon: () => undoIcon(),
        title: 'Undo',
        command: 'undo',
      },
      {
        icon: () => redoIcon(),
        title: 'Redo',
        command: 'redo',
      },
      {
        icon: () => linkIcon(),
        title: 'Add link',
        active: tags.includes('a'),
        deactivate: 'unlink',
        command: () => {
          const newLink = prompt('Enter the URL', '');
          if (newLink && newLink !== '') {
            command('createlink', newLink);
          }
        },
      },
      {
        icon: () => imageIcon(),
        title: 'Add image',
        active: tags.includes('img'),
        command: () => {
          const newLink = prompt('Enter the image URL', '');
          if (newLink && newLink !== '') {
            command('insertImage', newLink);
          }
        },
      },
    ];

    return html`
      ${commands.map((n) => html`
          ${n.values ? html` <select aria-label="${i18n.t(n.title)}" tabindex=-1
        @change=${(e) => {
    e.preventDefault();
    const val = e.target.value;
    if (val === '--') {
      command('removeFormat', undefined);
    } else if (typeof n.command === 'string') {
      command(n.command, val);
    }
  }}>
    ${n.values.map(
    (v) => html` <option value=${v.value}>${v.name}</option>`,
  )}
              </select>`
    : html` <button aria-label="${i18n.t(n.title)}" title="${i18n.t(n.title)}" tabindex=-1
                class="${n.active ? 'active' : 'inactive'}"
                @click=${(e) => {
    e.preventDefault();
    if (n.active && n.deactivate) {
      if (typeof n.deactivate === 'string') {
        command(n.deactivate, n.command_value);
      } else {
        n.deactivate();
      }
    } else if (typeof n.command === 'string') {
      command(n.command, n.command_value);
    } else {
      n.command();
    }
  }}>${typeof n.icon === 'function' ? document.createRange().createContextualFragment(`${n.icon()}`) : n.icon}</button>`}
        `)}
    `;
  }
}
customElements.define('rich-text-editor', RichTextEditor);
