import Vue from 'vue';
import VueRouter from 'vue-router';
import HttpError from 'http-errors';
import AppCreater from './app';

async function ready(router: VueRouter): Promise<void> {
	return new Promise((res, rej) => {
		router.onReady(res, rej);
	});
}

export default async function(context: any): Promise<Vue> {
	const { router, app } = AppCreater.create();
	const { url } = context;
	try {
		router.push(url);
		await ready(router);
	} catch (err) {
		throw new Error('Something Wrong');
	}
	const matcherComponents = router.getMatchedComponents();
	if (!matcherComponents.length) {
		throw new HttpError.NotFound();
	}
	return app;
}
