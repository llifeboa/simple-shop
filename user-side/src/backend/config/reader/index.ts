import { TConfig } from '../config-type';

export default interface ConfigReader {
	readConfig(): TConfig;
}
