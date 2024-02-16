import {
	NgIf,
	NgSwitch,
	NgSwitchCase,
	NgTemplateOutlet,
} from "@angular/common";
import { NgModule } from "@angular/core";
import { KitSpinner } from "../../indicator";
import { KitFormFieldErrorComponent } from "./error/form-field-error.component";
import { KitFormFieldAction } from "./form-field-action.directive";
import { KitFormFieldHint } from "./form-field-hint.directive";
import { KitFormFieldInput } from "./form-field-input.directive";
import { KitFormField } from "./form-field.component";

@NgModule({
	declarations: [
		KitFormField,
		KitFormFieldErrorComponent,
		KitFormFieldInput,
		KitFormFieldHint,
		KitFormFieldAction,
	],
	imports: [NgIf, NgTemplateOutlet, NgSwitch, NgSwitchCase, KitSpinner],
	exports: [
		KitFormField,
		KitFormFieldErrorComponent,
		KitFormFieldInput,
		KitFormFieldHint,
		KitFormFieldAction,
	],
})
export class KitFormFieldModule {}
