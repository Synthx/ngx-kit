import { Component, Input } from "@angular/core";

@Component({
	standalone: true,
	selector: "kit-spinner",
	templateUrl: "./spinner.component.html",
})
export class KitSpinner {
	@Input()
	size: "small" | "medium" | "large" = "medium";
}
