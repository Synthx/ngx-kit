import { setCompodocJson } from "@storybook/addon-docs/angular";
import type { Preview } from "@storybook/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: "^on[A-Z].*" },
		controls: {
			expanded: true,
		},
		layout: "centered",
	},
};

export default preview;
