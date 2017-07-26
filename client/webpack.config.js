const path = require('path');
const webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV;
const CONFIG_ENV = NODE_ENV === 'production' ? 'prod' : 'dev';

let webpackConfig = null;
const baseConfig = {
  entry: './src/app.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dist/[name].js',
    publicPath: '',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, 'src') + '/components/',
      config: path.resolve(__dirname, 'src') + '/components/' + CONFIG_ENV,
    },
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      }
    ],
  },

  devServer: {
    port: 8123,
  },

  plugins: [],
};

if (NODE_ENV === 'development') {
  Array.prototype.push.apply(baseConfig.plugins, [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"',
      },
    }),
  ]);

  webpackConfig = webpackConfig = Object.assign(baseConfig, {});

} else {
  Array.prototype.push.apply(baseConfig.plugins, [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
    }),
  ]);

  webpackConfig = Object.assign(baseConfig, {
    devtool: 'source-map',
  });
}


module.exports = webpackConfig;

