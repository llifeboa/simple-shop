import test from 'ava';

import MFS from 'memory-fs';
import path from 'path';
import yaml from 'yaml';

import ConfigFileReader from '../src/backend/config/config-reader/config-file-reader';
import AllValidLavidator from '../src/backend/config/config-validator/all-valid-validator';

test('If no one config find return empty object', t => {
	const fs = new MFS();
	const paths = [];

	const validator = new AllValidLavidator();
	const configReader = new ConfigFileReader(fs, paths, validator);
	const config = configReader.readConfig();
	t.deepEqual(config, {}, 'Config object should be empty');
});

test('Config successfully read', t => {
	const fs = new MFS();
	const paths = [path.join('/', 'config.yaml')];
	const expectedConfig = { host: '127.0.0.1', port: '8080' };
	fs.writeFileSync(paths[0], yaml.stringify(expectedConfig), 'utf-8');

	const validator = new AllValidLavidator();
	const configReader = new ConfigFileReader(fs, paths, validator);
	const config = configReader.readConfig();
	t.deepEqual(
		config,
		expectedConfig,
		'Config should be equal with config in file system',
	);
});

test('Config path preority from first to last', t => {
	const fs = new MFS();
	const paths = [
		path.join('/', 'config.yaml'),
		path.join('/', 'config2.yaml'),
	];
	const expectedConfig = { host: '127.0.0.1', port: '8080' };
	const secondConfig = { host: '127.0.0.2', port: '8090' };
	fs.writeFileSync(paths[0], yaml.stringify(expectedConfig), 'utf-8');
	fs.writeFileSync(paths[1], yaml.stringify(secondConfig), 'utf-8');

	const validator = new AllValidLavidator();
	const configReader = new ConfigFileReader(fs, paths, validator);
	const config = configReader.readConfig();
	t.deepEqual(
		config,
		expectedConfig,
		'Config should be equal with config in file system',
	);
});
