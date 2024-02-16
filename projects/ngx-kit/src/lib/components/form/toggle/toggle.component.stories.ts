import { JsonPipe } from "@angular/common";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import {
	Meta,
	StoryObj,
	componentWrapperDecorator,
	moduleMetadata,
} from "@storybook/angular";
import { KitToggle } from "./toggle.component";

const meta: Meta<KitToggle> = {
	title: "Component / Form / Toggle",
	tags: ["autodocs"],
	component: KitToggle,
	decorators: [
		componentWrapperDecorator(
			(story) => `<div style='width: 390px'>${story}</div>`,
		),
		moduleMetadata({
			imports: [JsonPipe, ReactiveFormsModule],
		}),
	],
	argTypes: {},
};
export default meta;

type Story = StoryObj<KitToggle>;
export const Default: Story = {
	render: (args) => {
		const control = new FormControl(false);

		return {
			props: { ...args, control },
			template: `
                <kit-toggle [formControl]='control'>Label</kit-toggle>
                <pre class='storybook-code'>{{ control.value | json }}</pre>`,
		};
	},
};

export const Disabled: Story = {
	render: (args) => {
		const control = new FormControl(true);
		control.disable();

		return {
			props: { ...args, control },
			template: `
                <kit-toggle [formControl]='control'>Label</kit-toggle>
                <pre class='storybook-code'>{{ control.value | json }}</pre>`,
		};
	},
};
