import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import minifyHTML from 'rollup-plugin-html-minifier';
import eslint from '@rollup/plugin-eslint';
import { NunjucksPlugin } from './nunjunk';

export default [
  {
    input: 'src/index.js',
    output: {
      file: '../../docs/demos/uswds/pega-govus.js',
      format: 'iife',
      name: 'PegaGovUS',
      sourcemap: false,
    },
    plugins: [
      NunjucksPlugin({
        input: './template/',
        output: './public/',
        template: 'fragment',
      }),
      copy({
        targets: [
          { src: 'public/*', dest: '../../docs/demos/uswds' },
        ],
      }),
      resolve({
        browser: true,
      }),
      eslint({
        fix: true,
      }),
      minifyHTML(),
      terser(),
    ],
  },
];
