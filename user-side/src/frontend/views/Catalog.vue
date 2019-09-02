<template lang="pug">
	include ../../../node_modules/bemto.pug/bemto.pug
	+b.catalog
		banner
		page-navigation
		products
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Banner from '../components/catalog/banners/Banner.vue';
import PageNavigation from '../components/catalog/page-navigation/PageNavigation.vue';
import Products from '../components/catalog/items/Items.vue';
@Component({
	components: {
		Banner,
		PageNavigation,
		Products,
	},
})
export default class Catalog extends Vue {}
</script>
