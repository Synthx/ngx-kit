import {
	Meta,
	StoryObj,
	componentWrapperDecorator,
	moduleMetadata,
} from "@storybook/angular";
import { KitButton, KitIconButton } from "../../action";
import { KitIcon } from "../../icon";
import { KitDialog } from "./dialog.component";

const meta: Meta<KitDialog> = {
	title: "Component / Overlay / Dialog",
	tags: ["autodocs"],
	component: KitDialog,
	decorators: [
		componentWrapperDecorator(
			(story) => `<div class='storybook-container'>${story}</div>`,
		),
		moduleMetadata({
			imports: [KitButton, KitIcon, KitIconButton],
		}),
	],
};
export default meta;

type Story = StoryObj<KitDialog>;
export const Default: Story = {
	render: () => ({
		template: `
            <kit-dialog>
                Nunc sed quam eget sapien molestie dignissim. Phasellus a tempus mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse dui felis.
            </kit-dialog>`,
	}),
};

export const Title: Story = {
	render: () => ({
		template: `
            <kit-dialog>
                <span kit-dialog-title>Lorem Ipsum</span>
                Nunc sed quam eget sapien molestie dignissim. Phasellus a tempus mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse dui felis.
            </kit-dialog>`,
	}),
};

export const Action: Story = {
	render: () => ({
		template: `
            <kit-dialog>
                <span kit-dialog-title>Lorem Ipsum</span>
                Nunc sed quam eget sapien molestie dignissim. Phasellus a tempus mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse dui felis.
                <button kit-button kit-dialog-action variant='underline'>Worem</button>
                <button kit-button kit-dialog-action>Lorem</button>
            </kit-dialog>`,
	}),
};

export const Icon: Story = {
	render: () => ({
		template: `
            <kit-dialog>
                <span kit-dialog-title>Lorem Ipsum</span>
                <button kit-icon-button kit-dialog-close-button type="button">
                    <kit-icon name="close-line" />
                </button>
                Nunc sed quam eget sapien molestie dignissim. Phasellus a tempus mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse dui felis.
                <button kit-button kit-dialog-action variant='underline'>Worem</button>
                <button kit-button kit-dialog-action>Lorem</button>
            </kit-dialog>`,
	}),
};
