/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/camelcase */
const path = require('path');

module.exports = {
	apps: [
		{
			name: 'server',
			script: 'dist/server.js',
			node_args: '--no-deprecation',
			autorestart: true,
			watch: ['dist/server.js'],
			log: './log/server.log',
			max_memory_restart: '1G',
			env: {
				NODE_ENV: 'development',
			},
		},
		{
			name: 'builder',
			script: 'node_modules/webpack-cli/bin/cli.js',
			args: [
				'--config',
				path.resolve(__dirname, 'build', 'backend', 'index.js'),
				'--watch',
			],
			watch: ['build/**/*.js'],
			log: './log/builder.log',
			max_memory_restart: '1G',
			env: {
				NODE_ENV: 'development',
			},
		},
	],
};
