import { html } from 'lit';
import PegaBase from '../interpreter/v2/base';
import { viewStyle } from '../styles/view-style';

export class PegaMashupv2 extends PegaBase {
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

customElements.define('pega-mashup-v2', PegaMashupv2);
