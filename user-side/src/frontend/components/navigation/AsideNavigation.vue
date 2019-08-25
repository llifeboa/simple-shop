<template>
	<div class="nav-aside">
		<div class="nav-aside__item">
			<img
				src="../../assets/img/navbar/filters.svg"
				alt=""
				class="nav-aside__item-image"
			/>
		</div>
		<div class="nav-aside__item">
			<img
				src="../../assets/img/navbar/search.svg"
				alt=""
				class="nav-aside__item-image"
			/>
		</div>
	</div>
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
}

.nav-aside__item {
	width: 57px;
	height: 57px;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	margin-top: 6px;
}
</style>
