<template lang="pug">
	include ../../../../../node_modules/bemto.pug/bemto.pug
	+b.item
		+e.wrapper
			picture
				+e.IMG.wrapper-image(
					src="../../../assets/img/item/image.jpg"
					alt="")
		+e.info
			+e.info-wrapper
				+e.SPAN.info-name yeezy boots
				+e.SPAN.info-price 4200$
			+e.IMG.info-brand(
				src="../../../assets/img/item/adidas.svg"
				alt="")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Item extends Vue {}
</script>

<style lang="scss">
.item {
	border-radius: 10px;
	background-color: white;
	color: black;
	overflow: hidden;
	position: relative;

	&:after {
		content: '';
		display: block;
		padding-top: 130%;
	}

	.item__wrapper {
		&-image {
			object-fit: cover;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
		}
	}

	.item__info {
		position: absolute;
		bottom: 0;
		display: flex;
		width: 100%;
		height: calc((100% / 1.3) / 100 * 30);
		justify-content: space-between;
		align-items: center;
		padding: 10px 6px;
		box-sizing: border-box;

		&-wrapper {
			display: flex;
			flex-direction: column;
		}

		&-name {
			text-transform: uppercase;
			font-weight: 900;
			font-size: 12px;
			font-style: normal;
			line-height: 164.1%;
		}

		&-price {
			font-weight: 500;
			font-size: 12px;
			line-height: 164.1%;
		}

		&-brand {
			width: 30px;
		}
	}
}
</style>
