/* global i18n */
import { html } from 'lit';
import { until } from 'lit/directives/until';
import { genOAuthURL } from '../utils/form-utils';

export const GetRedirectURL = () => `${window.location.href.substring(0, window.location.href.lastIndexOf('/'))}/auth.html`;

export const ShowOAuthProvider = (url, clientid) => html`<div class='flex flex-col'><h2>${i18n.t('Log in to the application with one of the following:')}</h2>
  <div class='flex layout-content-inline_middle'>${until(
    genOAuthURL().then((res) => {
      const { verifier, challenge } = res;
      const urlparam = `response_type=code&scope=openid&code_challenge=${challenge}` +
  '&code_challenge_method=S256&response_mode=query&authentication_service=pega';
      const clickurl = `${url}/PRRestService/oauth2/v1/authorize?` +
        `client_id=${clientid}&redirect_uri=${encodeURIComponent(GetRedirectURL())}&${urlparam}&state=${verifier}`;
      const button1 = html`<Button class="pzhc pzbutton" onclick="window.location='${clickurl}'; return false;">
      ${i18n.t('Pega with full page redirect')}</Button>`;
      const button = html`<Button class="pzhc pzbutton" onclick="n=window.open('${clickurl}', 'foo',
      'width=600,height=600');n.focus(); return false;">${i18n.t('Pega with popup')}</Button>`;
      return html`${button}${button1}`;
    }),
    html`Loading...`,
  )}</div></div>`;
