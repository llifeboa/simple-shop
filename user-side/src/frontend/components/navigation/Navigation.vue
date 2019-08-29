<template lang="pug">
	include ../../../../node_modules/bemto.pug/bemto.pug
	nav
		.nav-wrapper
			+b.nav
				+e.item_active
					+e.IMG.item-decorator(
						src="../../assets/img/navbar/decoration.svg"
						alt="")
					+e.IMG.item-image(
						src="../../assets/img/navbar/account.svg"
						alt="")
					+e.IMG.item-image-active(
						src="../../assets/img/navbar/account-active.svg"
						alt="")
				+e.item
					+e.IMG.item-decorator(
						src="../../assets/img/navbar/decoration.svg"
						alt="")
					+e.IMG.item-image(
						src="../../assets/img/navbar/catalog.svg"
						alt="")
					+e.IMG.item-image-active(
						src="../../assets/img/navbar/catalog-active.svg"
						alt="")
				+e.item
					+e.IMG.item-decorator(
						src="../../assets/img/navbar/decoration.svg"
						alt="")
					+e.IMG.item-image(
						src="../../assets/img/navbar/cart.svg"
						alt="")
					+e.IMG.item-image-active(
						src="../../assets/img/navbar/cart-active.svg"
						alt="")
			aside-navigation
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import AsideNavigation from './AsideNavigation.vue';
@Component({
	components: {
		AsideNavigation,
	},
})
export default class Navigation extends Vue {}
</script>

<style lang="scss">
$nav_height: 52px;

.nav-wrapper {
	position: fixed;
	width: 100vw;
	bottom: 0;
	left: 0;
	filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
	z-index: 10;
}

.nav {
	width: 100%;
	height: $nav_height;
	display: flex;
	justify-content: space-around;
	align-items: baseline;
	background-color: white;
}

.nav__item {
	position: relative;
	display: flex;
	justify-content: center;
	height: 100%;
}

.nav__item-decorator {
	position: absolute;
	align-self: flex-start;
	transform: translateY(-100%);
	display: none;
}

.nav__item_active .nav__item-decorator {
	display: block;
}

.nav__item-image {
	width: 30px;
}

.nav__item_active .nav__item-image {
	display: none;
}

.nav__item-image-active {
	display: none;
}

.nav__item_active .nav__item-image-active {
	display: block;
	width: 40px;
	transform: translateY(-6px);
}
</style>
