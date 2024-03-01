import {
	Meta,
	StoryObj,
	componentWrapperDecorator,
	moduleMetadata,
} from "@storybook/angular";
import { KitButton, KitIconButton } from "../../action";
import { KitIcon } from "../../icon";
import { KitBottomSheet } from "./bottom-sheet.component";

const meta: Meta<KitBottomSheet> = {
	title: "Component / Overlay / Bottom Sheet",
	tags: ["autodocs"],
	component: KitBottomSheet,
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

type Story = StoryObj<KitBottomSheet>;
export const Default: Story = {
	render: () => ({
		template: `
            <kit-bottom-sheet>
                Nunc sed quam eget sapien molestie dignissim. Phasellus a tempus mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse dui felis.
            </kit-bottom-sheet>`,
	}),
};

export const Title: Story = {
	render: () => ({
		template: `
            <kit-bottom-sheet>
                <span kit-bottom-sheet-title>Lorem Ipsum</span>
                Nunc sed quam eget sapien molestie dignissim. Phasellus a tempus mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse dui felis.
            </kit-bottom-sheet>`,
	}),
};

export const Action: Story = {
	render: () => ({
		template: `
            <kit-bottom-sheet>
                <span kit-bottom-sheet-title>Lorem Ipsum</span>
                Nunc sed quam eget sapien molestie dignissim. Phasellus a tempus mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse dui felis.
                <button kit-button kit-bottom-sheet-action variant='underline'>Worem</button>
                <button kit-button kit-bottom-sheet-action>Lorem</button>
            </kit-bottom-sheet>`,
	}),
};

export const Icon: Story = {
	render: () => ({
		template: `
            <kit-bottom-sheet>
                <span kit-bottom-sheet-title>Lorem Ipsum</span>
                <button kit-icon-button kit-bottom-sheet-close-button type="button">
                    <kit-icon name="close-line" />
                </button>
                Nunc sed quam eget sapien molestie dignissim. Phasellus a tempus mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse dui felis.
                <button kit-button kit-bottom-sheet-action variant='underline'>Worem</button>
                <button kit-button kit-bottom-sheet-action>Lorem</button>
            </kit-bottom-sheet>`,
	}),
};
