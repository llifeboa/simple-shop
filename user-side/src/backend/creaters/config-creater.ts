import fs from 'fs';
import path from 'path';

import Config from '../config';
import ConfigValidator from '../config/config-validator/default-config-validator';
import ConfigFileReader from '../config/config-reader/config-file-reader';
import Log from '../log';

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
