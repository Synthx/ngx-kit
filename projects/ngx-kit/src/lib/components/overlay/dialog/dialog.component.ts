import { Component } from "@angular/core";

export * from "./dialog-close.directive";
export * from "./dialog-ref";
export * from "./dialog.service";

@Component({
	standalone: true,
	selector: "kit-dialog",
	templateUrl: "./dialog.component.html",
})
export class KitDialog {}
