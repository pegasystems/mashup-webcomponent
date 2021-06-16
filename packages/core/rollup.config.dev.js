import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import { eslint } from 'rollup-plugin-eslint';

export default {
  input: 'src/main/index.js',
  output: {
    file: 'build/pega-mashup-webcomponent-all.js',
    format: 'iife',
    name: 'PegaMashupWebComponent',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    eslint({
      fix: true,
    }),
    serve({
      open: true,
      openPage: '/index.html',
      verbose: true,
      contentBase: ['build', 'public'],
      port: 8083,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }),
  ],
};
