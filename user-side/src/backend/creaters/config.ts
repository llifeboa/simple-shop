import fs from 'fs';
import path from 'path';

import Config from '@b/config';
import ConfigValidator from '@b/config/validator/default';
import ConfigFileReader from '@b/config/reader/file';
import Log from '@b/log';

export default class ConfigCreator {
	static create(log: Log): Config {
		const configPaths = [path.join('..', 'config.yaml'), 'config.yaml'];
		const configProps = ['host', 'port'];

		const configValidator = new ConfigValidator(configProps);
		const configFileReader = new ConfigFileReader(
			log,
			fs,
			configPaths,
			configValidator,
		);
		const config = new Config([configFileReader]);
		return config;
	}
}
