import test from 'ava';

import DefaultConfigValidator from '../src/backend/config/validator/default';

test('One config props awailable', t => {
	const config = {
		host: '127.0.0.1',
		port: '8080',
	};

	try {
		const validator = new DefaultConfigValidator(['host']);
		validator.verificationConifg(config);
		t.fail('Validator shouls throw error if pass not allowed config prop');
	} catch (err) {
		t.pass();
	}
});

test('Multiply config props awailbale', t => {
	const config = {
		host: '127.0.0.1',
		port: '8080',
	};

	const validator = new DefaultConfigValidator(['host', 'port']);
	validator.verificationConifg(config);
	t.pass();
});

test('Empty config filtering', t => {
	const config = {};

	const validator = new DefaultConfigValidator(['host', 'port']);
	validator.verificationConifg(config);

	t.pass();
});
