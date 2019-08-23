import ConfigValidator from '.';
import { TConfig } from '../config-type';

export default class AllValidValidator implements ConfigValidator {
	verificationConifg(config: object): TConfig {
		return config;
	}
}
