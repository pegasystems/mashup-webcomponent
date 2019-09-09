import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import { eslint } from 'rollup-plugin-eslint';

export default {
  input: 'src/components/index.js',
  output: {
    file: 'build/cosmos-webelements.js',
    format: 'iife',
    name: 'PegaCosmosElements',
    sourcemap: true,
  },
  plugins: [
    resolve(),
    eslint({
      fix: true,
    }),
    babel({
      exclude: 'node_modules/**',
      extensions: ['.js'],
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
