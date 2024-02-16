import { Directive, ElementRef, Input, OnChanges, inject } from "@angular/core";
import { NgControl, ValidationErrors, Validators } from "@angular/forms";
import { Nullable } from "../../../core";
import {
	InputErrorStateMatcherFn,
	defaultInputErrorStateMatcher,
} from "./form-field-input.options";

let nextId = 0;

@Directive({
	selector:
		"input[kitFormFieldInput], textarea[kitFormFieldInput], select[kitFormFieldInput]",
	host: {
		class: "kit-form-field-input",
		"[class.kit-form-field-input--select]": "_isSelect",
		"[class.kit-form-field-input--textarea]": "_isTextarea",
		"[class.kit-form-field-input--invalid]": "invalid",
		"[id]": "inputId",
		"[attr.id]": "inputId",
		"[enterkeyhint]": "mode",
		"[inputmode]": "hint",
		"(blur)": "setFocused(false)",
		"(focus)": "setFocused(true)",
	},
})
export class KitFormFieldInput implements OnChanges {
	focused = false;

	@Input()
	type: "text" | "email" | "password" | "tel" | "number" | "date" = "text";

	@Input()
	mode: Nullable<"text" | "decimal" | "numeric">;

	@Input()
	hint: Nullable<
		"enter" | "done" | "go" | "next" | "previous" | "search" | "send"
	>;

	@Input()
	id: Nullable<string>;

	@Input()
	stateMatcher: Nullable<InputErrorStateMatcherFn>;

	_isTextarea: boolean;
	_isSelect: boolean;
	_uniqueId = `kit-form-field-input-${nextId++}`;

	private readonly ngControl = inject(NgControl, { self: true });

	get inputId(): string {
		return this.id ?? this._uniqueId;
	}

	get empty(): boolean {
		return (
			!this.elementRef.nativeElement.value &&
			!this.isBadInput() &&
			!this.isNeverEmpty()
		);
	}

	get errors(): ValidationErrors | null {
		return this.ngControl.errors;
	}

	get disabled(): boolean {
		return this.ngControl.disabled ?? false;
	}

	get invalid(): boolean {
		return (
			this.stateMatcher?.(this.ngControl) ??
			defaultInputErrorStateMatcher(this.ngControl)
		);
	}

	get pending(): boolean {
		return this.ngControl.pending ?? false;
	}

	get required(): boolean {
		return this.ngControl.control?.hasValidator(Validators.required) ?? false;
	}

	constructor(
		private elementRef: ElementRef<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>,
	) {
		const element = this.elementRef.nativeElement;
		const nodeName = element.nodeName.toLowerCase();

		this._isTextarea = nodeName === "textarea";
		this._isSelect = nodeName === "select";
	}

	ngOnChanges(): void {
		if (!this._isTextarea && !this._isSelect) {
			(this.elementRef.nativeElement as HTMLInputElement).type = this.type;
		}
	}

	private isNeverEmpty() {
		const neverEmptyInputTypes = [
			"date",
			"datetime",
			"datetime-local",
			"month",
			"time",
			"week",
		];

		return neverEmptyInputTypes.indexOf(this.type) > -1;
	}

	private isBadInput() {
		return this.elementRef.nativeElement.validity.badInput;
	}

	setFocused(focused: boolean): void {
		this.focused = focused;
	}
}
