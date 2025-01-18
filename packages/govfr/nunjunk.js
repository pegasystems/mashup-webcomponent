 
 
 
Object.defineProperty(exports, '__esModule', { value: true });

const nunjucks = require('nunjucks');
const path = require('path');
const fs = require('fs');

function _interopDefaultLegacy(e) { return e && typeof e === 'object' && 'default' in e ? e : { default: e }; }
const nunjucks__default = /* #__PURE__ */_interopDefaultLegacy(nunjucks);

const error = (message) => {
  throw new Error(`NunjucksPlugin: ${message}`);
};

const Logger = {
  error,
};

const PLUGIN_NAME = 'nunjucks-plugin';

const actualPath = (path$1) => (path.isAbsolute(path$1) ? path$1 : path.resolve(path$1));

export function NunjucksPlugin({
  input,
  output,
  template,
} = {}) {
  if (!input) Logger.error('no input directory specified');
  if (!output) Logger.error('no input directory specified');
  if (!template) Logger.error('no template directory specified');

  return {
    name: PLUGIN_NAME,

    async writeBundle() {
      fs.readdir(input, (err, files) => {
        files.forEach((file) => {
          const actualPathIn = actualPath(`${input}/${file}`);
          const templateContent = fs.readFileSync(actualPathIn, 'utf-8');
          nunjucks__default.default.configure(`${__dirname}/${template}/`);
          const rendered = nunjucks__default.default.renderString(templateContent);
          const actualPathOut = actualPath(`${output}/${file}`);
          fs.writeFileSync(actualPathOut, rendered);
        });
      });
    },
  };
}
