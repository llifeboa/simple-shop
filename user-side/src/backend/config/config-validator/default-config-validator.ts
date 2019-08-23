import ConfigValidator from '.';

export default class DefaultConfigValidator implements ConfigValidator {
	constructor(private readonly availabePropertys: Array<string>) {}

	verificationConifg(config: object) {
		Object.keys(config).forEach(key => {
			if (this.availabePropertys.includes(key)) return true;
			else throw new Error(`Config property '${key}' don't available`);
		});
	}
}
