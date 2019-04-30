const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './client/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {

...

module: {
    rules: [
        ...
    ]
},
// add this line
plugins: [HtmlWebpackPluginConfig]
}

