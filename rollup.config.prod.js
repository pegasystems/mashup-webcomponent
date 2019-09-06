import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import minifyHTML from 'rollup-plugin-minify-html-literals';
import { eslint } from 'rollup-plugin-eslint';

export default {
  input: 'src/components/pega-mashup.js',
  output: {
    file: 'docs/cosmos-webelements.js',
    format: 'iife',
    name: 'PegaCosmosElements',
    sourcemap: false,
  },
  plugins: [
    copy({
      targets: [{ src: 'public/*', dest: 'docs/' }],
    }),
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
};
