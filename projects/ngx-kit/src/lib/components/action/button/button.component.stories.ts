import {
	Meta,
	StoryObj,
	argsToTemplate,
	moduleMetadata,
} from "@storybook/angular";
import { KitIcon } from "../../icon";
import { KitButton } from "./button.component";

const meta: Meta<KitButton> = {
	title: "Component / Action / Button",
	tags: ["autodocs"],
	component: KitButton,
	decorators: [
		moduleMetadata({
			imports: [KitIcon],
		}),
	],
	argTypes: {
		variant: {
			control: "select",
			description: "The variant of the button.",
		},
		disabled: {
			control: "boolean",
			description: "Whether the button is disabled or not.",
		},
		loading: {
			control: "boolean",
			description: "Whether the button has triggered an action.",
		},
	},
	args: {
		variant: "primary",
		disabled: false,
		loading: false,
	},
	render: (args) => ({
		props: args,
		template: `<button kit-button ${argsToTemplate(args)}>Click me</button>`,
	}),
};
export default meta;

type Story = StoryObj<KitButton>;
export const Default: Story = {};

export const Variant: Story = {
	render: () => ({
		template: `<button kit-button variant='secondary'>Click me</button>`,
	}),
};

export const Icon: Story = {
	render: () => ({
		template: `<button kit-button><kit-icon name="brush-line" />Click me</button>`,
	}),
};

export const Disabled: Story = {
	render: () => ({
		template: `<button kit-button disabled>Click me</button>`,
	}),
};

export const Loading: Story = {
	render: () => ({
		template: `<button kit-button loading>Click me</button>`,
	}),
};
