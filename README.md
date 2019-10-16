# mashup-webcomponent

This project delivers a Web component that leverages the DX API to display a case type from the Pega Platform through Mashup. A complete demo of the application is available at https://pegasystems.github.io/mashup-webcomponent.

The mashup web component is not a replacement of the Pega Mashup and is limited in terms of supported Pega UI components due to using the DX API to generate the UI dynamic. 

The benefits of the Mashup component are:
- no need for inner iframe 
  -> the case type ui is completely integrated with the main document
  -> no need for recalculating the height of the inner iframe every time the content changes
- no need to align your document styles with the Pega Mashup app 
  -> the Web component can run as a light DOM and gets all the styling from the core components from the top document or as a shadow DOM
- improved performance
   -> The JS file needed to render the UI is very small (less than 30Kb) and is 10X faster to be downloaded and parsed by the browser than the Pega Mashup 

This web component is using lit-element and lit-html for the template and rendering of the Web component.

This web component supports all modern browsers (Firefox, Chrome and Safari). It does not work on IE11 and Edge.

## For developers

To build and compile the application - use the following commands:

### Tools to install

install npm from https://nodejs.org/en/download/

### Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### Lint the Javascript files

```
npm run lint
```