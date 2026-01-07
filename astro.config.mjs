// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://winayagency.com',
  compressHTML: true, // Esto sí lo mantenemos porque es seguro y ayuda al rendimiento

  vite: {
    plugins: [tailwindcss()], 
    build: {
      cssMinify: 'lightningcss',
      // He eliminado "manualChunks" porque estaba causando el conflicto.
      // Vite se encargará de optimizar los chunks automáticamente.
    },
  },

  integrations: [sitemap()] 
});