# mashup-webcomponent

This project delivers a Web component that leverages the DX API to display a case type from the Pega Platform through Mashup. A complete demo of the application is available at https://pegasystems.github.io/mashup-webcomponent.

![](https://github.com/pegasystems/mashup-webcomponent/workflows/Main%20workflow/badge.svg)

The mashup web component is not a replacement of the Pega Mashup and is limited in terms of supported Pega UI components due to using the DX API to generate the UI dynamic.

The benefits of the Mashup component are:

- no need for inner iframe
  -> the case type ui is completely integrated with the main document
  -> no need for recalculating the height of the inner iframe every time the content changes
- no need to align your document styles with the Pega Mashup app
  -> the Web component can run as a light DOM and gets all the styling from the core components from the top document or as a shadow DOM
- improved performance
  -> The JS file needed to render the UI is small (around 80Kb) and is 10X faster to be downloaded and parsed by the browser than the JS files required by Pega Web Mashup.

This web component is using lit library for the template and rendering of the Web component. It supports all modern browsers (Firefox, Chrome and Safari). It does not work on IE11 and Edge.

The Web component supports the following actions:

- Display the worklist - can open assignments inside the same card
- Create a case
- Open an assignment
- Open a case - will show the review harness of the case along with the list of assignmented and child cases

The docs folder contains the JS library to load to use the Web Component:

- pega-mashup-light-webcomponent.js => can be loaded if you only need to use the light DOM component (pega-mashup-light) - it is a smaller file since it does not include any CSS content
- pega-mashup-light-webcomponentv2.js => same as above but using the DX v2 API
- pega-mashup-webcomponent-all.js => can be used if you intend to use the Shadow DOM version of the web component (pega-mashup). includes all versions (v1 and v2 + light)
- pega-mashup-webcomponent-light-all.js => contains both the v1 and v2 components of the light DOM version

## For developers

To build and compile the application - use the following commands:

### Tools to install

install npm from https://nodejs.org/en/download/

### Project setup

```
npm install
```

### Compiles and hot-reloads for development.

```
For core component: npm run dev:core
For UK GDS: npm run dev:govuk
For US WDS: npm run dev:govus
For FR Government system (DSFR): npm run dev:govfr
```

### Compiles and minifies for production

```
npm run build
```

### Lint the Javascript files

```
npm run lint
```

### Run unit tests

```
npm run test
```
