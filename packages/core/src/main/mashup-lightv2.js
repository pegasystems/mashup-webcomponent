import { html } from 'lit-element';
import PegaBase from '../interpreter/v2/base';

export class PegaMashupLightv2 extends PegaBase {
  createRenderRoot() {
    return this;
  }

  getRenderRoot() {
    return this;
  }

  render() {
    return html`
      ${this.displayContent()}
    `;
  }
}

customElements.define('pega-mashup-light-v2', PegaMashupLightv2);
