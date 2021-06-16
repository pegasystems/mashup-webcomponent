import { html } from 'lit-element';
import PegaBase from '../interpreter/v1/base';
import { viewStyle } from '../styles/view-style';

export class PegaMashup extends PegaBase {
  createRenderRoot() {
    return this.attachShadow({ mode: 'open' });
  }

  getRenderRoot() {
    return this.shadowRoot;
  }

  render() {
    return html`
      ${viewStyle()} ${this.displayContent()}
    `;
  }
}
customElements.define('pega-mashup', PegaMashup);
