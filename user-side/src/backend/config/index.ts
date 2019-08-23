import path from 'path';
import ConfigReader from './config-reader';
import { mode, TConfig } from './config-type';

const DEFAULT_MODE = mode.development;
const DEFAULT_HOST = '0.0.0.0';
const DEFAULT_PORT = '8080';

export default class Config {
	public host: string;
	public port: string;
	public mode: mode;
	public templatePath: string;
	public clientManifestPath: string;
	public serverBundlePath: string;

	constructor(configReaders: Array<ConfigReader>) {
		const assetsDir = path.resolve(
			__dirname,
			'..',
			'..',
			'..',
			'dist',
			'assets',
		);

		const templateName = 'index.html';
		const manifestName = 'vue-ssr-client-manifest.json';
		const bundleName = 'vue-ssr-server-bundle.json';

		this.templatePath = path.join(assetsDir, templateName);
		this.clientManifestPath = path.join(assetsDir, manifestName);
		this.serverBundlePath = path.join(assetsDir, bundleName);

		this.mode = DEFAULT_MODE;
		this.host = DEFAULT_HOST;
		this.port = DEFAULT_PORT;

		const config = configReaders.reduce((mergetConfig, configReader) => {
			const currentConfig = configReader.readConfig();
			return {
				...mergetConfig,
				...currentConfig,
			};
		}, {});
		Object.assign(this, config);
	}

	public extractConfig(): TConfig {
		return {
			mode: this.mode,
			host: this.host,
			port: this.port,
		};
	}
}
