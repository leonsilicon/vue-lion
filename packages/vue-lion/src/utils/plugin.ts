import '~/types/components.js';

import type { Plugin } from 'vue';

import * as VueLionComponents from '~/components/index.js';

export const VueLionPlugin: Plugin = {
	install(app) {
		for (const [componentName, component] of Object.entries(
			VueLionComponents
		)) {
			app.component(componentName, component);
		}
	},
};
