<template>
	<div class="product">
		<div class="product__wrapper">
			<picture>
				<img
					src="../../../assets/img/product/image.jpg"
					alt=""
					class="product__wrapper-image"
				/>
			</picture>
		</div>
		<div class="product__info">
			<div class="product__info-wrapper">
				<span class="product__info-name">yeezy boots</span>
				<span class="product__info-price">4200$</span>
			</div>
			<img
				src="../../../assets/img/product/adidas.svg"
				alt=""
				class="product__info-brand"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class Product extends Vue {}
</script>

<style lang="scss">
.product {
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

	.product__wrapper {

		&-image {
			object-fit: cover;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
		}
	}

	.product__info {
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
