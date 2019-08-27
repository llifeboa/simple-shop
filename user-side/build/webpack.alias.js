/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '..'),
			'@b': path.resolve(__dirname, '..', 'src', 'backend'),
			'@f': path.resolve(__dirname, '..', 'src', 'frontend'),
		},
	},
};
