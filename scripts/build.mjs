import chalk from 'chalk';
import cpy from 'cpy';
import mkdirp from 'mkdirp';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import { promisify } from 'node:util';
import rimraf from 'rimraf';
import { rollup } from 'rollup';
import esbuild from 'rollup-plugin-esbuild';
import VuePlugin from 'rollup-plugin-vue';
import package_ from '../package.json' assert { type: 'json' };

const asyncRimraf = promisify(rimraf);

// Errors in promises should be fatal.
const loggedErrors = new Set();
process.on('unhandledRejection', error => {
  if (loggedErrors.has(error)) {
    // No need to print it twice.
    process.exit(1);
  }
  throw error;
});

const externals = [...getDependencies(), '@material', '@vue', 'vue-router'];

async function createBundle(bundleType, { minimize } = {}) {
  const filename = 'vue-material-adapter';
  const format = getFormat(bundleType);
  const peerGlobals = [];

  const logKey =
    chalk.white.bold(filename) + chalk.dim(` (${bundleType.toLowerCase()})`);

  const rollupConfig = {
    input: 'src/index.js',

    external(id) {
      const containsThisModule = package__ =>
        id === package__ || id.startsWith(package__ + '/');
      const isProvidedByDependency = externals.some(external =>
        containsThisModule(external),
      );

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
  for (const otherOutputPath of otherOutputPaths) {
    await asyncCopyTo(mainOutputPath, otherOutputPath);
  }
  console.log(`${chalk.bgGreen.black(' COMPLETE ')} ${logKey}\n`);
}

async function buildEverything() {
  await asyncRimraf('dist/*');

  await createBundle('cjs', { minimize: true });
  await createBundle('amd', { minimize: true });

  await createBundle('esm');
}

buildEverything();

// ===
// Private functions
// ===

// Determines node_modules packages that are safe to assume will exist.
function getDependencies() {
  // Both deps and peerDeps are assumed as accessible.
  return [
    ...new Set([
      ...Object.keys(package_.dependencies || {}),
      ...Object.keys(package_.peerDependencies || {}),
    ]),
  ];
}

function handleRollupError(error) {
  loggedErrors.add(error);
  if (!error.code) {
    console.error(error);
    return;
  }
  console.error(
    `\u001B[31m-- ${error.code}${error.plugin ? ` (${error.plugin})` : ''} --`,
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
    // const frame = codeFrame(rawLines, line, column + 1, {
    //   highlightCode: true,
    // });
    // console.error(frame);
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
      // dir: 'dist',
      format,
      globals,
      interop: 'auto',
      sourcemap: false,
      name: globalName,
      exports: 'named',
      // preserveModules: true,
    },
  );
}

function getBundleOutputPaths(bundleType, filename, minimize) {
  return [`dist/${filename}.${bundleType}${minimize ? '.min' : ''}.js`];
}

function getPlugins(bundleType, minimize) {
  const plugins = [
    VuePlugin({ css: false }),
    esbuild({ minify: minimize, target: 'es2019' }),
  ];

  return plugins;
}

async function asyncCopyTo(from, to) {
  await mkdirp(path.dirname(to));
  await cpy(from, to);
}

function getFormat(bundleType) {
  return bundleType;
}
