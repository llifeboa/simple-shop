// import './index.css';

// import Vue from 'vue';
import AppCreater from './app';

// Vue.config.productionTip = false;
const { app, router } = AppCreater.create();

router.onReady(() => {
	app.$mount('#app');
});
