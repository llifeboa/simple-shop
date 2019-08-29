import { EventEmitter } from 'events';
import fs from 'fs';

import ServerCreater from './server';
import Config from '@b/config';
import Builder, {
	EVENT_BUILD_DONE,
} from '@b/render/vue-render/resources-builder/webpack';
import RenderResourcesFsReader from '@b/render/vue-render/resources-reader/fs';
import Server from '@b/server';
import VueRender from '@b/render/vue-render';
import Log from '@b/log';
import RenderResourcesReader from '@b/render/vue-render/resources-reader';

export default interface ServerTemplateCreater {
	create(log: Log, serverCreater: ServerCreater): Promise<Server>;
}

export class DevVueServerTemplateCreater implements ServerTemplateCreater {
	constructor(
		private readonly config: Config,
		private readonly render: VueRender,
	) {}

	async create(log: Log, serverCreater: ServerCreater): Promise<Server> {
		const eventEmitter = new EventEmitter();
		const builder = new Builder(log, eventEmitter);
		const reader = new RenderResourcesFsReader(
			builder.getMemFS(),
			this.config.templatePath,
			this.config.clientManifestPath,
			this.config.serverBundlePath,
		);
		eventEmitter.on(EVENT_BUILD_DONE, async () => {
			try {
				log.info('Loading new render resources');
				loadRenderResources(this.render, reader);
				log.info('New render resources loaded');
			} catch (err) {
				log.error(`Error while updating render ${err.message}`);
			}
		});
		const middlewares = [
			builder.getStaticInMemoryMiddleware(),
			builder.getHotReloadMiddleware(),
		];
		return serverCreater.create(middlewares);
	}
}

async function loadRenderResources(
	render: VueRender,
	reader: RenderResourcesReader,
) {
	const templatePromise = reader.readTemplate();
	const clientManifestPromise = reader.readClientManifest();
	const serverBundlePromise = reader.readServerBundle();
	const [template, clientManifest, serverBundle] = await Promise.all([
		templatePromise,
		clientManifestPromise,
		serverBundlePromise,
	]);
	const res = {
		template,
		clientManifest,
		serverBundle,
	};
	await render.update(res);
}

export class VueProdServerTemplateCreater implements ServerTemplateCreater {
	constructor(
		private readonly config: Config,
		private readonly render: VueRender,
	) {}
	async create(log: Log, serverCreater: ServerCreater): Promise<Server> {
		const reader = new RenderResourcesFsReader(
			fs,
			this.config.templatePath,
			this.config.clientManifestPath,
			this.config.serverBundlePath,
		);
		try {
			await loadRenderResources(this.render, reader);
		} catch (err) {
			throw new Error(
				`Error while loading render resources ${err.message}`,
			);
		}
		log.info('Render resources loaded');
		try {
			return serverCreater.create([]);
		} catch (err) {
			throw new Error(`Error while creating server ${err.message}`);
		}
	}
}
