<template lang="pug">
	include ../../../../../node_modules/bemto.pug/bemto.pug
	+b.page-nav
		+e.page-select-wrapper
			+e.SPAN.page-select-value {{selectValue}}
			+e.SELECT.page-select(v-model="selectValue")
				option(value="1") 1
				option(value="2") 2
				option(value="3") 3
		+e.arrow
			+e.BUTTON.arrow-prev
			+e.BUTTON.arrow-next
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component
export default class PageNavigation extends Vue {
	data() {
		return {
			selectValue: '1',
		};
	}
}
</script>

<style lang="scss">
.page-nav {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
	background: linear-gradient(
		to bottom,
		rgba(255, 255, 255, 1) 0%,
		rgba(255, 255, 255, 0) 100%
	);

	&__page-select-wrapper {
		position: absolute;
		left: 10px;
	}

	&__page-select-value {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateY(-50%) translateX(-50%);
		font-size: 14px;
		line-height: 164.1%;
		color: white;
		pointer-events: none;
	}

	&__page-select {
		width: 66px;
		height: 30px;
		border: none;
		appearance: none;
		background: linear-gradient(339.49deg, #f1915b 15.6%, #f54278 84.6%);
		border-radius: 5px;
		color: transparent;
		text-align-last: center;
	}

	&__page-select-wrapper:after {
		content: '';
		width: 7px;
		height: 7px;
		position: absolute;
		right: 8px;
		bottom: 8px;
		transform: rotate(180deg);
		background-image: url('../../../assets/img/catalog/page-navigation/triangle.svg');
		background-repeat: no-repeat;
	}

	&__page-select-wrapper:before {
		content: '';
		width: 7px;
		height: 7px;
		position: absolute;
		right: 8px;
		top: 8px;
		background-image: url('../../../assets/img/catalog/page-navigation/triangle.svg');
		background-repeat: no-repeat;
	}
}

.page-nav__arrow {
	width: auto;
	height: 40px;

	&-prev,
	&-next {
		height: 100%;
		width: 55px;
		appearance: none;
		background-image: url('../../../assets/img/catalog/page-navigation/page-next.svg');
		background-color: rgba(0, 0, 0, 0);
		border: none;
	}

	&-next {
		transform: rotate(180deg);
		margin-left: 11px;
	}
}
</style>
