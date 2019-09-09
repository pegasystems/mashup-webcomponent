import { html, customElement } from 'lit-element';
import PegaBase from './pega-base';
import { viewStyle } from '../styles/view-style';

@customElement('pega-mashup')
class PegaMashup extends PegaBase {
  createRenderRoot() {
    return this.attachShadow({ mode: 'open' });
  }

  getRenderRoot() {
    return this.shadowRoot;
  }

  render() {
    return html`
      ${viewStyle()}
      <div id="mashup">${this.displayContent()}</div>
    `;
  }
}
export default PegaMashup;
