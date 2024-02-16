import {
	AfterContentInit,
	Component,
	ContentChildren,
	Directive,
	InjectionToken,
	Input,
	OnInit,
	QueryList,
	booleanAttribute,
	forwardRef,
	inject,
} from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { Nullable, OnChangeFn, OnTouchedFn } from "../../../core";

export const KIT_RADIO_GROUP = new InjectionToken<KitRadioGroup>(
	"KitRadioGroup",
);

let nextId = 0;

@Directive({
	selector: "kit-radio-group",
	providers: [
		{
			provide: KIT_RADIO_GROUP,
			useExisting: KitRadioGroup,
		},
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => KitRadioGroup),
			multi: true,
		},
	],
	host: {
		class: "kit-radio-group",
		role: "radiogroup",
	},
})
export class KitRadioGroup implements ControlValueAccessor, AfterContentInit {
	@ContentChildren(
		forwardRef(() => KitRadio),
		{ descendants: true },
	)
	buttons?: QueryList<KitRadio>;

	selected?: KitRadio;

	onChange: OnChangeFn = (_) => {};
	onTouched: OnTouchedFn = () => {};

	private _value: unknown = undefined;
	private _inputName = `kit-radio-group-${++nextId}`;

	registerOnTouched(fn: OnTouchedFn) {
		this.onTouched = fn;
	}

	registerOnChange(fn: OnChangeFn) {
		this.onChange = fn;
	}

	writeValue(value: unknown) {
		this._value = value;
		this._updateSelectedRadioFromValue();
	}

	ngAfterContentInit(): void {
		if (this.buttons) {
			for (const button of this.buttons) {
				button.name = this._inputName;
			}
		}

		this._updateSelectedRadioFromValue();
	}

	private _updateSelectedRadioFromValue(): void {
		const isAlreadySelected = this.selected?.value === this._value;
		if (this.buttons && !isAlreadySelected) {
			this.selected = undefined;

			for (const button of this.buttons) {
				button.checked = button.value === this._value;
				if (button.checked) {
					this.selected = button;
				}
			}
		}
	}
}

@Component({
	selector: "kit-radio",
	templateUrl: "./radio.component.html",
})
export class KitRadio implements OnInit {
	@Input({ required: true })
	value: unknown;

	@Input({ transform: booleanAttribute })
	reversed = false;

	@Input()
	id: Nullable<string>;

	name: Nullable<string>;
	checked = false;

	private readonly group = inject(KIT_RADIO_GROUP, { optional: true });
	private _uniqueId = `kit-radio-${nextId++}`;

	ngOnInit(): void {
		if (!this.group) {
			throw new Error("cannot use kit-radio outside kit-radio-group");
		}
	}

	_onValueChanged(event: Event): void {
		event.stopPropagation();
		this.group?.onChange(this.value);
	}

	get inputId(): string {
		return this.id ?? this._uniqueId;
	}
}
