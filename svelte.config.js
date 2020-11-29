const sveltePreprocess = require('svelte-preprocess');
const sveltePostcss = require('rollup-plugin-postcss');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

const production = !process.env.ROLLUP_WATCH;

let plugins = [
  tailwindcss(),
]
if(production) plugins.push(autoprefixer())

const preprocessOption = {
  sourceMap: true,
  defaults: {
    script: "typescript",
    style: "pcss"
  },
  postcss: {
    plugins
  }
}

const preprocess = sveltePreprocess({
  ...preprocessOption,
  sourceMap: !production
})

const postcss = sveltePostcss({
  extract: true,
  plugins,
  minimize: production ? {preset: 'default'} : false
})

module.exports = {
  preprocess,
  postcss
}