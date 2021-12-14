import { html } from 'lit';

/**
* Render a list of items from a data page
*/
export const showDataList = (data) => html`
${data.pxResults.map((item) => html`
    <option>
      ${item.pyUserName}
    </option>`)}`;
