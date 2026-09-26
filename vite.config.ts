import adapter from "@sveltejs/adapter-static";
import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
  plugins: [
    sveltekit({
      compilerOptions: {
        runes: true,
        experimental: {
          async: true
        }
      },
      adapter: adapter({
        precompress: true,
        assets: "public",
        pages: "public",
        strict: true
      })
    })
  ],
  build: {
    minify: true
  }
};

export default config;
