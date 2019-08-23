/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const path = require('path');
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin');
const nodeExternals = require('webpack-node-externals');

const paths = require('./paths');
const base = require('./universal');

const entry = path.join(paths.src, 'entry-server.ts');
const relativeServerBundlePath = path.join(
	path.relative(paths.dist, paths.assets),
	'vue-ssr-server-bundle.json',
);

module.exports = merge(base, {
	target: 'node',
	name: 'backend',
	entry,
	output: {
		path: paths.dist,
		libraryTarget: 'commonjs2',
	},
	plugins: [
		new VueSSRServerPlugin({
			filename: relativeServerBundlePath,
		}),
	],
	externals: nodeExternals({
		whitelist: /\.css$/,
	}),
});
