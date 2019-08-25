<template lang="pug">
include ../../node_modules/bemto.pug/bemto.pug
+b.hello#app
	header
		logo
		navigation
	main
		router-view
	footer
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
* {
	margin: 0;
	padding: 0;
	font-family: 'Montserrat', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
#app {
	background-image: url('./assets/img/background.svg');
	background-repeat: repeat-y;
	background-size: 100%;
}
footer {
	height: 65px;
}
/* montserrat-regular - latin_cyrillic */
@font-face {
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 400;
	src: url('./assets/fonts/montserrat-v14-latin_cyrillic-regular.eot'); /* IE9 Compat Modes */
	src: local('Montserrat Regular'), local('Montserrat-Regular'),
		url('./assets/fonts/montserrat-v14-latin_cyrillic-regular.eot?#iefix')
			format('embedded-opentype'),
		/* IE6-IE8 */
			url('./assets/fonts/montserrat-v14-latin_cyrillic-regular.woff2')
			format('woff2'),
		/* Super Modern Browsers */
			url('./assets/fonts/montserrat-v14-latin_cyrillic-regular.woff')
			format('woff'),
		/* Modern Browsers */
			url('./assets/fonts/montserrat-v14-latin_cyrillic-regular.ttf')
			format('truetype'),
		/* Safari, Android, iOS */
			url('./assets/fonts/montserrat-v14-latin_cyrillic-regular.svg#Montserrat')
			format('svg'); /* Legacy iOS */
}
/* montserrat-500 - latin_cyrillic */
@font-face {
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 500;
	src: url('./assets/fonts/montserrat-v14-latin_cyrillic-500.eot'); /* IE9 Compat Modes */
	src: local('Montserrat Medium'), local('Montserrat-Medium'),
		url('./assets/fonts/montserrat-v14-latin_cyrillic-500.eot?#iefix')
			format('embedded-opentype'),
		/* IE6-IE8 */
			url('./assets/fonts/montserrat-v14-latin_cyrillic-500.woff2')
			format('woff2'),
		/* Super Modern Browsers */
			url('./assets/fonts/montserrat-v14-latin_cyrillic-500.woff')
			format('woff'),
		/* Modern Browsers */
			url('./assets/fonts/montserrat-v14-latin_cyrillic-500.ttf')
			format('truetype'),
		/* Safari, Android, iOS */
			url('./assets/fonts/montserrat-v14-latin_cyrillic-500.svg#Montserrat')
			format('svg'); /* Legacy iOS */
}
/* montserrat-900 - latin_cyrillic */
@font-face {
	font-family: 'Montserrat';
	font-style: normal;
	font-weight: 900;
	src: url('./assets/fonts/montserrat-v14-latin_cyrillic-900.eot'); /* IE9 Compat Modes */
	src: local('Montserrat Black'), local('Montserrat-Black'),
		url('./assets/fonts/montserrat-v14-latin_cyrillic-900.eot?#iefix')
			format('embedded-opentype'),
		/* IE6-IE8 */
			url('./assets/fonts/montserrat-v14-latin_cyrillic-900.woff2')
			format('woff2'),
		/* Super Modern Browsers */
			url('./assets/fonts/montserrat-v14-latin_cyrillic-900.woff')
			format('woff'),
		/* Modern Browsers */
			url('./assets/fonts/montserrat-v14-latin_cyrillic-900.ttf')
			format('truetype'),
		/* Safari, Android, iOS */
			url('./assets/fonts/montserrat-v14-latin_cyrillic-900.svg#Montserrat')
			format('svg'); /* Legacy iOS */
}
</style>
