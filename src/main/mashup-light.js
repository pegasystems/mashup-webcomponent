import { html, customElement } from 'lit-element';
import PegaBase from '../interpreter/v1/base';

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
