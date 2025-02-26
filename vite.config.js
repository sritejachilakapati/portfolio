import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [sveltekit()],

  // Optimize dependencies
  optimizeDeps: {
    include: ["particles.js", "svelte-inview"],
  },

  // Build configurations
  build: {
    // Minify for production
    minify: true,
    // Generate source maps
    sourcemap: false,
    // Reduce chunk size
    chunkSizeWarningLimit: 1000,
  },

  // Development server settings
  server: {
    port: 3000,
    strictPort: false,
  },
});
