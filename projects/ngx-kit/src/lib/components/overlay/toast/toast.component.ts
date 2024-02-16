import { Component, Input } from "@angular/core";
import { KitIcon } from "../../icon";

export * from "./simple-toast/simple-toast.component";
export * from "./toast-config";
export * from "./toast-data";
export * from "./toast-ref";
export * from "./toast.service";

export type KitToastType = "primary" | "validation" | "warning" | "error";

@Component({
	standalone: true,
	selector: "kit-toast",
	templateUrl: "./toast.component.html",
	imports: [KitIcon],
})
export class KitToast {
	@Input()
	type: KitToastType = "primary";

	@Input()
	icon?: string;
}
