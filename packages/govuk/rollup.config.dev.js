import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';

export default {
  input: 'src/index.js',
  output: {
    file: 'build/pega-govuk.js',
    format: 'iife',
    name: 'PegaGovUK',
    sourcemap: true,
  },
  plugins: [
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
