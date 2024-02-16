import { Dialog, DialogRef } from "@angular/cdk/dialog";
import { Directive, ElementRef, Input, OnInit, inject } from "@angular/core";

@Directive({
	standalone: true,
	selector: "button[kit-dialog-close]",
	host: {
		"(click)": "_onClick()",
	},
})
export class KitDialogClose implements OnInit {
	@Input("kit-dialog-close")
	result: unknown = undefined;

	dialogRef = inject(DialogRef, { optional: true });
	dialog = inject(Dialog, { optional: true });

	constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

	ngOnInit(): void {
		if (!this.dialogRef) {
			this.dialogRef = this._getClosestReference();
		}
	}

	_onClick(): void {
		this.dialogRef?.close(this.result);
	}

	private _getClosestReference(): DialogRef | null {
		if (!this.dialog) {
			return null;
		}

		const openDialogs = this.dialog.openDialogs;

		let parent: HTMLElement | null =
			this.elementRef.nativeElement.parentElement;
		while (parent && !parent.classList.contains("mat-mdc-dialog-container")) {
			parent = parent.parentElement;
		}

		return parent ? openDialogs.find((d) => d.id === parent?.id) ?? null : null;
	}
}
