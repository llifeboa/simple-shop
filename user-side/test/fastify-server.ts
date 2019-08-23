import http from 'http';
import fastify from 'fastify';
import test from 'ava';
import EchoRender from '../src/backend/render/echo-render';
import FastifyServer from '../src/backend/server/fastify';

async function urlTest(
	server: fastify.FastifyInstance<
		http.Server,
		http.IncomingMessage,
		http.ServerResponse
	>,
	url: string,
) {
	const res = await server.inject({
		method: 'GET',
		url,
	});
	const { statusCode, headers, body } = res as any;
	const contentType = headers['content-type'];
	return {
		statusCode,
		contentType,
		body,
	};
}

test('fastify server pass server url `/`', async t => {
	const render = new EchoRender();
	const server = new FastifyServer(render);
	const url = '/';
	const { statusCode, contentType, body } = await urlTest(
		(server as any).app,
		url,
	);
	t.deepEqual(
		statusCode,
		200,
		`status code should be equal 200, but at now status code is ${statusCode}`,
	);
	t.deepEqual(
		contentType,
		'text/html',
		`content type should be equal text/html, but at now content type is ${contentType}`,
	);
	t.deepEqual(
		body,
		url,
		`url passed to render function should be ${url}, but passed ${body}`,
	);
});

test('fastify server pass server url `/test1234567`', async t => {
	const render = new EchoRender();
	const server = new FastifyServer(render);
	const url = '/test1234567';
	const { statusCode, contentType, body } = await urlTest(
		(server as any).app,
		url,
	);
	t.deepEqual(
		statusCode,
		200,
		`status code should be equal 200, but at now status code is ${statusCode}`,
	);
	t.deepEqual(
		contentType,
		'text/html',
		`content type should be equal text/html, but at now content type is ${contentType}`,
	);
	t.deepEqual(
		body,
		url,
		`url passed to render function should be ${url}, but passed ${body}`,
	);
});

test('fastify server pass server url `/test/test/`', async t => {
	const render = new EchoRender();
	const server = new FastifyServer(render);
	const url = '/test/test/';
	const { statusCode, contentType, body } = await urlTest(
		(server as any).app,
		url,
	);
	t.deepEqual(
		statusCode,
		200,
		`status code should be equal 200, but at now status code is ${statusCode}`,
	);
	t.deepEqual(
		contentType,
		'text/html',
		`content type should be equal text/html, but at now content type is ${contentType}`,
	);
	t.deepEqual(
		body,
		url,
		`url passed to render function should be ${url}, but passed ${body}`,
	);
});
