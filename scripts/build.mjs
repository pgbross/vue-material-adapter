import rimraf from 'rimraf';
import { promisify } from 'util';
import fs from 'fs';
import codeFrame from 'babel-code-frame';
import chalk from 'chalk';
import { rollup } from 'rollup';
import alias from '@rollup/plugin-alias';
import pkg from '../package.json';
import mkdirp from 'mkdirp';
import path from 'path';
import cpy from 'cpy';
import { terser } from 'rollup-plugin-terser';

const asyncRimraf = promisify(rimraf);

// Errors in promises should be fatal.
const loggedErrors = new Set();
process.on('unhandledRejection', err => {
  if (loggedErrors.has(err)) {
    // No need to print it twice.
    process.exit(1);
  }
  throw err;
});

const externals = getDependencies().concat(['@material']);

async function createBundle(bundleType, { minimize } = {}) {
  const filename = 'vue-material-adapter';
  const format = getFormat(bundleType);
  const peerGlobals = [];

  const logKey =
    chalk.white.bold(filename) + chalk.dim(` (${bundleType.toLowerCase()})`);

  const rollupConfig = {
    input: 'packages/vue-material-adapter/index.js',

    external(id) {
      const containsThisModule = pkg => id === pkg || id.startsWith(pkg + '/');
      const isProvidedByDependency = externals.some(containsThisModule);

      return isProvidedByDependency;
    },
    plugins: getPlugins(bundleType, minimize),
  };

  const [mainOutputPath, ...otherOutputPaths] = getBundleOutputPaths(
    bundleType,
    filename,
    minimize,
  );

  const rollupOutputOptions = getRollupOutputOptions(
    mainOutputPath,
    format,
    peerGlobals,
    'vue-material-adapter',
  );

  console.log(`${chalk.bgYellow.black(' BUILDING ')} ${logKey}`);
  try {
    const result = await rollup(rollupConfig);
    await result.write(rollupOutputOptions);
  } catch (error) {
    console.log(`${chalk.bgRed.black(' OH NOES! ')} ${logKey}\n`);
    handleRollupError(error);
    throw error;
  }
  for (let i = 0; i < otherOutputPaths.length; i++) {
    await asyncCopyTo(mainOutputPath, otherOutputPaths[i]);
  }
  console.log(`${chalk.bgGreen.black(' COMPLETE ')} ${logKey}\n`);
}

async function buildEverything() {
  await asyncRimraf('dist/*');

  await createBundle('esm');
  await createBundle('cjs', { minimize: true });
  await createBundle('amd', { minimize: true });
}

buildEverything();

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

function handleRollupError(error) {
  loggedErrors.add(error);
  if (!error.code) {
    console.error(error);
    return;
  }
  console.error(
    `\x1b[31m-- ${error.code}${error.plugin ? ` (${error.plugin})` : ''} --`,
  );
  console.error(error.message);
  const { file, line, column } = error.loc;
  if (file) {
    // This looks like an error from Rollup, e.g. missing export.
    // We'll use the accurate line numbers provided by Rollup but
    // use Babel code frame because it looks nicer.
    const rawLines = fs.readFileSync(file, 'utf-8');
    // column + 1 is required due to rollup counting column start position from 0
    // whereas babel-code-frame counts from 1
    const frame = codeFrame(rawLines, line, column + 1, {
      highlightCode: true,
    });
    console.error(frame);
  } else {
    // This looks like an error from a plugin (e.g. Babel).
    // In this case we'll resort to displaying the provided code frame
    // because we can't be sure the reported location is accurate.
    console.error(error.codeFrame);
  }
}

function getRollupOutputOptions(outputPath, format, globals, globalName) {
  return Object.assign(
    {},
    {
      file: outputPath,
      format,
      globals,
      interop: false,
      sourcemap: false,
      name: globalName,
      exports: 'named',
    },
  );
}

function getBundleOutputPaths(bundleType, filename, minimize) {
  return [`dist/${filename}.${bundleType}${minimize ? '.min' : ''}.js`];
}

function getPlugins(bundleType, minimize) {
  const plugins = [
    alias({
      entries: [{ find: '~', replacement: 'packages' }],
    }),
  ];

  if (minimize) {
    plugins.push(terser());
  }

  return plugins;
}

async function asyncCopyTo(from, to) {
  await mkdirp(path.dirname(to));
  await cpy(from, to);
}

function getFormat(bundleType) {
  return bundleType;
}
