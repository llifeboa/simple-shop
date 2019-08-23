import test from 'ava';
import MFS from 'memory-fs';

import FsReader from '../src/backend/render/vue-render/render-resources-reader/fs-reader';

const clientManifestPath = '/clientManifest.json';
const serverBundlePath = '/serverBundlePath.json';
const templatePath = '/index.html';

test('reading client manifest', async t => {
	const clientManifest = {
		data: 'this is client manifest',
	};
	const fs = new MFS();
	const reader = new FsReader(
		fs,
		templatePath,
		clientManifestPath,
		serverBundlePath,
	);
	fs.writeFileSync(clientManifestPath, JSON.stringify(clientManifest));
	const readedClientManifest = await reader.readClientManifest();
	t.deepEqual(
		readedClientManifest,
		clientManifest,
		'bad client manifest reading',
	);
});

test('reading server bundle', async t => {
	const serverBundle = {
		data: 'this is server bundle',
	};
	const fs = new MFS();
	const reader = new FsReader(
		fs,
		templatePath,
		clientManifestPath,
		serverBundlePath,
	);
	fs.writeFileSync(serverBundlePath, JSON.stringify(serverBundle));
	const readedServerBundle = await reader.readServerBundle();
	t.deepEqual(readedServerBundle, serverBundle, 'bad server bundle reading');
});

test('reading template', async t => {
	const template = '<body>Hello World!</body>';
	const fs = new MFS();
	const reader = new FsReader(
		fs,
		templatePath,
		clientManifestPath,
		serverBundlePath,
	);
	fs.writeFileSync(templatePath, template);
	const readedTemplate = await reader.readTemplate();
	t.deepEqual(readedTemplate, template, 'bad template reading');
});
