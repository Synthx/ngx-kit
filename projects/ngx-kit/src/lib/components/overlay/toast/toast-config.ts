import { InjectionToken } from "@angular/core";

export type KitToastHorizontalPosition = "center" | "left" | "right";
export type KitToastVerticalPosition = "top" | "bottom";

export class KitToastConfig {
	duration?: number = 5000;
	horizontalPosition?: KitToastHorizontalPosition = "center";
	verticalPosition?: KitToastVerticalPosition = "bottom";
}

export const KIT_TOAST_DEFAULT_CONFIG = new InjectionToken<KitToastConfig>(
	"kit-toast-default-config",
	{
		providedIn: "root",
		factory: () => new KitToastConfig(),
	},
);
