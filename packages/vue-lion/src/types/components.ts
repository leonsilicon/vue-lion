import type LionButton from '~/components/lion-button.vue.js';
import type LionCard from '~/components/lion-card.vue.js';
import type LionCombobox from '~/components/lion-combobox.vue.js';
import type LionDialog from '~/components/lion-dialog.vue.js';
import type LionError from '~/components/lion-error.vue.js';
import type LionHidden from '~/components/lion-hidden.vue.js';
import type LionInput from '~/components/lion-input.vue.js';
import type LionLink from '~/components/lion-link.vue.js';
import type LionPasswordInput from '~/components/lion-password-input.vue.js';
import type LionSeparator from '~/components/lion-separator.vue.js';

declare module 'vue' {
	export interface GlobalComponents {
		LionButton: typeof LionButton;
		LionCard: typeof LionCard;
		LionCombobox: typeof LionCombobox;
		LionDialog: typeof LionDialog;
		LionError: typeof LionError;
		LionHidden: typeof LionHidden;
		LionInput: typeof LionInput;
		LionPasswordInput: typeof LionPasswordInput;
		LionLink: typeof LionLink;
		LionSeparator: typeof LionSeparator;
	}
}
