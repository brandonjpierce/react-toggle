var webpack = require('webpack');
var path = require('path');
var version = require('./package').version;
var banner = 'SmellyToggle.js v' + version + ' :: by Brandon Pierce (brandon@brandonjpierce.com) MIT';
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: { Toggle: './src/index.js' },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    library: ['Smelly', '[name]'],
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['jsx', 'babel']
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader!autoprefixer-loader')
    }]
  },
  resolve: { modulesDirectories: ['node_modules', 'src'] },
  plugins: [
    // new webpack.optimize.UglifyJsPlugin(),
    new ExtractTextPlugin('smelly.toggle.css'),
    new webpack.BannerPlugin(banner)
  ],
  externals: { 'react': 'React' }
};
