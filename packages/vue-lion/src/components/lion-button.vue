<script lang="ts">
export default { inheritAttrs: false };
</script>

<script setup lang="ts">
import { VueSpinner } from 'vue3-spinners';

const { loading, error } = defineProps<{
	loading?: boolean;
	error?: string;
}>();

const emit = defineEmits<{
	(e: 'click', event: MouseEvent): void;
}>();
</script>

<template>
	<div class="column">
		<button
			type="button"
			class="lion-button"
			v-bind="$attrs"
			@click="emit('click', $event)"
		>
			<VueSpinner v-if="loading" />
			<slot v-else></slot>
		</button>
		<LionError
			v-if="error !== undefined && error !== ''"
			class="text-center mt-3"
			:message="error"
		/>
	</div>
</template>

<style lang="postcss">
button:where(.lion-button) {
	@apply inline-block px-6 py-2.5 bg-orange-400 text-white font-bold text-sm leading-tight rounded shadow-md transition duration-150 ease-in-out hover:(bg-orange-500 shadow-lg bg-orange-500 shadow-lg outline-none ring-0) active:(bg-orange-600 active:shadow-lg);
}
</style>
