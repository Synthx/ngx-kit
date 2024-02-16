import {
	Component,
	ContentChild,
	ContentChildren,
	QueryList,
	TemplateRef,
} from "@angular/core";
import { KitFormFieldErrorComponent } from "./error/form-field-error.component";
import { KitFormFieldAction } from "./form-field-action.directive";
import { KitFormFieldHint } from "./form-field-hint.directive";
import { KitFormFieldInput } from "./form-field-input.directive";

@Component({
	selector: "kit-form-field",
	templateUrl: "./form-field.component.html",
})
export class KitFormField {
	@ContentChild(KitFormFieldInput, { static: true })
	input!: KitFormFieldInput;

	@ContentChild(KitFormFieldHint)
	hint?: KitFormFieldHint;

	@ContentChild(KitFormFieldAction)
	action?: KitFormFieldAction;

	@ContentChildren(KitFormFieldErrorComponent, { descendants: true })
	errors?: QueryList<KitFormFieldErrorComponent>;

	shouldDisplayMessage(): boolean {
		if (this.hint) return true;

		const keys = Object.keys(this.input.errors ?? {});
		if (keys.length === 0) return false;

		return this.errors?.some((e) => e.type === keys[0]) ?? false;
	}

	getDisplayedMessage(): "error" | "hint" {
		return this.errors && this.errors.length > 0 && this.input.invalid
			? "error"
			: "hint";
	}

	getErrorMessage(): TemplateRef<KitFormFieldErrorComponent> | null {
		const keys = Object.keys(this.input.errors ?? {});
		if (keys.length === 0) {
			return null;
		}

		const error = this.errors?.find((e) => e.type === keys[0]);
		return error?.templateRef ?? null;
	}
}
