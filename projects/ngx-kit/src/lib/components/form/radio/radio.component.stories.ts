import { JsonPipe } from "@angular/common";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import {
	Meta,
	StoryObj,
	componentWrapperDecorator,
	moduleMetadata,
} from "@storybook/angular";
import { KitRadio } from "./radio.component";
import { KitRadioModule } from "./radio.module";

export default {
	title: "Component / Form / Radio",
	tags: ["autodocs"],
	component: KitRadio,
	decorators: [
		componentWrapperDecorator(
			(story) => `<div style='width: 390px'>${story}</div>`,
		),
		moduleMetadata({
			imports: [JsonPipe, ReactiveFormsModule, KitRadioModule],
		}),
	],
} as Meta<KitRadio>;

type Story = StoryObj<KitRadio>;
export const Default: Story = {
	render: (args) => {
		const control = new FormControl("1");

		return {
			props: { ...args, control },
			template: `
                <kit-radio-group [formControl]='control'>
                    <kit-radio value='1' [reversed]='reversed'>Option 1</kit-radio>
                    <kit-radio value='2' [reversed]='reversed'>Option 2</kit-radio>
                </kit-radio-group>
                <pre class='storybook-code'>{{ control.value | json }}</pre>`,
		};
	},
};

export const Reversed: Story = {
	args: { reversed: true },
	render: (args) => {
		const control = new FormControl("1");

		return {
			props: { ...args, control },
			template: `
                <kit-radio-group [formControl]='control'>
                    <kit-radio value='1' [reversed]='reversed'>Option 1</kit-radio>
                    <kit-radio value='2' [reversed]='reversed'>Option 2</kit-radio>
                </kit-radio-group>
                <pre class='storybook-code'>{{ control.value | json }}</pre>`,
		};
	},
};
