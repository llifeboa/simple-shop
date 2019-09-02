<template lang="pug">
	include ../../../../../node_modules/bemto.pug/bemto.pug
	+b.items
		item
		item
		item
		item
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import item from './Item.vue';
@Component({
	components: {
		item,
	},
})
export default class Items extends Vue {}
</script>

<style lang="scss">
$space: 11px;

.items {
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
