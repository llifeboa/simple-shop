import Vue from 'vue';
import VueRouter from 'vue-router';

import AppVue from './App.vue';
import RouterCreater from './router';

export type FullApp = { router: VueRouter; app: Vue };

export default class AppCreater {
	static create(): FullApp {
		const router = RouterCreater.create();
		const app = new Vue({
			render: h => h(AppVue),
			router,
			// store,
		});
		return { app, router };
	}
}
