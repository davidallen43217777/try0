


////////////////////////////////////////////////////////////////////////////////

// npx webpack
// npx webpack --env config=vendor
// npx webpack --env config=app
// npx webpack --env config=app --mode development
// npx webpack --env config=app --watch

////////////////////////////////////////////////////////////////////////////////

const path                 = require('path');
const HtmlWebPackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { VueLoaderPlugin }  = require('vue-loader');

const babel_loader = {
  test: /\.(ts|tsx)$/,
  //exclude: /node_modules/,
  exclude: file => (
    /node_modules/.test(file) &&
    !/\.vue\.js/.test(file)
  ),
  use: [
    {
      loader: 'babel-loader',
    },
  ],
};

const vue_loader = {
  test: /\.vue$/i,
  exclude: /(node_modules)/,
  use: {
    loader: 'vue-loader',
  },
};

const sass_loader = {
  test: /\.s(a|c)ss$/,
  use: [
    {
      loader: 'vue-style-loader',
    },
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
          esModule: false,
      },
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'sass-loader',
    },
  ],
};

function config(env={}, argv) {
  return config[env.config || 'default'](env, argv);
}

config.vendor = (env={}, argv) => [
  {
    target: 'web',
    mode: 'development',
    entry: [
      `./src/vendor.js`,
    ],
    output: {
      path:     `${process.cwd()}/dist`,
      filename: `bundle.vendor.js`,
      library: 'lib',
      //libraryTarget: 'commonjs',
    },
  },
  {
    target: 'web',
    mode: 'production',
    entry: [
      `./src/vendor.js`,
    ],
    output: {
      path:     `${process.cwd()}/dist`,
      filename: `bundle.vendor.min.js`,
      library: 'lib',
      //libraryTarget: 'commonjs',
    },
  },
];

config.app = (env={}, argv) => ({
  ...config.default(env, argv),
  externals: {
    'vue': 'lib["vue"]',
  },
});

config.default = (env={}, argv) => ({
  mode: 'development',
  entry: [
    `./src/index.ts`,
  ],
  resolve: {
    extensions: ['.js', '.ts', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      babel_loader, vue_loader, sass_loader,
    ],
  },
  output: {
    path:     `${process.cwd()}/dist`,
    filename: `bundle${argv.mode === 'development' ? '' : '.min'}.js`,
    //filename: `bundle.js`,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `bundle${argv.mode === 'development' ? '' : '.min'}.css` // '[name].css',
      // chunkFilename: '[id].css',
    }),
    new HtmlWebPackPlugin({
      template: `./src/index.html`,
      filename: `./index.html`,
    }),
    new VueLoaderPlugin(),
  ],
});

module.exports = config;
