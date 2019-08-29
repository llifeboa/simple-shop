<template>
	<div class="banner-wrapper">
		<div class="banner">
			<img
				class="banner__image"
				src="../../../assets/img/catalog/banners/hand_hold_boot.jpg"
				alt="hand hold a boot"
			/>
			<div class="banner__text">
				<p class="banner__text-main">
					Придай <b>характер</b> <br />
					своему <b>образу</b>
					<span class="banner__text-sub">
						yeezy
					</span>
				</p>
			</div>
			<button class="banner__btn-buy">купить</button>
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
@Component
export default class Banner extends Vue {}
</script>

<style lang="scss">
.banner-wrapper {
	padding-bottom: 55px;
	background-color: white;
}

.banner {
	text-align: left;
	height: 290px;
	padding-top: 12px;
	padding-left: 32px;
	position: relative;
}

.banner__text {
	position: relative;
}

.banner__text-main {
	font-size: 28px;
	line-height: 34px;
}

.banner__text-sub {
	display: block;
	text-transform: uppercase;
	font-weight: 900;
	font-size: 50px;
	line-height: 61px;
	color: #F2F2F2;
}

.banner__image {
	position: absolute;
	bottom: 0;
	right: 0;
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
