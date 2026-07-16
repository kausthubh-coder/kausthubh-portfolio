import { defineConfig } from "astro/config";

export default defineConfig({
  prefetch: true,
  devToolbar: {
    enabled: false,
  },
  vite: {
    server: {
      hmr: false,
    },
  },
});
