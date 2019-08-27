/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	mode: isProd ? 'production' : 'development',

	output: {
		filename: '[name].[hash].js',
		devtoolModuleFilenameTemplate: '[absolute-resource-path]',
		publicPath: '/public/',
	},

	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[hash].css',
		}),
		new OptimizeCSSAssetsPlugin({}),
	],

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: [
					'babel-loader',
					{
						loader: 'ts-loader',
						options: {
							appendTsSuffixTo: [/\.vue$/],

							reportFiles: ['src/frontend/**/*.{ts,tsx}'],
						},
					},
				],
				exclude: [/node_modules/],
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					extractCSS: true,
				},
			},
			{
				test: /\.s?css$/,
				use: [
					isProd ? MiniCssExtractPlugin.loader : 'vue-style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
			},
			{
				test: /\.pug$/,
				loader: 'pug-plain-loader',
			},
			{
				test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|webp|json)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				},
			},
		],
	},

	optimization: {
		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/,
				},
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true,
		},
	},

	devtool: isProd ? '' : 'cheap-source-map',

	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.vue'],
		alias: {
			vue$: 'vue/dist/vue.esm.js',
		},
	},
};
