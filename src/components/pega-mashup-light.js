import { html, customElement } from 'lit-element';
import PegaBase from './pega-base';

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
      <div id="mashup">${this.displayContent()}</div>
    `;
  }
}
export default PegaMashupLight;
