/* eslint-disable no-unused-vars */
 
/* global defaultCfg */
function resetState() {
  const redirectURL = `${window.location.href.substring(0, window.location.href.lastIndexOf('/'))}/index.html`;
  localStorage.clear();
  window.history.replaceState(
    {},
    '',
    redirectURL,
  );
}
function resetSettings() {
  resetState();
  window.location.reload();
}
function toggleSettings() {
  document.querySelector('.settings').classList.toggle('hide');
}
const mainEl = document.getElementsByClassName('main')[0];
function createMashup() {
  delete window.i18n;
  const action = document.getElementById('action').value;
  const apiVersion = document.getElementById('apiversion').value;
  let mytag;
  if (document.getElementById('switch-shadowDOM').checked === false) {
    if (apiVersion === '2') {
      mytag = document.createElement('pega-mashup-light-v2');
    } else {
      mytag = document.createElement('pega-mashup-light');
    }
  } else if (apiVersion === '2') {
    mytag = document.createElement('pega-mashup-v2');
  } else {
    mytag = document.createElement('pega-mashup');
  }
  if (document.getElementById('show-attachments').checked === true) {
    mytag.setAttribute('bShowAttachments', 'true');
  }
  if (document.getElementById('hide-create').checked === true) {
    mytag.setAttribute('bShowCreate', 'false');
  }
  if (document.getElementById('hide-cancel').checked === true) {
    mytag.setAttribute('bShowCancel', 'false');
  }
  if (document.getElementById('hide-save').checked === true) {
    mytag.setAttribute('bShowSave', 'false');
  }
  if (document.getElementById('hide-actions').checked === true) {
    mytag.setAttribute('bShowActions', 'false');
  }
  mytag.setAttribute('url', document.getElementById('url').value);

  if (apiVersion === '2') {
    mytag.setAttribute('portalName', document.getElementById('portalName').value);
  }

  mytag.setAttribute('action', action);
  if (action === 'createNewWork' || document.getElementById('create-all-casetypes').checked === false) {
    mytag.setAttribute('casetype', document.getElementById('casetype').value);
  }
  if (action === 'openAssignment' || action === 'openWorkByHandle') {
    mytag.setAttribute('caseid', document.getElementById('caseid').value);
  }
  if (action === 'dataView') {
    mytag.setAttribute('dataviewParams', document.getElementById('dataviewparams').value);
  }
  mytag.setAttribute('headingLabel', document.getElementById('title').value);
  /* Instead of doing setAttribute and rendering the authentication credentials inside the DOM
     we pass the values directly to the components */
  const authenticationType = document.getElementById('authentication').value;
  mytag.authentication = authenticationType;
  if (authenticationType === 'basic') {
    mytag.username = document.getElementById('username').value;
    mytag.password = document.getElementById('password').value;
  } else if (authenticationType === 'jwttoken') {
    mytag.jwttoken = document.getElementById('jwttoken').value;
  } else if (authenticationType === 'oauth2password') {
    mytag.username = document.getElementById('username').value;
    mytag.password = document.getElementById('password').value;
    mytag.clientid = document.getElementById('clientid').value;
    mytag.clientsecret = document.getElementById('clientsecret').value;
  } else if (authenticationType === 'custombearer') {
    mytag.username = document.getElementById('username').value;
    mytag.clientid = document.getElementById('clientid').value;
  } else if (authenticationType === 'authorizationcode') {
    mytag.clientid = document.getElementById('clientid').value;
  } else {
    mytag.clientid = document.getElementById('clientid').value;
    mytag.clientsecret = document.getElementById('clientsecret').value;
  }

  /* pass the language tokens directly to the component */
  if (apiVersion === '2' && document.getElementById('language').value === 'French') {
    mytag.langTokens = window.langFR;
  }

  if (mainEl.childNodes.length > 0) {
    mainEl.removeChild(mainEl.childNodes[0]);
  }
  /* Uncomment to pass some initial values when creating a case */
  /*
  var initContent = { Type: "Oiiuiul fired", Age: "Less than 5 years", ExpectedEndDate: "Timing is flexible", IsAuthorizedMakeChanges: true, IsInterestedInFinancing: false, Description: "tttttt",
  ProjectType: "Replace existing central heating system", ProjectStatus: "Ready to Hire", LocationType: "Home/Residence" };
  var initContent1 = { FirstName: 'test', Description: { value: 'tttttt', disabled: true }, ProjectStatus: 'Planning and Budgeting',
  Type: 'Propane gas fired', IsBoolean: true, Sex: { value: 'Male', disabled: true } };
  mytag.initialContent = initContent;
  */

  mainEl.appendChild(mytag);
  mytag.addEventListener('message', (event) => {
    console.log('event was sent by the web component', event.detail);
    if (event.detail === 'cancel') {
      mainEl.removeChild(mainEl.childNodes[0]);
    }
  });

  const mainconfig = {
    url: document.getElementById('url').value,
    portalName: document.getElementById('portalName').value,
    language: document.getElementById('language').value,
    casetype: document.getElementById('casetype').value,
    caseid: document.getElementById('caseid').value,
    action: document.getElementById('action').value,
    showAttachments: document.getElementById('show-attachments').checked,
    apiversion: document.getElementById('apiversion').value,
    authentication: document.getElementById('authentication').value,
    jwttoken: document.getElementById('jwttoken').value,
    clientid: document.getElementById('clientid').value,
    clientsecret: document.getElementById('clientsecret').value,
    username: document.getElementById('username').value,
    password: document.getElementById('password').value,
    googleapikey: document.getElementById('googleapikey').value,
    useshadowdom: document.getElementById('switch-shadowDOM').checked,
    dataviewparams: document.getElementById('dataviewparams').value,
    title: document.getElementById('title').value,
  };
  localStorage.setItem('defaultcfg', JSON.stringify(mainconfig));
}
function showFields(event) {
  let action = document.getElementById('action').value;
  if (event) action = event.target.value;
  const hideCreate = document.getElementById('hide-create').parentElement;
  const createAllCasetypes = document.getElementById('create-all-casetypes').parentElement;
  const hideCancel = document.getElementById('hide-cancel').parentElement;
  const hideSave = document.getElementById('hide-save').parentElement;
  const caseType = document.getElementById('casetype').parentElement;
  const caseID = document.getElementById('caseid').parentElement;
  const dataviewParams = document.getElementById('dataviewparams').parentElement;
  const title = document.getElementById('title').parentElement;
  if (action === 'workList' || action === 'taskList') {
    hideCreate.style.display = '';
    createAllCasetypes.style.display = '';
    hideCancel.style.display = 'none';
    hideSave.style.display = 'none';
    caseType.style.display = 'none';
    caseID.style.display = 'none';
    dataviewParams.style.display = 'none';
    title.style.display = '';
  } else if (action === 'createNewWork') {
    hideCreate.style.display = 'none';
    createAllCasetypes.style.display = 'none';
    hideCancel.style.display = '';
    hideSave.style.display = '';
    caseType.style.display = '';
    caseID.style.display = 'none';
    dataviewParams.style.display = 'none';
    title.style.display = 'none';
  } else if (action === 'dataView') {
    hideCreate.style.display = 'none';
    createAllCasetypes.style.display = 'none';
    hideCancel.style.display = 'none';
    hideSave.style.display = 'none';
    caseType.style.display = 'none';
    caseID.style.display = 'none';
    dataviewParams.style.display = '';
    title.style.display = '';
  } else {
    hideCreate.style.display = 'none';
    createAllCasetypes.style.display = 'none';
    hideCancel.style.display = '';
    hideSave.style.display = '';
    caseType.style.display = 'none';
    caseID.style.display = '';
    dataviewParams.style.display = 'none';
    title.style.display = 'none';
  }
}
function showCaseType(event) {
  let createAllCaseTypes = document.getElementById('create-all-casetypes').checked;
  if (event) createAllCaseTypes = event.target.checked;
  const casetype = document.getElementById('casetype').parentElement;
  if (createAllCaseTypes === true) {
    casetype.style.display = 'none';
  } else {
    casetype.style.display = '';
  }
}
function selectDXAPIVersion(event) {
  let apiVersion = document.getElementById('apiversion').value;
  if (event) apiVersion = event.target.value;
  const portalName = document.getElementById('portalName').parentElement;
  const language = document.getElementById('language').parentElement;
  const googleapikey = document.getElementById('googleapikey').parentElement;
  if (apiVersion === '2') {
    portalName.style.display = '';
    language.style.display = '';
    googleapikey.style.display = '';
  } else {
    portalName.style.display = 'none';
    language.style.display = 'none';
    googleapikey.style.display = 'none';
  }
}
function showAuthentication(event) {
  let action = document.getElementById('authentication').value;
  if (event) action = event.target.value;
  const username = document.getElementById('username').parentElement;
  const password = document.getElementById('password').parentElement;
  const jwttoken = document.getElementById('jwttoken').parentElement;
  const clientid = document.getElementById('clientid').parentElement;
  const clientsecret = document.getElementById('clientsecret').parentElement;
  if (action === 'basic') {
    username.style.display = '';
    password.style.display = '';
    jwttoken.style.display = 'none';
    clientid.style.display = 'none';
    clientsecret.style.display = 'none';
  } else if (action === 'jwttoken') {
    username.style.display = 'none';
    password.style.display = 'none';
    jwttoken.style.display = '';
    clientid.style.display = 'none';
    clientsecret.style.display = 'none';
  } else if (action === 'oauth2password') {
    username.style.display = '';
    password.style.display = '';
    jwttoken.style.display = 'none';
    clientid.style.display = '';
    clientsecret.style.display = '';
  } else if (action === 'custombearer') {
    username.style.display = '';
    password.style.display = 'none';
    jwttoken.style.display = 'none';
    clientid.style.display = '';
    clientsecret.style.display = 'none';
  } else if (action === 'authorizationcode') {
    username.style.display = 'none';
    password.style.display = 'none';
    jwttoken.style.display = 'none';
    clientid.style.display = '';
    clientsecret.style.display = 'none';
  } else {
    username.style.display = 'none';
    password.style.display = 'none';
    jwttoken.style.display = 'none';
    clientid.style.display = '';
    clientsecret.style.display = '';
  }
}
const defaultSettings = localStorage.getItem('defaultcfg');
if (defaultSettings != null) {
  window.defaultCfg = JSON.parse(defaultSettings);
}
document.getElementById('url').value = defaultCfg.url;
document.getElementById('portalName').value = defaultCfg.portalName;
document.getElementById('language').value = defaultCfg.language;
document.getElementById('casetype').value = defaultCfg.casetype;
document.getElementById('caseid').value = defaultCfg.caseid;
document.getElementById('dataviewparams').value = defaultCfg.dataviewparams;
document.getElementById('title').value = defaultCfg.title;
document.getElementById('action').value = defaultCfg.action;
document.getElementById('show-attachments').checked = defaultCfg.showAttachments;
document.getElementById('apiversion').value = defaultCfg.apiversion;
document.getElementById('authentication').value = defaultCfg.authentication;
document.getElementById('jwttoken').value = defaultCfg.jwttoken;
document.getElementById('clientid').value = defaultCfg.clientid;
document.getElementById('clientsecret').value = defaultCfg.clientsecret;
document.getElementById('username').value = defaultCfg.username;
document.getElementById('password').value = defaultCfg.password;
document.getElementById('googleapikey').value = defaultCfg.googleapikey;
document.getElementById('switch-shadowDOM').checked = defaultCfg.useshadowdom;

selectDXAPIVersion();
showFields();
showAuthentication();
createMashup();
if (document.getElementById('googleapikey').value && document.getElementById('googleapikey').value !== '') {
  const googlescript = document.createElement('script');
  googlescript.setAttribute('src', `https://maps.googleapis.com/maps/api/js?key=${document.getElementById('googleapikey').value}&libraries=places`);
  document.head.appendChild(googlescript);
}
