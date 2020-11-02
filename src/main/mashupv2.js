import { html, customElement } from 'lit-element';
import PegaBase from '../interpreter/v2/base';
import { viewStyle } from '../styles/view-style';

@customElement('pega-mashup-v2')
class PegaMashupv2 extends PegaBase {
  createRenderRoot() {
    return this.attachShadow({ mode: 'open' });
  }

  getRenderRoot() {
    return this.shadowRoot;
  }

  render() {
    return html`
      ${viewStyle()} ${this.displayContent()}
    `;
  }
}
export default PegaMashupv2;
