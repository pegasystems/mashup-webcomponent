import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import { eslint } from 'rollup-plugin-eslint';

export default {
  input: 'src/index.js',
  output: {
    file: 'build/pega-govus.js',
    format: 'iife',
    name: 'PegaGovUS',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    eslint({
      fix: true,
    }),
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
