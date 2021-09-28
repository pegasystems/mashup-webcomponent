import { html } from 'lit';
import PegaBase from './base';

export class PegaGovUS extends PegaBase {
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
customElements.define('pega-govus', PegaGovUS);
