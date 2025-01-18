import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import { NunjucksPlugin } from './nunjunk';

export default {
  input: 'src/index.js',
  output: {
    file: 'build/pega-govfr.js',
    format: 'iife',
    name: 'PegaGovFR',
    sourcemap: true,
  },
  plugins: [
    NunjucksPlugin({
      input: './template/',
      output: './public/',
      template: 'fragment',
    }),
    resolve(),
    serve({
      open: true,
      openPage: '/main.html',
      verbose: true,
      contentBase: ['build', 'public'],
      port: 8083,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }),
  ],
};
