import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Nullable, OnChangeFn, OnTouchedFn } from "../../../core";

let nextId = 0;

@Component({
	standalone: true,
	selector: "kit-toggle",
	templateUrl: "./toggle.component.html",
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => KitToggle),
			multi: true,
		},
	],
})
export class KitToggle implements ControlValueAccessor {
	checked = false;
	disabled = false;

	private _uniqueId = `kit-toggle-input-${nextId++}`;

	onChange: OnChangeFn<boolean> = (_) => {};
	onTouch: OnTouchedFn = () => {};

	@Input()
	id: Nullable<string>;

	get inputId(): string {
		return this.id ?? this._uniqueId;
	}

	toggle(): void {
		this.checked = !this.checked;
		this.onChange(this.checked);
	}

	setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

	writeValue(value: unknown): void {
		this.checked = !!value;
	}

	registerOnChange(fn: OnChangeFn): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: OnTouchedFn): void {
		this.onTouch = fn;
	}
}
