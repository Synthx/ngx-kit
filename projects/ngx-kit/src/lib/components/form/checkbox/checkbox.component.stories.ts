import { JsonPipe } from "@angular/common";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import {
	Meta,
	StoryObj,
	componentWrapperDecorator,
	moduleMetadata,
} from "@storybook/angular";
import { KitCheckbox } from "./checkbox.component";

export default {
	title: "Component / Form / Checkbox",
	tags: ["autodocs"],
	component: KitCheckbox,
	decorators: [
		componentWrapperDecorator(
			(story) => `<div style='width: 390px'>${story}</div>`,
		),
		moduleMetadata({
			imports: [JsonPipe, ReactiveFormsModule],
		}),
	],
	argTypes: {
		id: {
			description: "The custom id of the checkbox.",
		},
	},
} as Meta<KitCheckbox>;

type Story = StoryObj<KitCheckbox>;
export const Default: Story = {
	render: (args) => {
		const control = new FormControl(false);

		return {
			props: { ...args, control },
			template: `
                <kit-checkbox [formControl]='control' [id]='id'>Label</kit-checkbox>
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
                <kit-checkbox [formControl]='control' [id]='id'>Label</kit-checkbox>
                <pre class='storybook-code'>{{ control.value | json }}</pre>`,
		};
	},
};

export const Required: Story = {
	render: (args) => {
		const control = new FormControl(false, [Validators.required]);

		return {
			props: { ...args, control },
			template: `
                <kit-checkbox required [formControl]='control' [id]='id'>Label</kit-checkbox>
                <pre class='storybook-code'>{{ control.value | json }}</pre>`,
		};
	},
};
