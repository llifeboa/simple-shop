import test from 'ava';

import DefaultConfigValidator from '../src/backend/config/config-validator/default-config-validator';

test('One config props awailable', t => {
	const config = {
		host: '127.0.0.1',
		port: '8080',
	};

	const validator = new DefaultConfigValidator(['host']);
	const filtredConfig = validator.validateConfig(config);

	t.deepEqual(filtredConfig, { host: '127.0.0.1' }, 'Should be eqaul');
});

test('Multiply config props awailbale', t => {
	const config = {
		host: '127.0.0.1',
		port: '8080',
	};

	const validator = new DefaultConfigValidator(['host', 'port']);
	const filtredConfig = validator.validateConfig(config);

	t.deepEqual(filtredConfig, config, 'Should be eqaul');
});

test('Empty config filtering', t => {
	const config = {};

	const validator = new DefaultConfigValidator(['host', 'port']);
	const filtredConfig = validator.validateConfig(config);

	t.deepEqual(filtredConfig, {}, 'Should be eqaul');
});
