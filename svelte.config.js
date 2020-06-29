import sveltePreprocess from 'svelte-preprocess';

module.exports = {
  preprocess: sveltePreprocess({
    postcss: true,
  }),
  // ...other svelte options
};
