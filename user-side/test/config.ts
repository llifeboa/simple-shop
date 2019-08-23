import test from 'ava';

import Config from '../src/backend/config/index';
import ConfigEchoReader from '../src/backend/config/config-reader/config-echo-reader';
import { mode } from '../src/backend/config/config-type';

test('Read one config', t => {
	const exceptedConfig = {
		host: '127.0.0.1',
		mode: mode.production,
		port: '8000',
	};
	const configMock = new ConfigEchoReader(exceptedConfig);
	const config = new Config([configMock]);

	t.deepEqual(
		config.extractConfig(),
		exceptedConfig,
		'Config should be eqaul',
	);
});

test('Config prioritet merging overwriting low prioriry config', t => {
	const configPreor1 = {
		host: '127.0.0.2',
		port: '8081',
	};
	const configPreor2 = {
		mode: mode.production,
		potr: '8001',
	};
	const exceptedConfig = {
		host: '127.0.0.2',
		mode: mode.production,
		port: '8081',
	};
	const configMockPreor1 = new ConfigEchoReader(configPreor1);
	const configMockPreor2 = new ConfigEchoReader(configPreor2);

	const config = new Config([configMockPreor2, configMockPreor1]);

	t.deepEqual(
		config.extractConfig(),
		exceptedConfig,
		'Config should be eqaul',
	);
});

test('Config prioritet overwriting default config', t => {
	const configPreor1 = {
		host: '127.0.0.2',
	};
	const configPreor2 = {
		host: '127.0.0.1',
		mode: mode.production,
		port: '8001',
	};
	const exceptedConfig = {
		host: '127.0.0.2',
		mode: mode.production,
		port: '8001',
	};
	const configMockPreor1 = new ConfigEchoReader(configPreor1);
	const configMockPreor2 = new ConfigEchoReader(configPreor2);

	const config = new Config([configMockPreor2, configMockPreor1]);

	t.deepEqual(
		config.extractConfig(),
		exceptedConfig,
		'Config should be eqaul',
	);
});
