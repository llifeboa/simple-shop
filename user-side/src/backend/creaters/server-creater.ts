import Server, { Middleware } from '../server';
import FastifyServer from '../server/fastify';
import Render from '../render';

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
