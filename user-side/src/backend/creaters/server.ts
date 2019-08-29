import Server, { Middleware } from '@b/server';
import FastifyServer from '@b/server/fastify';
import Render from '@b/render';

export default interface ServerCreater {
	create(middlewares: Array<Middleware>): Server;
}

export class FastifyServerCreater implements ServerCreater {
	constructor(
		private readonly render: Render,
		private readonly port: string,
		private readonly host: string,
	) {}

	create(middlewares: Array<Middleware> = []): Server {
		return new FastifyServer(
			this.render,
			middlewares,
			this.port,
			this.host,
		);
	}
}
