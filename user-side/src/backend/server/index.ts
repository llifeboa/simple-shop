import http from 'http';

export type CallbackMiddleware = (err?: Error) => void;
export type Middleware = (
	req: http.IncomingMessage,
	res: http.ServerResponse,
	cb: CallbackMiddleware,
) => void;

export default interface Server {
	run(): Promise<string>;
	stop(): Promise<void>;
}
