/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const webpack = require('webpack');
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');

const paths = require('./paths');
const base = require('./universal');

const relativeClientManifestPath = path.join(
	path.relative(paths.public, paths.assets),
	'vue-ssr-client-manifest.json',
);
const entry = path.join(paths.src, 'entry-client.ts');

module.exports = merge([
	base,
	{
		name: 'frontend',
		//[
		entry:
			// 'webpack-hot-middleware/client?name=frontend&path=/__webpack_hmr',
			entry,
		// ],
		output: {
			path: paths.public,
		},
		plugins: [
			new VueSSRClientPlugin({
				filename: relativeClientManifestPath,
			}),
			new HtmlWebpackPlugin({
				template: path.join(paths.src, 'assets', 'index.html'),
				filename: path.join('..', 'assets', 'index.html'),
			}),
			// new webpack.HotModuleReplacementPlugin(),
		],
	},
]);
