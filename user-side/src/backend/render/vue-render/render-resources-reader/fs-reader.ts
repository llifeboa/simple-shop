import RenderResourcesReader from '.';
import { ClientManifest, ServerBundle, Template } from '../render-resources';

export interface FileSystem {
	readFileSync(path: string, encoding: string): string;
	existsSync(path: string): boolean;
}

export default class RenderResourcesFsReader implements RenderResourcesReader {
	public constructor(
		private readonly fs: FileSystem,
		private readonly templatePath: string,
		private readonly clientManifestPath: string,
		private readonly serverBundlePath: string,
	) {}

	public async readClientManifest(): Promise<ClientManifest> {
		try {
			return this.readJson(this.clientManifestPath);
		} catch (err) {
			throw new Error(
				`Error while reading client manifest at path ${this.clientManifestPath}: ${err}`,
			);
		}
	}

	private readJson(path: string) {
		const row = this.fs.readFileSync(path, 'utf-8');
		return JSON.parse(row);
	}

	public async readServerBundle(): Promise<ServerBundle> {
		try {
			return this.readJson(this.serverBundlePath);
		} catch (err) {
			throw new Error(
				`Error while reading server bundle at path ${this.serverBundlePath}: ${err}`,
			);
		}
	}

	public async readTemplate(): Promise<Template> {
		try {
			return this.fs.readFileSync(this.templatePath, 'utf-8');
		} catch (err) {
			throw new Error(
				`Error while reading template at path ${this.templatePath}: ${err}`,
			);
		}
	}
}
