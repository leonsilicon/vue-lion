<script setup lang="ts">
const { href, to } = defineProps<{
	href?: string;
	to?: string;
}>();

if (href === undefined && to === undefined) {
	throw new Error('At least one of `href` or `to` must be provided.');
}
</script>

<template>
	<a v-if="href !== undefined" class="link" :href="href"> <slot></slot></a>
	<RouterLink v-else class="link" :to="to!">
		<slot></slot>
	</RouterLink>
</template>

<style scoped lang="postcss">
a:where(.link) {
	@apply text-red-600 hover:text-red-700 font-medium;
}
</style>
