<template lang="pug">
	include ../../../../../node_modules/bemto.pug/bemto.pug
	+b.banner
		+e.wrapper
			+e.IMG.image(src="../../../assets/img/catalog/banners/hand-hold-boot.jpg" alt="hand hold a boot")
			+e.text
				+e.P.text-main
					|Придай <b>характер</b><br>
					|своему <b>образу</b>
				+e.SPAN.text-sub
					|yeezy
			+e.BUTTON.btn-buy купить
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Banner extends Vue {}
</script>

<style lang="scss">
.banner {
	padding-bottom: 55px;
	background-color: white;
	&__wrapper {
		text-align: left;
		height: 290px;
		padding-top: 12px;
		padding-left: 32px;
		position: relative;
	}
}

.banner__image {
	position: absolute;
	bottom: 0;
	right: 0;
}

.banner__text {
	position: relative;

	&-main {
		font-size: 28px;
		line-height: 34px;
	}

	&-sub {
		display: block;
		text-transform: uppercase;
		font-weight: 900;
		font-size: 50px;
		line-height: 61px;
		color: #f2f2f2;
	}
}

.banner__btn-buy {
	position: absolute;
	bottom: 8px;
	left: 32px;
	appearance: none;
	width: 212px;
	height: 44px;
	background-color: black;
	border: none;
	font-size: 18px;
	line-height: 22px;
	text-align: center;
	color: white;
}
</style>
