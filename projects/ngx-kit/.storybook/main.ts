import type { StorybookConfig } from "@storybook/angular";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.ts"],
	addons: [
		"@storybook/addon-a11y",
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-interactions",
	],
	framework: {
		name: "@storybook/angular",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	staticDirs: [{ from: "public", to: "/public" }],
};

export default config;
