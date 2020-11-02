import { html, customElement } from 'lit-element';
import PegaBase from '../interpreter/v2/base';

@customElement('pega-mashup-light-v2')
class PegaMashupLightv2 extends PegaBase {
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
export default PegaMashupLightv2;
