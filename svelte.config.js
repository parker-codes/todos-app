import sveltePreprocess from 'svelte-preprocess';

module.exports = {
  preprocess: sveltePreprocess({
    typescript: true,
  }),
  // ...other svelte options
};
