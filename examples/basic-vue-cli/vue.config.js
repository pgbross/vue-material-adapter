import path from 'node:path';
import url from 'node:url';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, 'node_modules')],
        },
      },
    },
  },
};
