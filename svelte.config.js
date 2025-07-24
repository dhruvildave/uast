import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      precompress: true,
      assets: "public",
      pages: "public",
      strict: true
    })
  },
  compilerOptions: {
    runes: true,
    experimental: {
      async: true
    }
  }
};

export default config;
