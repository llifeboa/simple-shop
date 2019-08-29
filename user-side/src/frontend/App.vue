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
$fontsURL: './assets/fonts/' !default;
@import './fonts/montserrat/montserrat.scss';

* {
	margin: 0;
	padding: 0;
}

.app__wrapper {
	background-image: url('./assets/img/background.svg');
	background-repeat: repeat-y;
	background-size: 100%;
	font-family: 'Montserrat', sans-serif;
}

.app__footer {
	height: 65px;
}
</style>
