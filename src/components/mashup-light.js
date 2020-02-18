import { html, customElement } from 'lit-element';
import PegaBase from './base';

@customElement('pega-mashup-light')
class PegaMashupLight extends PegaBase {
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
export default PegaMashupLight;
