/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import dotenv from 'dotenv';

dotenv.config({ path: resolve(__dirname, '.env') });

function antDesignIconsFix() {
  return {
    name: '@ant-design-icons-fix',
    transform(code, id) {
      if (id.includes('@ant-design/icons/lib/dist.js'))
        return code.replace(', dist as default', '');
      return code;
    },
  };
}


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      include: [
        "buffer",
      ],
    })
  ],
  root: resolve(__dirname, 'src/client'),
  define: {
    global: {}
  },
  build: {
    outDir: resolve(__dirname, 'src', 'server', 'public'),
    emptyOutDir: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
    rollupOptions: {
      plugins: [antDesignIconsFix()],
    },
  },
  server: {
    proxy: {
      '/api': {
        target: `http://localhost:${process.env.PORT}`,
        changeOrigin: true,
      },
      [process.env.VITE_REPORT_API_URL]: {
        target: `http://localhost:${process.env.PORT}`,
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /^~.+/,
        replacement: (val) => {
          return val.replace(/^~/, "");
        },
      },
    ],
  },
})
