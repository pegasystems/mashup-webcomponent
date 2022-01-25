import { html } from 'lit';
import PegaBase from './v1/base';

export class PegaGovFR extends PegaBase {
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
customElements.define('pega-govfr', PegaGovFR);
