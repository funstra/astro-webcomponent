import { defineConfig } from "astro/config";
import { chunkSplitPlugin } from "vite-plugin-chunk-split";
import compres from "astro-compress";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      chunkSplitPlugin({
        strategy: "unbundle",
      }),
    ],
  },
  integrations: [compres()],
});
