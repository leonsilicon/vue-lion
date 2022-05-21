<script setup lang="ts">
import {
	Combobox,
	ComboboxInput,
	ComboboxOptions,
	TransitionRoot,
} from '@headlessui/vue';

const { query, selected } = defineProps<{
	/**
		The value of the query
	*/
	query: string;
	/**
		The value selected
	*/
	selected?: unknown | undefined;
}>();

const emit = defineEmits<{
	(event: 'update:query', value: string): void;
	(event: 'update:selected', value: unknown | undefined): void;
}>();

const queryModel = $computed({
	get() {
		return query;
	},
	set(newQuery: string) {
		emit('update:query', newQuery);
	},
});

const selectedModel = $computed({
	get() {
		return selected;
	},
	set(newSelected: unknown | undefined) {
		emit('update:selected', newSelected);
	},
});
</script>

<template>
	<div>
		<Combobox v-model="selectedModel">
			<div class="relative mt-1">
				<div
					class="focus:outline-none relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left border-1 sm:text-sm"
				>
					<ComboboxInput
						class="lion-input"
						@change="queryModel = $event.target.value"
					/>
				</div>
				<TransitionRoot
					leave="transition ease-in duration-100"
					leave-from="opacity-100"
					leave-to="opacity-0"
					@after-leave="queryModel = ''"
				>
					<ComboboxOptions
						as="div"
						class="focus:outline-none absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white p-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm"
					>
						<slot></slot>
					</ComboboxOptions>
				</TransitionRoot>
			</div>
		</Combobox>
	</div>
</template>
