# mashup-webcomponent

This project delivers a Web component that leverages the Pega DX API (https://www.pega.com/products/pega-platform/digital-customer-experiences) to expose a case from the Pega Platform through Mashup. A complete demo of the application is available at https://pegasystems.github.io/mashup-webcomponent.

The mashup web component is not a replacement of the Pega Mashup and is limited in terms of Pega UI controls that are supported. This is due to the fact some only some auto-generated controls are exposed through the DX API. 

The benefits of the Mashup component are:
   - no need for inner iframe - the case UI is completely integrated with the main document
   - no need to align your document styles with the Pega Mashup app - the Web component can run as a light DOM and gets all the styling for its core components from the top document.
   - high performance - the web component JS file is very small and has a much smaller payload than Pega Mashup - it is ideal when running on a 3G mobile network.
   
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
