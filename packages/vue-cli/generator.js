const fs = require('fs');

const filenameTailwind = 'tailwind.config.js';

function loadModule(src, filename) {
  var Module = module.constructor;
  var m = new Module();
  m._compile(src, filename);
  return m.exports;
}

function readPostcssConfig(api) {
  const filename = 'postcss.config.js';
  const file = api.generator.files[filename];

  if (file) {
    const filePath = api.resolve(filename);
    fs.writeFileSync(filePath, '');
    return loadModule(file, filename);
  }

  const config = api.generator.originalPkg.postcss;
  if (config) {
    const copy = { ...config };
    delete config.plugins;
    return copy;
  }

  return {};
}

function generateConfig(api, option) {
  const args = ['init'];
  const { spawnSync } = require('child_process');
  const tailwind = api.resolve('./node_modules/.bin/tailwind');
  if (!fs.existsSync(tailwind)) throw new Error(`${tailwind} not found`);
  spawnSync(tailwind, args, {
    cwd: api.generator.context,
    shell: process.platform === 'win32',
  });
}

function injectPurgeConfig(api) {
  const configPath = api.resolve(filenameTailwind);
  const tailwindConfig = fs.readFileSync(configPath, 'utf-8');
  fs.writeFileSync(
    configPath,
    tailwindConfig.replace(
      'purge: []',
      "purge: {\n\
        content: ['./public/**/*.html', './src/**/*.vue', './node_modules/@rockband/**/*.vue']\n\
      }",
    ),
  );
}

function injectTailwindPlugins(api) {
  const configPath = api.resolve(filenameTailwind);
  const tailwindConfig = fs.readFileSync(configPath, 'utf-8');
  fs.writeFileSync(
    configPath,
    tailwindConfig.replace(
      'plugins: []',
      "plugins: [\n\
        require('@tailwindcss/typography'),\n\
        require('@tailwindcss/forms'),\n\
      ]",
    ),
  );
}

function importRockBand(api) {
  const initRockBand = `\nimport RockBand from '@rockband/vue';\n\nimport '@rockband/vue/dist/tnt.css';\nimport '@rockband/vue/src/assets/index.css';\n\nVue.use(RockBand);`;
  // inject to main.js
  const ext = api.hasPlugin('typescript') ? 'ts' : 'js';
  const mainPath = api.resolve(`./src/main.${ext}`);
  // get content
  let contentMain = fs.readFileSync(mainPath, { encoding: 'utf-8' });
  const lines = contentMain.split(/\r?\n/g).reverse();
  // inject import
  const lastImportIndex = lines.findIndex(line => line.match(/^import/));
  lines[lastImportIndex] += initRockBand;
  // modify app
  contentMain = lines.reverse().join('\n');
  fs.writeFileSync(api.entryFile, contentMain, { encoding: 'utf-8' });
}

module.exports = (api, options) => {
  const postcss = readPostcssConfig(api);
  const configs = {
    dependencies: {
      '@rockband/vue': '^0.2.0'
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  };

  configs.postcss.plugins = { ...configs.postcss.plugins, ...postcss.plugins };

  api.extendPackage(configs);

  api.onCreateComplete(() => {
    importRockBand(api);
    generateConfig(api, options.initConfig);
    injectPurgeConfig(api);
    injectTailwindPlugins(api);
  });
};
