import ConfigReader from '.';
import { TConfig } from '../config-type';

export default class ConfigEchoReader implements ConfigReader {
	constructor(private readonly config: object) {}

	readConfig(): TConfig {
		return this.config;
	}
}
