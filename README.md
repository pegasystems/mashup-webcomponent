# mashup-webcomponent

This project delivers a Web compoennt that leverages the DX API to expose a case type from the Pega Platform through Mashup. A complete demo of the application is available at https://pegasystems.github.io/mashup-webcomponent.

The mashup web component is not a replacement of the Pega Mashup and is limited in terms of Pega UI component that are supported due to using the DX API to generate the UI dynamic. The benefits of the Mashup component are:
   - no need for inner iframe - the case type ui is completely integrated with the main document
   - no need to align your document styles with the Pega Mashup app - the Web component can run as a light DOM and gets all the styling from the core components from the top document.
   
This web component is using lit-element and lit-html for the template and rendering of the Web component.

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
npm run serve
```

### Compiles and minifies for production
```
npm run build
```
