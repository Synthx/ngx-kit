import { Component, Input, booleanAttribute, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Nullable, OnChangeFn, OnTouchedFn } from "../../../core";

let nextId = 0;

@Component({
	standalone: true,
	selector: "kit-checkbox",
	templateUrl: "./checkbox.component.html",
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => KitCheckbox),
			multi: true,
		},
	],
})
export class KitCheckbox implements ControlValueAccessor {
	checked = false;
	disabled = false;

	private _uniqueId = `kit-checkbox-${nextId++}`;

	onChange: OnChangeFn<boolean> = (_) => {};
	onTouch: OnTouchedFn = () => {};

	@Input()
	id: Nullable<string>;

	@Input({ transform: booleanAttribute })
	required: Nullable<boolean>;

	get inputId(): string {
		return this.id ?? this._uniqueId;
	}

	toggle(): void {
		this.checked = !this.checked;
		this.onChange(this.checked);
	}

	writeValue(value: unknown): void {
		this.checked = !!value;
	}

	setDisabledState(isDisabled: boolean) {
		this.disabled = isDisabled;
	}

	registerOnChange(fn: OnChangeFn): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: OnTouchedFn): void {
		this.onTouch = fn;
	}
}
