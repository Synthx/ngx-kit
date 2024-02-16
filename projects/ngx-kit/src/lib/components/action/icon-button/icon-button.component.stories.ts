import {
	Meta,
	StoryObj,
	argsToTemplate,
	moduleMetadata,
} from "@storybook/angular";
import { KitIcon } from "../../icon";
import { KitIconButton } from "./icon-button.component";

const meta: Meta<KitIconButton> = {
	title: "Component / Action / Icon Button",
	tags: ["autodocs"],
	component: KitIconButton,
	decorators: [
		moduleMetadata({
			imports: [KitIcon],
		}),
	],
	argTypes: {
		disabled: {
			control: "boolean",
			description: "Whether the button is disabled or not.",
		},
		variant: {
			control: "select",
			description: "The variant of the button.",
		},
	},
	args: {
		variant: "default",
		disabled: false,
	},
	render: (args) => ({
		props: args,
		template: `<button kit-icon-button ${argsToTemplate(
			args,
		)}><kit-icon name="add-line" /></button>`,
	}),
};
export default meta;

type Story = StoryObj<KitIconButton>;
export const Default: Story = {};

export const Variant: Story = {
	render: () => ({
		template: `<button kit-icon-button variant="primary"><kit-icon name="add-line" /></button>`,
	}),
};

export const Disabled: Story = {
	render: () => ({
		template: `<button kit-icon-button disabled><kit-icon name="add-line" /></button>`,
	}),
};
