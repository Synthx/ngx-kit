import { JsonPipe } from "@angular/common";
import {
	AsyncValidatorFn,
	FormControl,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
import {
	Meta,
	StoryObj,
	componentWrapperDecorator,
	moduleMetadata,
} from "@storybook/angular";
import { delay, of } from "rxjs";
import { KitIconButton } from "../../action";
import { KitIcon } from "../../icon";
import { blurInputErrorStateMatcher } from "./form-field-input.options";
import { KitFormField } from "./form-field.component";
import { KitFormFieldModule } from "./form-field.module";

const meta: Meta<KitFormField> = {
	title: "Component / Form / Field",
	tags: ["autodocs"],
	component: KitFormField,
	decorators: [
		componentWrapperDecorator(
			(story) => `<div style='width: 390px'>${story}</div>`,
		),
		moduleMetadata({
			imports: [
				JsonPipe,
				ReactiveFormsModule,
				KitFormFieldModule,
				KitIconButton,
				KitIcon,
			],
		}),
	],
};
export default meta;

type Story = StoryObj<KitFormField>;
export const Default: Story = {
	args: {},
	render: (args) => {
		const control = new FormControl("");

		return {
			props: { ...args, control },
			template: `
                <kit-form-field>
                    Label
                    <input kitFormFieldInput [formControl]='control'>
                </kit-form-field>
                <pre class='storybook-code'>{{ control.value | json }}</pre>`,
		};
	},
};

export const Hint: Story = {
	...Default,
	render: (args) => {
		const control = new FormControl("");

		return {
			props: { ...args, control },
			template: `
                <kit-form-field>
                    Label
                    <input kitFormFieldInput [formControl]='control'>
                    <kit-form-field-hint>This is a hint</kit-form-field-hint>
                </kit-form-field>
                <pre class='storybook-code'>{{ control.value | json }}</pre>`,
		};
	},
};

export const Action: Story = {
	...Default,
	render: (args) => {
		const control = new FormControl("");

		return {
			props: { ...args, control },
			template: `
                <kit-form-field>
                    Label
                    <input kitFormFieldInput [formControl]='control'>
                    <button kit-icon-button kitFormFieldAction>
                        <kit-icon name="eye-line" />
                    </button>
                </kit-form-field>
                <pre class='storybook-code'>{{ control.value | json }}</pre>`,
		};
	},
};

export const Invalid: Story = {
	...Default,
	render: (args) => {
		const control = new FormControl("", [
			Validators.required,
			Validators.email,
		]);

		return {
			props: { ...args, control },
			template: `
                <kit-form-field>
                    Email
                    <input kitFormFieldInput type='email' [formControl]='control'>
                    <kit-form-field-error type='required'>This field is required</kit-form-field-error>
                    <kit-form-field-error type='email'>This field should be an email</kit-form-field-error>
                </kit-form-field>
                <pre class='storybook-code'>{{ control.value | json }}</pre>`,
		};
	},
};

export const ErrorStateMatcher: Story = {
	...Default,
	render: (args) => {
		const control = new FormControl("", [
			Validators.required,
			Validators.email,
		]);
		const stateMatcher = blurInputErrorStateMatcher;

		return {
			props: { ...args, control, stateMatcher },
			template: `
                <kit-form-field>
                    Email
                    <input kitFormFieldInput type='email' [formControl]='control' [stateMatcher]='stateMatcher'>
                    <kit-form-field-hint>Error will be displayed after blur event</kit-form-field-hint>
                    <kit-form-field-error type='required'>This field is required</kit-form-field-error>
                    <kit-form-field-error type='email'>This field should be an email</kit-form-field-error>
                </kit-form-field>
                <pre class='storybook-code'>{{ control.value | json }}</pre>`,
		};
	},
};

export const Pending: Story = {
	...Default,
	render: (args) => {
		const fakeAsyncValidator: AsyncValidatorFn = (_) => {
			return of({ async: true }).pipe(delay(3000));
		};
		const control = new FormControl("", {
			validators: [Validators.required],
			asyncValidators: [fakeAsyncValidator],
			updateOn: "blur",
		});

		return {
			props: { ...args, control },
			template: `
                <kit-form-field>
                    Label
                    <input kitFormFieldInput [formControl]='control'>
                    <kit-form-field-hint>Async error will be displayed after 3 seconds</kit-form-field-hint>
                    <kit-form-field-error type='required'>This field is required</kit-form-field-error>
                    <kit-form-field-error type='async'>This field is incorrect</kit-form-field-error>
                </kit-form-field>
                <pre class='storybook-code'>{{ control.value | json }}</pre>`,
		};
	},
};

export const Disabled: Story = {
	...Default,
	render: (args) => {
		const control = new FormControl("value");
		control.disable();

		return {
			props: { ...args, control },
			template: `
                <kit-form-field>
                    Label
                    <input kitFormFieldInput [formControl]='control'>
                </kit-form-field>
                <pre class='storybook-code'>{{ control.value | json }}</pre>`,
		};
	},
};

export const Textarea: Story = {
	...Default,
	render: (args) => {
		const control = new FormControl("");

		return {
			props: { ...args, control },
			template: `
                <kit-form-field>
                    Label
                    <textarea kitFormFieldInput [formControl]='control'></textarea>
                </kit-form-field>
                <pre class='storybook-code'>{{ control.value | json }}</pre>`,
		};
	},
};

export const Select: Story = {
	...Default,
	render: (args) => {
		const control = new FormControl("1");

		return {
			props: { ...args, control },
			template: `
                <kit-form-field>
                    Label
                    <select kitFormFieldInput [formControl]='control'>
                        <option value='1'>Option 1</option>
                        <option value='2'>Option 2</option>
                    </select>
                </kit-form-field>
                <pre class='storybook-code'>{{ control.value | json }}</pre>`,
		};
	},
};
