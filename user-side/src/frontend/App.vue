<template lang="pug">
include ../../node_modules/bemto.pug/bemto.pug
+b.app#app
	+e.wrapper
		header
			logo
			navigation
		main
			router-view
		footer
			+e.footer
</template>

<script>
import Navigation from './components/navigation/Navigation.vue';
import Logo from './components/logo/Logo.vue';

export default {
	name: 'test',
	components: {
		Navigation,
		Logo,
	},
	data() {
		return {
			a: 'test',
		};
	},
};
</script>

<style lang="scss">
@import './index.scss';
</style>
