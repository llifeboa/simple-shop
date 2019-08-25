<template>
	<div class="catalog">
		<banner />
		<page-navigation />
		<products />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '../components/catalog/banners/Banner.vue';
import PageNavigation from '../components/catalog/page_navigation/PageNavigation.vue';
import Products from '../components/catalog/products/Products.vue';
@Component({
	components: {
		Banner,
		PageNavigation,
		Products,
	},
})
export default class Catalog extends Vue {}
</script>

<style></style>
