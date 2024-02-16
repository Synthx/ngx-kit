import { DialogRef } from "@angular/cdk/dialog";

export class KitDialogRef<C, R = unknown> {
	constructor(private readonly dialogRef: DialogRef<R, C>) {}

	dismiss(result?: R): void {
		this.dialogRef.close(result);
	}
}
