import { html } from 'lit';
import PegaBase from './v2/base';

export class PegaGovFRv2 extends PegaBase {
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
customElements.define('pega-govfr-v2', PegaGovFRv2);
