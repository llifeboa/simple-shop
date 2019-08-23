<template lang="pug">
include ../../node_modules/bemto.pug/bemto.pug
+b.hello#app
	router-link(to="/about") to about
	router-view
</template>

<script>
export default {
	name: 'test',
	data() {
		return {
			a: 'test',
		};
	},
};
</script>

<style lang="scss">
.hello-world {
	color: red;
}
</style>
