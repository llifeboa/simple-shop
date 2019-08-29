import { Template, ClientManifest, ServerBundle } from '../resources';

export default interface RenderResourcesReader {
	readClientManifest(): Promise<ClientManifest>;
	readTemplate(): Promise<Template>;
	readServerBundle(): Promise<ServerBundle>;
}
