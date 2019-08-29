<template lang="pug">
	include ../../../../node_modules/bemto.pug/bemto.pug
	+b.nav-aside
		+e.item
			+e.IMG.item-image(
				src="../../assets/img/navbar/filters.svg"
				alt="")
		+e.item
			+e.IMG.item-image(
				src="../../assets/img/navbar/search.svg"
				alt="")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class AsideNavigation extends Vue {}
</script>

<style lang="scss">
.nav-aside {
	position: fixed;
	bottom: 80px;
	right: 10px;

	&__item {
		width: 57px;
		height: 57px;
		background-color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		margin-top: 6px;
	}
}
</style>
