import { Component, Input, TemplateRef, ViewChild } from "@angular/core";

@Component({
	selector: "kit-form-field-error",
	templateUrl: "./form-field-error.component.html",
})
export class KitFormFieldErrorComponent {
	@ViewChild("templateRef")
	templateRef?: TemplateRef<KitFormFieldErrorComponent>;

	@Input({ required: true })
	type!: string;
}
