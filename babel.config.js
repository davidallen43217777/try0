


////////////////////////////////////////////////////////////////////////////////

const path                 = require('path');
const HtmlWebPackPlugin    = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const babel_loader = {
  test: /\.(ts|tsx)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
        plugins: ['@babel/plugin-transform-runtime'],
      },
    },
  ],
};

const sass_loader = {
  test: /\.s(a|c)ss$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: `/more/more/dist`,
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
    'react':            'lib["react"]',
    'react-dom/client': 'lib["react-dom/client"]',
    'react-redux':      'lib["react-redux"]',
    'react-router-dom': 'lib["react-router-dom"]',
    'redux':            'lib["redux"]',
    'redux-thunk':      'lib["redux-thunk"]',
    'reselect':         'lib["reselect"]',
  },
});

config.default = (env={}, argv) => ({
  mode: 'development',
  entry: [
    `./src/index.tsx`,
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  },
  module: {
    rules: [
      babel_loader, sass_loader,
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
  ],
});

module.exports = config;
