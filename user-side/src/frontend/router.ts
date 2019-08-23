import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
// import About from './views/About.vue';

Vue.use(Router);

export default class RouterCreater {
	static create(): Router {
		return new Router({
			mode: 'history',
			//   base: process.env.BASE_URL,
			routes: [
				{
					path: '/',
					name: 'home',
					//   component: () => import(/* webpackChunkName: "home" */'./views/Home.vue'),
					component: Home,
				},
				{
					path: '/about',
					name: 'about',
					// component: About,
					component: () =>
						import(
							/* webpackChunkName: "about" */ './views/About.vue'
						),
				},
			],
		});
	}
}
