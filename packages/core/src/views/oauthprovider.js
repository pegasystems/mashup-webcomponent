/* global i18n */
import { html } from 'lit-html';
import { genOAuthURL } from '../utils/form-utils';

const ShowOAuthProvider = (url, clientid) => {
  const { urlparam, verifier } = genOAuthURL();
  const clickurl = `${url}/PRRestService/oauth2/v1/authorize?` +
        `client_id=${clientid}&redirect_uri=${encodeURIComponent(window.location.origin)}/auth.html&${urlparam}&state=${verifier}`;
  const button1 = html`<Button class="pzhc pzbutton" onclick="window.location='${clickurl}'; return false;">${i18n.t('Pega with full page redirect')}</Button>`;
  const button = html`<Button class="pzhc pzbutton" onclick="n=window.open('${clickurl}', 'foo', 'width=600,height=600');n.focus(); return false;">
  ${i18n.t('Pega with popup')}</Button>`;
  return html`<div class='flex flex-col'><h2>${i18n.t('Log in to the application with one of the following:')}</h2>
  <div class='flex layout-content-inline_middle'>${button}${button1}</div></div>`;
};

export { ShowOAuthProvider };
