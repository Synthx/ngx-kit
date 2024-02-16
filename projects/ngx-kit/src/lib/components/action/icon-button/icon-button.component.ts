import { Component, Input, booleanAttribute } from "@angular/core";

@Component({
	standalone: true,
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: "button[kit-icon-button]",
	templateUrl: "./icon-button.component.html",
	host: {
		"[disabled]": "disabled",
		"[attr.aria-disabled]": "disabled",
		"[attr.role]": '"button"',
		"[class]": '"kit-icon-button kit-icon-button_variant--" + variant',
	},
})
export class KitIconButton {
	@Input()
	variant: "primary" | "secondary" | "default" = "default";

	@Input({ transform: booleanAttribute })
	disabled = false;
}
