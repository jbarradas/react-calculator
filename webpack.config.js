var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: {
		components: './src/components/Calculator.jsx'
	},
	output: {
		filename: './public/react-calculator.js'
	},
	module: {
		rules: [
			{
			  test: /\.(js|jsx)$/,
			  exclude: /(node_modules)/,
			  include: __dirname,
			  loader: 'babel-loader',
			  query: {
			  	presets: [ "es2015", "react", "react-hmre" ]
			  }
			},
			{
				test: /\.scss$/,
				include: __dirname,
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader"
				}, {
					loader: "sass-loader"
				}]
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};

