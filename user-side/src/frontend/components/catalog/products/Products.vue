<template>
	<div class="products">
		<product />
		<product />
		<product />
		<product />
		<product />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Product from './Product.vue';
@Component({
	components: {
		Product,
	},
})
export default class Products extends Vue {}
</script>

<style lang="scss">
$space: 11px;

.products {
	padding-top: 8px;
	display: grid;
	width: 100%;
	grid-template-columns: 1fr 1fr;
	grid-gap: $space;
	padding-left: $space;
	padding-right: $space;
	box-sizing: border-box;
}
</style>
