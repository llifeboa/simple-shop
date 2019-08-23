import fastify from 'fastify';
import http from 'http';
import Server, { Middleware } from '.';
import Render from '../render';

export default class FastifyServer implements Server {
	private readonly app: fastify.FastifyInstance<
		http.Server,
		http.IncomingMessage,
		http.ServerResponse
	>;

	constructor(
		private readonly render: Render,
		middlewares: Array<Middleware> = [],
		private readonly port: string = '8080',
		private readonly host: string = '127.0.0.1',
	) {
		this.app = fastify({});
		middlewares.forEach(middleware => {
			this.app.use(middleware);
		});
		this.setupRender();
	}

	private setupRender() {
		this.app.get(
			'*',
			async (
				req: fastify.FastifyRequest<http.IncomingMessage>,
				res: fastify.FastifyReply<http.ServerResponse>,
			): Promise<void> => {
				const { raw: rawReq } = req;
				const { url } = rawReq;
				res.header('Content-Type', 'text/html')
					.code(200)
					.send(
						await this.render.getPage.call(this.render, url || '/'),
					);
			},
		);
	}

	async run(): Promise<string> {
		try {
			return await this.app.listen({
				port: parseInt(this.port),
				host: this.host,
			});
		} catch (err) {
			throw new Error(`Error while starting server: ${err}`);
		}
	}

	async stop(): Promise<void> {
		try {
			await this.app.close();
		} catch (err) {
			throw new Error(`Error while stopping server: ${err}`);
		}
	}
}
