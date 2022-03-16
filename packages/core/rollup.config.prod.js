import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import minifyHTML from 'rollup-plugin-html-minifier';
import eslint from '@rollup/plugin-eslint';

export default [
  {
    input: 'src/main/index.js',
    output: {
      file: '../../docs/pega-mashup-webcomponent-all.js',
      format: 'iife',
      name: 'PegaMashupWebComponent',
      sourcemap: false,
    },
    plugins: [
      copy({
        targets: [
          { src: 'public/*', dest: '../../docs' },
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
  {
    input: 'src/main/mashup-light-all.js',
    output: {
      file: '../../docs/pega-mashup-webcomponent-light-all.js',
      format: 'iife',
      name: 'PegaMashupWebComponent',
      sourcemap: false,
    },
    plugins: [
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
  {
    input: 'src/main/mashup-light.js',
    output: {
      file: '../../docs/pega-mashup-light-webcomponent.js',
      format: 'iife',
      name: 'PegaMashupLightWebComponent',
      sourcemap: false,
    },
    plugins: [
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
  {
    input: 'src/main/mashup-lightv2.js',
    output: {
      file: '../../docs/pega-mashup-light-webcomponentv2.js',
      format: 'iife',
      name: 'PegaMashupLightWebComponentv2',
      sourcemap: false,
    },
    plugins: [
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
