import adapter from "@sveltejs/adapter-static";
import type { Config } from "@sveltejs/kit";

const config: Config = {
  kit: {
    adapter: adapter({
      precompress: true,
      assets: "public",
      pages: "public",
      strict: true
    })
  },
  compilerOptions: {
    runes: true
  }
};

export default config;
