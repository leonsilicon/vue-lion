<script setup lang="ts">
import { mdiEye, mdiEyeOff } from '@mdi/js';

const { modelValue, passwordError, visible } = defineProps<{
	modelValue: string;
	passwordError?: string;
	visible?: boolean;
}>();

const emit = defineEmits<{
	(event: 'update:modelValue', newPassword: string): void;
	(event: 'update:password-error', passwordError: string | undefined): void;
	(event: 'update:visible', visible: boolean): void;
}>();

let defaultIsPasswordVisible = $ref(false);

const isPasswordVisible = $computed({
	get() {
		if (visible === undefined) {
			return defaultIsPasswordVisible;
		} else {
			return visible;
		}
	},
	set(isVisible: boolean) {
		if (visible === undefined) {
			defaultIsPasswordVisible = isVisible;
		} else {
			emit('update:visible', isVisible);
		}
	},
});

const passwordModel = $computed({
	get() {
		return modelValue;
	},
	set(newPassword: string) {
		emit('update:modelValue', newPassword);
	},
});
</script>

<template>
	<AppInput
		v-model="passwordModel"
		input-class="pr-10"
		:type="isPasswordVisible ? 'text' : 'password'"
		:error="passwordError"
		@focus="emit('update:password-error', undefined)"
	>
		<template #label>
			<slot name="label">
				<div class="font-bold mb-1">Password</div>
			</slot>
		</template>
		<template #afterInput>
			<slot name="afterInput">
				<button
					type="button"
					class="absolute top-1/2 right-0 transform -translate-y-1/2 -translate-x-1/2 text-gray-500"
					@click="isPasswordVisible = !isPasswordVisible"
				>
					<VueIcon :icon="isPasswordVisible ? mdiEyeOff : mdiEye" />
				</button>
			</slot>
		</template>
	</AppInput>
</template>
