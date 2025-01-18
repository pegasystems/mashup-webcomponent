import resolve from 'rollup-plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';

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
      terser(),
    ],
  },
];
