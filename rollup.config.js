import babel from '@rollup/plugin-babel';
import path from 'path';
import pkg from './package.json';
// import { terser } from 'rollup-plugin-terser';
import alias from '@rollup/plugin-alias';

const env = process.env.BROWSERSLIST_ENV || 'defaults';
const extraPath = env === 'defaults' ? '' : '.evergreen';
const dirname = path.dirname(pkg.main);
const basename = path.basename(pkg.main, '.js');
const filename = path.join(dirname, `${basename}${extraPath}`);
const externals = getDependencies().concat(['@material']);

export default {
  input: 'packages/vue-material-adapter/index.js',
  output: [
    {
      file: `${filename}.esm.js`,
      format: 'esm',
      sourcemap: true,
    },
    {
      file: `${filename}.cjs.js`,
      format: 'cjs',
      name: 'vue-material-adapter',
      exports: 'named',
      interop: false,
      sourcemap: true,
    },
    {
      file: `${filename}.umd.js`,
      format: 'umd',
      name: 'vue-material-adapter',
      exports: 'named',
      interop: false,
      sourcemap: true,
    },
  ],
  external(id) {
    const containsThisModule = pkg => id === pkg || id.startsWith(pkg + '/');
    const isProvidedByDependency = externals.some(containsThisModule);

    return isProvidedByDependency;
  },
  plugins: [
    alias({
      entries: [{ find: '~', replacement: 'packages' }],
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            useBuiltIns: 'entry',
            corejs: 3,
          },
        ],
      ],
    }),
    // terser(),
  ],
};

// ===
// Private functions
// ===

// Determines node_modules packages that are safe to assume will exist.
function getDependencies() {
  // Both deps and peerDeps are assumed as accessible.
  return Array.from(
    new Set([
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ]),
  );
}
