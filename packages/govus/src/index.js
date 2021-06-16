import { html } from 'lit-element';
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
customElements.define('pega-govuk', PegaGovUS);
