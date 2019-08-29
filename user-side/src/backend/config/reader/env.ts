import ConfigReader from '.';
import { TConfig, mode } from '../config-type';

export default class ConfigEnvGetter implements ConfigReader {
	readConfig(): TConfig {
		return {
			host: process.env.HOST,
			port: process.env.PORT,
			mode:
				process.env.NODE_ENV === 'production'
					? mode.production
					: mode.development,
		};
	}
}
