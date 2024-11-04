import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors

  kit: {
    adapter: adapter({
      precompress: true,
      assets: "public",
      pages: "public",
      strict: true
    })
  }
};

export default config;
