<template>
	<div class="logo">
		<img
			src="../../assets/img/logo/logo.svg"
			alt="logo"
			class="logo__image"
		/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Logo extends Vue {}
</script>

<style lang="scss">
.logo {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 83px;
	background-color: white;
}
</style>
