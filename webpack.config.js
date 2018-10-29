const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack')

let pathsToClean = [
  'dist'
]

module.exports = {
	//mode: 'development',
	entry: { main: './src/client/index.js'},
	output: {
		filename: 'main.js', 
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
	new HtmlWebpackPlugin({template: "./src/client/index.html", inject: 'body'}),
	new CleanWebpackPlugin(pathsToClean),
	/*
	new webpack.ProvidePlugin({ 
      $: 'jquery',
      jQuery: 'jquery',
    }),*/
	],

	devServer: { 
		port: 3000,
		open: true,
		proxy: {
		//"/api": "http://localhost:8080"
		}
	}
}

