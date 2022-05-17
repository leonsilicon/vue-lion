<script lang="ts">
export default {
	inheritAttrs: false,
};
</script>

<script setup lang="ts">
const { fullPageBackground = false } = defineProps<{
	fullPageBackground?: boolean;
}>();
</script>

<template>
	<template v-if="fullPageBackground">
		<div class="h-full column bg-gray-100 items-center justify-center">
			<div class="app-card" v-bind="$attrs">
				<slot></slot>
			</div>
		</div>
	</template>
	<template v-else>
		<div class="app-card" v-bind="$attrs">
			<slot></slot>
		</div>
	</template>
</template>

<style lang="postcss">
div:where(.app-card) {
	@apply border-1 border-gray-300 bg-white rounded-md p-6;
}
</style>
