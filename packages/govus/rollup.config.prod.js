import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import minifyHTML from 'rollup-plugin-html-minifier';
import { eslint } from 'rollup-plugin-eslint';

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
