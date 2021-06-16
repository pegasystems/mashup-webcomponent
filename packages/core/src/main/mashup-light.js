import { html } from 'lit-element';
import PegaBase from '../interpreter/v1/base';

export class PegaMashupLight extends PegaBase {
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
customElements.define('pega-mashup-light', PegaMashupLight);
