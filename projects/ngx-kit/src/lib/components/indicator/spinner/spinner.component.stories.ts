import { Meta, StoryObj, argsToTemplate } from "@storybook/angular";
import { KitSpinner } from "./spinner.component";

const meta: Meta<KitSpinner> = {
	title: "Component / Indicator / Spinner",
	tags: ["autodocs"],
	component: KitSpinner,
	argTypes: {
		size: {
			control: "select",
			description: "The size of the spinner.",
		},
	},
	args: {
		size: "medium",
	},
	render: (args) => ({
		props: args,
		template: `<kit-spinner ${argsToTemplate(args)} />`,
	}),
};
export default meta;

type Story = StoryObj<KitSpinner>;
export const Default: Story = {};

export const Size: Story = {
	render: () => ({
		template: `<kit-spinner size='small' />`,
	}),
};
