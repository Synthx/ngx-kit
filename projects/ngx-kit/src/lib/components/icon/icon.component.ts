import { NgStyle } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
	standalone: true,
	selector: "kit-icon",
	templateUrl: "./icon.component.html",
	imports: [NgStyle],
})
export class KitIcon {
	@Input({ required: true })
	name!: string;
}
