import { html, customElement, property } from 'lit-element';
import PegaBase from './pega-base';
import { worklist } from '../views/pega-worklist';
import { viewStyle } from '../styles/view-style';

@customElement('pega-mashup')
class PegaMashup extends PegaBase {
  @property({ type: String }) url = '';

  @property({ type: String }) caseID = '';

  @property({ type: String }) username = '';

  @property({ type: String }) password = '';

  @property({ type: String }) action = '';

  @property({ type: String }) casetype = '';

  @property({ type: Array }) cases = [];

  createRenderRoot() {
    if (this.getAttribute('useshadowdom') !== 'false') {
      return this.attachShadow({ mode: 'open' });
    }
    return this;
  }

  getRenderRoot() {
    if (this.getAttribute('useshadowdom') !== 'false') {
      return this.shadowRoot;
    }
    return this;
  }

  displayContent() {
    if (this.caseID !== '') {
      return html`
        <h2>Assignment - ${this.caseID}</h2>
        <div id="case-data"></div>
      `;
    }
    if (this.action === 'workList') {
      return worklist(this.cases, this.reloadElement);
    }
    if (this.action === 'createNewWork') {
      return html`
        <h2>New Work - ${this.casetype}</h2>
        <div id="case-data"></div>
      `;
    }
    return null;
  }

  render() {
    return html`
      ${this.getAttribute('useshadowdom') !== 'false' ? viewStyle() : ''}
      <div id="mashup">${this.displayContent()}</div>
    `;
  }

  actionAreaCancel = () => {
    this.cases = [];
    this.caseID = '';
    this.fetchData('worklist');
  };

  actionAreaSave = () => {
    this.sendData('savecase', this.caseID);
  };

  actionAreaSubmit = () => {
    this.sendData('submitcase', this.data.ID, this.data.actions[0].ID);
  };

  createAreaCancel = () => {
    this.parentNode.removeChild(this);
  };

  createAreaCreate = () => {
    this.sendData('newwork', this.casetype);
  };

  reloadElement = () => {
    this.cases = [];
    this.caseID = '';
    this.fetchData('worklist');
  };

  firstUpdated() {
    const mashupWidget = this.getRenderRoot().querySelector('#mashup');
    if (mashupWidget) {
      mashupWidget.addEventListener('click', (event) => {
        const el = event.target;
        if (el && el.tagName === 'A') {
          const type = el.getAttribute('data-type');
          if (type === 'assignment') {
            this.fetchData('assignment', el.innerText);
          }
        }
      });
      mashupWidget.addEventListener('change', (event) => {
        const el = event.target;
        const ref = el.getAttribute('ref');
        if (typeof this.content === 'undefined') {
          this.content = {};
        }
        if (ref !== null && ref !== 'pyID') {
          this.content[ref] = el.value;
        }
      });
    }
    if (this.action === 'workList') {
      this.fetchData('worklist');
    } else if (this.action === 'createNewWork') {
      this.fetchData('newwork', this.casetype);
    }
  }
}
export default PegaMashup;
