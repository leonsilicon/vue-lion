import { Plugin } from 'vue';
import * as VueLionComponents from '~/components/index.js';
import '~/types/components.js';

export const VueLionPlugin: Plugin = {
	install(app) {
		for (const [componentName, component] of Object.entries(
			VueLionComponents
		)) {
			app.component(componentName, component);
		}
	},
};
