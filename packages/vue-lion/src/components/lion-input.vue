<script setup lang="ts">
import { nanoid } from 'nanoid-nice';
import AnimateHeight from 'vue-animate-height';

import { zeroWidth } from '~/utils/html.js';

const { modelValue, error, inputClass } = defineProps<{
	modelValue: string;
	error?: string;
	inputClass?: string;
}>();

const uniqueId = nanoid();

const emit = defineEmits<{
	(e: 'update:modelValue', text: string): void;
}>();

const value = $computed({
	get() {
		return modelValue;
	},
	set(value: string) {
		emit('update:modelValue', value);
	},
});

const inputElement = $ref<HTMLInputElement>();

defineExpose({
	focus() {
		inputElement.focus();
	},
});
</script>

<template>
	<div>
		<label v-if="$slots.label" :for="uniqueId">
			<slot name="label"></slot>
		</label>
		<div class="relative">
			<input
				:id="uniqueId"
				v-bind="$attrs"
				ref="inputElement"
				v-model="value"
				class="app-input"
				:class="[
					inputClass,
					{ 'border-red-300': error !== undefined && error !== '' },
				]"
			/>
			<slot name="afterInput"></slot>
			<AnimateHeight
				:height="error === undefined || error === '' ? 0 : 'auto'"
				class="text-red-500 text-xs"
			>
				<div class="mt-1">{{ error ?? zeroWidth }}</div>
			</AnimateHeight>
		</div>
	</div>
</template>

<style lang="postcss">
textarea:where(.app-input),
input:where(.app-input) {
	@apply block w-full px-4 py-2 text-gray-700 bg-white border-2 border-gray-200 rounded-md transition-colors focus:(border-blue-400 ring ring-blue-300 ring-opacity-4 outline-none);
}
</style>
