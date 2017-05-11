var path = require('path');

module.exports = {
	entry: {
		components: './src/components/Calculator.jsx'
	},
	output: {
		filename: 'react-calculator.js',
		path: path.resolve(__dirname, './public')
	},
	module: {
		rules: [
			{
			  test: /\.(js|jsx)$/,
			  exclude: /(node_modules)/,
			  use: {
			    loader: 'babel-loader',
			    options: {
			      presets: ['react']
			    }
			  }
			}
		]
	},
	watch: true
};