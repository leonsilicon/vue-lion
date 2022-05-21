<script setup lang="ts">
import DOMPurify from 'isomorphic-dompurify';

const {
	message = undefined,
	hasError = undefined,
	useHtml = false,
} = defineProps<{
	/**
		The text of the error message
	*/
	message?: string;

	/**
		Whether or not an error is present (defaults to whether the error string is empty)
	*/
	hasError?: boolean;

	/**
		Whether or not the error should use inline HTML (the HTML is sanitized as a precaution)
	*/
	useHtml?: boolean;
}>();

const escapedMessage = $computed(() => {
	if (message === undefined) return '';

	if (useHtml) {
		return DOMPurify.sanitize(message);
	} else {
		return message;
	}
});

const shouldDisplayError = $computed(() => {
	if (hasError === undefined) {
		return message !== undefined && message.trim() !== '';
	} else {
		return hasError;
	}
});
</script>

<template>
	<div v-if="shouldDisplayError" class="lion-error">
		<div v-if="useHtml" v-html="escapedMessage"></div>
		<div v-else>{{ message }}</div>
	</div>
</template>

<style lang="postcss">
.lion-error {
	@apply text-sm text-red-500;
}
</style>
