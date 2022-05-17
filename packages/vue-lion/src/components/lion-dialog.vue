<script lang="ts">
export default {
	inheritAttrs: false,
};
</script>

<script setup lang="ts">
import {
	Dialog,
	DialogOverlay,
	TransitionChild,
	TransitionRoot,
} from '@headlessui/vue';

const { modelValue, closeOnBlur = true } = defineProps<{
	modelValue: boolean;
	closeOnBlur?: boolean;
}>();

let isOpen = $computed({
	get() {
		return modelValue;
	},
	set(isOpen: boolean) {
		emit('update:modelValue', isOpen);
	},
});

const emit = defineEmits<{
	(event: 'update:modelValue', value: boolean): void;
}>();

function onClose() {
	if (closeOnBlur) {
		isOpen = false;
	}
}
</script>

<template>
	<TransitionRoot appear :show="isOpen" as="template" @close="onClose">
		<Dialog as="div" class="relative z-10" v-bind="$attrs">
			<TransitionChild
				as="template"
				enter="duration-300 ease-out"
				enter-from="opacity-0"
				enter-to="opacity-100"
				leave="duration-200 ease-in"
				leave-from="opacity-100"
				leave-to="opacity-0"
			>
				<div class="fixed inset-0 bg-black bg-opacity-25"></div>
			</TransitionChild>

			<div class="fixed inset-0 overflow-y-auto">
				<div
					class="flex min-h-full items-center justify-center p-4 text-center"
				>
					<TransitionChild
						as="template"
						enter="duration-300 ease-out"
						enter-from="opacity-0 scale-95"
						enter-to="opacity-100 scale-100"
						leave="duration-200 ease-in"
						leave-from="opacity-100 scale-100"
						leave-to="opacity-0 scale-95"
					>
						<DialogOverlay
							class="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
							v-bind="$attrs"
						>
							<slot></slot>
						</DialogOverlay>
					</TransitionChild>
				</div>
			</div>
		</Dialog>
	</TransitionRoot>
</template>
