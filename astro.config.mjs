import { defineConfig } from "astro/config";
import compres from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [compres()],
});
