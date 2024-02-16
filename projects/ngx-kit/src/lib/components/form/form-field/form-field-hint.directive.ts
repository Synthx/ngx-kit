import { Directive, Input } from "@angular/core";

@Directive({
	selector: "kit-form-field-hint",
	host: {
		class: "kit-form-field-message-hint",
	},
})
export class KitFormFieldHint {
	@Input()
	align: "start" | "end" = "start";
}
