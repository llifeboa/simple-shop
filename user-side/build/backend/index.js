/* eslint-disable @typescript-eslint/no-var-requires*/
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const nodeExternals = require('webpack-node-externals');

const root = path.resolve(__dirname, '..', '..');
const dist = path.join(root, 'dist');
const src = path.join(root, 'src', 'backend');

module.exports = {
	target: 'node',
	node: {
		__dirname: true,
	},

	mode: 'development',
	devtool: 'inline-source-map',

	entry: path.join(src, 'index.ts'),

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					reportFiles: ['src/backend/**/*.{ts,tsx}'],
				},
			},
		],
	},

	externals: [nodeExternals()],

	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},

	output: {
		filename: 'server.js',
		devtoolModuleFilenameTemplate: '[absolute-resource-path]',
		path: dist,
	},
};
