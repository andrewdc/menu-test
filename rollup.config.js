// this file will not afect the sandbox but will
// afect the deployment and dowload

// import svelte from "rollup-plugin-svelte";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import sveltePreProcess from "svelte-preprocess";
import svelte from 'rollup-plugin-svelte-hot';
import { terser } from "rollup-plugin-terser";
import livereload from 'rollup-plugin-livereload'
import hmr from 'rollup-plugin-hot'
import rollup_start_dev from './rollup_start_dev'

const noHot = !!process.env.LIVERELOAD
const nollup = !noHot && !!process.env.NOLLUP
const dev = nollup || process.env.ROLLUP_WATCH
const production = !dev
const hot = dev && !noHot

const preprocess = sveltePreProcess({
  scss: {
    includePaths: ["src"]
  },
  postcss: {
    plugins: [require("autoprefixer")]
  }
});

export default {
  input: "src/index.ts",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: nollup ? 'bundle.js' : 'public/bundle.js',
  },
  plugins: [
    svelte({
      // enable run-time checks when not in production
      dev: !production,
      // we'll extract any component CSS out into
      // a separate file — better for performance
      ...(!hot && {
        css: css => {
          css.write('public/bundle.css')
        },
      }),
      hot: hot && {
        nollup,
        // optimistic will try to recover from runtime
        // errors during component init
        optimistic: true,
      },
    }),

    // If you have external dependencies installed from
    // npm, you'll most likely need these plugins. In
    // some cases you'll need additional configuration —
    // consult the documentation for details:
    // https://github.com/rollup/rollup-plugin-commonjs
    resolve({
      browser: true,
      dedupe: importee =>
        importee === 'svelte' || importee.startsWith('svelte/'),
    }),
    commonjs(),

    // In dev mode, call `npm run start:dev` once
    // the bundle has been generated
    !production && !nollup && rollup_start_dev,

    // Watch the `public` directory and refresh the
    // browser on changes when not in production
    !production && !hot && livereload('public'),

    // If we're building for production (npm run build
    // instead of npm run dev), minify
    production && terser(),

    hot && !nollup && hmr({ public: 'public', inMemory: true }),
  ],
  watch: {
    clearScreen: false,
  },
};
