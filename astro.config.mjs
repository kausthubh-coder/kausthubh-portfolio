import { defineConfig } from "astro/config";

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  vite: {
    server: {
      hmr: false,
    },
  },
});
