import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import minifyHTML from 'rollup-plugin-html-minifier';
import { eslint } from 'rollup-plugin-eslint';

export default [
  {
    input: 'src/index.js',
    output: {
      file: '../../docs/demos/ukgds/pega-govuk.js',
      format: 'iife',
      name: 'PegaGovUK',
      sourcemap: false,
    },
    plugins: [
      copy({
        targets: [
          { src: 'public/*', dest: '../../docs/demos/ukgds' },
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
