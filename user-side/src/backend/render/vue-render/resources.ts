export type Template = string;
export type ClientManifest = Record<string, any>;
export type ServerBundle = Record<string, any>;

export type RenderResources = {
	template: Template;
	clientManifest: ClientManifest;
	serverBundle: ServerBundle;
};
