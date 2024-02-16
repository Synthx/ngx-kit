import { Component, Input, booleanAttribute } from "@angular/core";
import { KitSpinner } from "../../indicator";

@Component({
	standalone: true,
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: "button[kit-button]",
	templateUrl: "./button.component.html",
	imports: [KitSpinner],
	host: {
		"[disabled]": "disabled || loading",
		"[attr.aria-disabled]": "disabled",
		"[attr.role]": '"button"',
		"[class]": '"kit-button kit-button_variant--" + variant',
		"[class.kit-button--loading]": "loading",
	},
})
export class KitButton {
	@Input()
	variant: "primary" | "secondary" | "tertiary" | "underline" | "ghost" =
		"primary";

	@Input({ transform: booleanAttribute })
	disabled = false;

	@Input({ transform: booleanAttribute })
	loading = false;
}
