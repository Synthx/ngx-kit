import { Component, forwardRef, inject } from "@angular/core";
import { KIT_TOAST_DATA } from "../toast-data";
import { KitToast } from "../toast.component";

@Component({
	standalone: true,
	selector: "kit-simple-toast",
	templateUrl: "./simple-toast.component.html",
	imports: [forwardRef(() => KitToast)],
})
export class KitSimpleToast {
	readonly data = inject(KIT_TOAST_DATA);
}
