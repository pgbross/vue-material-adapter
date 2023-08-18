import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';

import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const resolve = relativePath => path.resolve(__dirname, relativePath);

// https://vitejs.dev/config/
export default defineConfig({
  root: './demo/',
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown(),
  ],
  resolve: {
    alias: {
      'vue-material-adapter': resolve('./src/index.js'),
    },
  },
});
