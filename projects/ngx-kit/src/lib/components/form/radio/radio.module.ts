import { NgClass } from "@angular/common";
import { NgModule } from "@angular/core";
import { KitRadio, KitRadioGroup } from "./radio.component";

@NgModule({
	declarations: [KitRadioGroup, KitRadio],
	exports: [KitRadioGroup, KitRadio],
	imports: [NgClass],
})
export class KitRadioModule {}
