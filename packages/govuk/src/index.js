import { html } from 'lit-element';
import PegaBase from './base';

export class PegaGovUK extends PegaBase {
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
customElements.define('pega-govuk', PegaGovUK);
