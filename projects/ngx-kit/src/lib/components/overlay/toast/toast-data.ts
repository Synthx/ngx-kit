import { InjectionToken } from "@angular/core";
import { KitToastType } from "./toast.component";

export interface KitToastData {
	content: string;
	type: KitToastType;
	icon?: string;
}

export const KIT_TOAST_DATA = new InjectionToken<KitToastData>(
	"kit-toast-data",
);
