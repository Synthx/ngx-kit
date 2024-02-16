import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import {
	ComponentType,
	Overlay,
	OverlayConfig,
	OverlayRef,
} from "@angular/cdk/overlay";
import { ComponentPortal } from "@angular/cdk/portal";
import { Injectable, Injector, inject } from "@angular/core";
import {
	KIT_TOAST_DATA,
	KIT_TOAST_DEFAULT_CONFIG,
	KitSimpleToast,
	KitToastConfig,
	KitToastRef,
	KitToastType,
} from "./toast.component";

@Injectable()
export class KitToastService {
	private readonly defaultConfig = inject(KIT_TOAST_DEFAULT_CONFIG);

	private lastRef?: KitToastRef;

	constructor(
		private readonly rootInjector: Injector,
		private readonly overlay: Overlay,
		private readonly breakpointObserver: BreakpointObserver,
	) {}

	openFromComponent<C = unknown>(
		component: ComponentType<C>,
		config?: KitToastConfig,
	): KitToastRef {
		this.lastRef?.dismiss();

		const _config: KitToastConfig = {
			...new KitToastConfig(),
			...this.defaultConfig,
			...config,
		};
		const overlayRef = this.createOverlayRef(_config);
		const toastRef = new KitToastRef(overlayRef);
		this.lastRef = toastRef;

		const injector = Injector.create({
			parent: this.rootInjector,
			providers: [{ provide: KitToastRef, useValue: toastRef }],
		});

		const componentPortal = new ComponentPortal(component, null, injector);
		overlayRef.attach(componentPortal);

		if (_config.duration && _config.duration > 0) {
			toastRef.dismissAfter(_config.duration);
		}

		return toastRef;
	}

	open(
		content: string,
		type: KitToastType = "primary",
		config?: KitToastConfig,
	): KitToastRef {
		this.lastRef?.dismiss();

		const _config: KitToastConfig = {
			...new KitToastConfig(),
			...this.defaultConfig,
			...config,
		};
		const overlayRef = this.createOverlayRef(_config);
		const toastRef = new KitToastRef(overlayRef);
		this.lastRef = toastRef;

		const injector = Injector.create({
			parent: this.rootInjector,
			providers: [
				{ provide: KitToastRef, useValue: toastRef },
				{ provide: KIT_TOAST_DATA, useValue: { content, type } },
			],
		});

		const componentPortal = new ComponentPortal(KitSimpleToast, null, injector);
		overlayRef.attach(componentPortal);

		if (_config.duration && _config.duration > 0) {
			toastRef.dismissAfter(_config.duration);
		}

		return toastRef;
	}

	dismiss(): void {
		this.lastRef?.dismiss();
	}

	private createOverlayRef(config: KitToastConfig): OverlayRef {
		const isWeb = this.breakpointObserver.isMatched(Breakpoints.Web);
		const overlayConfig: OverlayConfig = {
			maxWidth: isWeb ? "450px" : "85%",
		};

		let strategy = this.overlay.position().global();
		// set horizontal position
		if (config.horizontalPosition === "left") {
			strategy = strategy.left("15px");
		} else if (config.horizontalPosition === "right") {
			strategy = strategy.right("15px");
		} else {
			strategy = strategy.centerHorizontally();
		}

		// set vertical position
		if (config.verticalPosition === "top") {
			strategy = strategy.top("calc(15px + env(safe-area-inset-top))");
		} else {
			strategy = strategy.bottom("calc(15px + env(safe-area-inset-bottom))");
		}

		overlayConfig.positionStrategy = strategy;

		return this.overlay.create(overlayConfig);
	}
}
