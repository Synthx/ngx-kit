import { Meta, StoryObj, argsToTemplate } from "@storybook/angular";
import { KitIcon } from "./icon.component";

const meta: Meta<KitIcon> = {
	title: "Component / Icon",
	tags: ["autodocs"],
	component: KitIcon,
	argTypes: {
		name: {
			description: "The name of the icon to display.",
		},
	},
	args: {
		name: "brush-line",
	},
	render: (args) => ({
		props: args,
		template: `<kit-icon ${argsToTemplate(args)} />`,
	}),
};
export default meta;

type Story = StoryObj<KitIcon>;
export const Default: Story = {};
