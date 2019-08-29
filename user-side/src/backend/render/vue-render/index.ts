import { createBundleRenderer, BundleRenderer } from 'vue-server-renderer';
import Render from '../index';
import { RenderResources } from './resources';
import Log from '../../log';

export default class VueRender implements Render {
	private renderer: BundleRenderer | undefined;
	private setReady: Function | undefined;
	private ready: Promise<void>;
	constructor(private readonly log: Log) {
		this.ready = new Promise(res => {
			this.setReady = res;
		});
	}

	public async update(renderResources: RenderResources): Promise<void> {
		try {
			const { serverBundle, clientManifest, template } = renderResources;
			this.renderer = createBundleRenderer(serverBundle, {
				clientManifest,
				template,
				inject: false,
				runInNewContext: false,
			});
			if (this.setReady) {
				this.setReady();
			}
		} catch (err) {
			this.log.error(`Build Renderer Error: ${err.message}`);
		}
	}

	public async getPage(url: string): Promise<string> {
		await this.ready;
		if (this.renderer) {
			const html = await this.renderer.renderToString({ url });
			return html;
		}
		throw new Error('Renderer not loaded');
	}
}
