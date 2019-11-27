import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { eslint } from 'rollup-plugin-eslint';

export default [
  {
    input: 'src/components/index.js',
    output: {
      file: 'docs/pega-mashup-webcomponent.js',
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
      babel({
        exclude: 'node_modules/**',
        extensions: ['.js'],
      }),
      terser(),
    ],
  },
  {
    input: 'src/components/pega-mashup-light.js',
    output: {
      file: 'docs/pega-mashup-light-webcomponent.js',
      format: 'iife',
      name: 'PegaMashupListWebComponent',
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
      babel({
        exclude: 'node_modules/**',
        extensions: ['.js'],
      }),
      terser(),
    ],
  },
];
