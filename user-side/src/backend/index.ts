import pino from 'pino';

import VueRender from './render/vue-render';
import ConfigCreator from './creaters/config';
import ServerCreater, { FastifyServerCreater } from './creaters/server';
import {
	DevVueServerTemplateCreater,
	VueProdServerTemplateCreater,
} from './creaters/server-template';
import Config from './config';
import Server from './server';
import { mode } from './config/config-type';
import Log from './log';

main();

async function main() {
	const log = pino();
	const config = ConfigCreator.create(log);
	const render = new VueRender(log);
	const serverCreater = new FastifyServerCreater(
		render,
		config.port,
		config.host,
	);
	const server =
		config.mode === mode.production
			? await createProdServer(log, serverCreater, config, render)
			: await createDevServer(log, serverCreater, config, render);
	const address = await server.run();
	log.info(`Server run at ${address}`);
	const stopServer = async () => {
		log.info('Stopping server');
		try {
			await server.stop();
			process.exit(0);
		} catch (e) {
			log.error(e);
			process.exit(1);
		}
	};
	process.on('SIGTERM', stopServer);
	process.on('SIGINT', stopServer);
}

async function createDevServer(
	log: Log,
	serverCreater: ServerCreater,
	config: Config,
	render: VueRender,
): Promise<Server> {
	const devServerCreater = new DevVueServerTemplateCreater(config, render);
	const server = await devServerCreater.create(log, serverCreater);
	return server;
}

async function createProdServer(
	log: Log,
	serverCreater: ServerCreater,
	config: Config,
	render: VueRender,
): Promise<Server> {
	const prodServerCreater = new VueProdServerTemplateCreater(config, render);
	const server = await prodServerCreater.create(log, serverCreater);
	return server;
}

export {};
