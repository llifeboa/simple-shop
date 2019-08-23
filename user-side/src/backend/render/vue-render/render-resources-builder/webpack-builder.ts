import { EventEmitter } from 'events';
import DevMiddleware from 'webpack-dev-middleware';
import HotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import buildConfig from '../../../../../build/frontend';
import { FileSystem } from '../render-resources-reader/fs-reader';
import Log from '../../../log';

export const EVENT_BUILD_DONE = 'BUILD_DONE';

export default class WebpackBuilder {
	private devMiddleware: any;
	private hotMiddleware: any;
	private memFS: FileSystem;
	private compiler: webpack.Compiler;

	constructor(
		private readonly log: Log,
		private readonly eventEmitter: EventEmitter,
	) {
		const frontendConfig = (buildConfig as Array<any>).find(
			({ name }) => name === 'frontend',
		);
		if (frontendConfig) {
			frontendConfig.entry = [
				'webpack-hot-middleware/client?name=frontend&path=/__webpack_hmr',
				frontendConfig.entry,
			];
			frontendConfig.plugins.push(
				new webpack.HotModuleReplacementPlugin(),
				new webpack.NoEmitOnErrorsPlugin(),
			);
			this.compiler = webpack(buildConfig);
			this.devMiddleware = DevMiddleware(this.compiler, {
				publicPath: '/',
				logLevel: 'silent',
				serverSideRender: true,
			});
			this.hotMiddleware = HotMiddleware(this.compiler, {
				path: '/__webpack_hmr',
				log: false,
			});
			this.memFS = this.devMiddleware.fileSystem;
			this.compiler.plugin('done', stats => {
				stats = stats.toJson();
				stats.errors.forEach((err: Error) => log.error(err));
				stats.warnings.forEach((err: Error) => log.warn(err));
				if (stats.errors.length) return;
				this.eventEmitter.emit(EVENT_BUILD_DONE);
			});
		} else {
			throw new Error(
				'Error while creating webpack-builder. Could not find frontend config.',
			);
		}
	}

	public getMemFS(): FileSystem {
		return this.memFS;
	}

	public stop() {
		this.devMiddleware.close();
	}

	public getStaticInMemoryMiddleware() {
		return this.devMiddleware;
	}

	public getHotReloadMiddleware() {
		return this.hotMiddleware;
	}
}
