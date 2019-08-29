<template lang="pug">
	include ../../../../node_modules/bemto.pug/bemto.pug
	+b.logo
		+e.image(
			src="../../assets/img/logo/logo.svg"
			alt="logo")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Logo extends Vue {}
</script>

<style lang="scss">
.logo {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 83px;
	background-color: white;
}
</style>
