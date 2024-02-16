import {
	Meta,
	StoryObj,
	argsToTemplate,
	componentWrapperDecorator,
} from "@storybook/angular";
import { KitToast } from "./toast.component";

const meta: Meta<KitToast> = {
	title: "Component / Overlay / Toast",
	tags: ["autodocs"],
	component: KitToast,
	decorators: [
		componentWrapperDecorator(
			(story) => `<div class='storybook-container'>${story}</div>`,
		),
	],
	argTypes: {
		icon: {
			description: "The icon to render on the left side of the toast.",
		},
	},
	args: {
		type: "primary",
	},
	render: (args) => ({
		props: args,
		template: `
            <kit-toast ${argsToTemplate(args)}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
            </kit-toast>`,
	}),
};
export default meta;

type Story = StoryObj<KitToast>;
export const Default: Story = {};

export const Type: Story = {
	render: () => ({
		template: `
            <kit-toast type='error'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
            </kit-toast>`,
	}),
};

export const Icon: Story = {
	render: () => ({
		template: `
            <kit-toast icon='error-warning-line'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
            </kit-toast>`,
	}),
};

export const MultiLine: Story = {
	render: () => ({
		template: `
            <kit-toast icon='error-warning-line'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </kit-toast>`,
	}),
};

export const Title: Story = {
	render: () => ({
		template: `
            <kit-toast icon='error-warning-line'>
                <span kit-toast-title>Worem ipsum</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit
            </kit-toast>`,
	}),
};
