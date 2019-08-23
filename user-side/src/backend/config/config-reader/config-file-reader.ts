import yaml from 'yaml';
import ConfigReader from '.';
import { TConfig } from '../config-type';
import ConfigValidator from '../config-validator';
import { FileSystem } from '../../render/vue-render/render-resources-reader/fs-reader';
import Log from '../../log';

export default class ConfigFileReader implements ConfigReader {
	private readonly configPath: string;
	constructor(
		private readonly log: Log,
		private readonly fs: FileSystem,
		private readonly configPaths: Array<string>,
		private readonly configValidator: ConfigValidator,
	) {
		this.configPath = this.getConfigPath();
	}

	private getConfigPath(): string {
		for (const configPath of this.configPaths) {
			if (this.fs.existsSync(configPath)) {
				return configPath;
			}
		}
		return '';
	}

	public readConfig(): TConfig {
		try {
			if (!this.configPath) {
				this.log.debug('Could not find config file.');
				return {};
			} else {
				const config = this.readFSConfig();
				this.configValidator.verificationConifg(config);
				return config;
			}
		} catch (err) {
			throw new Error(`Error while reading config file: ${err.message}`);
		}
	}

	private readFSConfig(): object {
		const rawConfig = this.fs.readFileSync(this.configPath, 'utf-8');
		const parsedConfig = yaml.parse(rawConfig);
		return parsedConfig;
	}
}
