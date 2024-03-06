import { Dialog, DialogConfig, DialogRef } from "@angular/cdk/dialog";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { ComponentType, Overlay } from "@angular/cdk/overlay";
import { Injectable, reflectComponentType } from "@angular/core";
import { Observable } from "rxjs";
import { KitDialogRef } from "./dialog-ref";

@Injectable()
export class KitDialogService {
	constructor(
		private readonly dialog: Dialog,
		private readonly breakpointObserver: BreakpointObserver,
		private readonly overlay: Overlay,
	) {}

	private _createRef<R = unknown, D = unknown, C = unknown>(
		component: ComponentType<C>,
		config?: DialogConfig<D, DialogRef<R, C>>,
	): DialogRef<R, C> {
		const mirror = reflectComponentType(component);

		return this.dialog.open(component, {
			id: mirror?.selector,
			...config,
			providers: (dialogRef) => {
				const kitDialogRef = new KitDialogRef(dialogRef);

				return [{ provide: kitDialogRef, useValue: kitDialogRef }];
			},
		});
	}

	open<R = unknown, D = unknown, C = unknown>(
		component: ComponentType<C>,
		config?: DialogConfig<D, DialogRef<R, C>>,
	): DialogRef<R, C> {
		const defaultConfig: DialogConfig<D, DialogRef<R, C>> = {
			maxHeight: "85%",
			width: "90%",
			maxWidth: "90%",
		};

		const isWeb = this.breakpointObserver.isMatched(Breakpoints.Web);
		if (isWeb) {
			defaultConfig.width = "500px";
			defaultConfig.maxWidth = "500px";
		}

		return this._createRef<R, D, C>(component, {
			...defaultConfig,
			...config,
		});
	}

	open$<R = unknown, D = unknown, C = unknown>(
		component: ComponentType<C>,
		config?: DialogConfig<D, DialogRef<R, C>>,
	): Observable<R | undefined> {
		return this.open(component, config).closed;
	}

	openFullscreen<R = unknown, D = unknown, C = unknown>(
		component: ComponentType<C>,
		config?: DialogConfig<D, DialogRef<R, C>>,
	): DialogRef<R, C> {
		const defaultConfig: DialogConfig<D, DialogRef<R, C>> = {
			panelClass: "kit-fullscreen-dialog-panel",
			height: "100%",
			width: "100%",
			maxWidth: "100%",
		};

		const isWeb = this.breakpointObserver.isMatched(Breakpoints.Web);
		if (isWeb) {
			defaultConfig.maxHeight = "100%";
			defaultConfig.width = "550px";
			defaultConfig.maxWidth = "550px";
			defaultConfig.positionStrategy = this.overlay.position().global().right();
		}

		return this._createRef<R, D, C>(component, {
			...defaultConfig,
			...config,
		});
	}

	openFullscreen$<R = unknown, D = unknown, C = unknown>(
		component: ComponentType<C>,
		config?: DialogConfig<D, DialogRef<R, C>>,
	): Observable<R | undefined> {
		return this.openFullscreen(component, config).closed;
	}

	openBottomSheet<R = unknown, D = unknown, C = unknown>(
		component: ComponentType<C>,
		config?: DialogConfig<D, DialogRef<R, C>>,
	): DialogRef<R, C> {
		const defaultConfig: DialogConfig<D, DialogRef<R, C>> = {
			panelClass: "kit-bottom-sheet-panel",
			maxHeight: "85%",
			width: "100%",
			maxWidth: "100%",
			positionStrategy: this.overlay.position().global().bottom("0"),
		};

		const isWeb = this.breakpointObserver.isMatched(Breakpoints.Web);
		if (isWeb) {
			defaultConfig.panelClass = "kit-bottom-sheet-web-panel";
			defaultConfig.height = "100%";
			defaultConfig.maxHeight = "100%";
			defaultConfig.width = "550px";
			defaultConfig.maxWidth = "550px";
			defaultConfig.positionStrategy = this.overlay
				.position()
				.global()
				.right("0");
		}

		return this._createRef<R, D, C>(component, {
			...defaultConfig,
			...config,
		});
	}

	openBottomSheet$<R = unknown, D = unknown, C = unknown>(
		component: ComponentType<C>,
		config?: DialogConfig<D, DialogRef<R, C>>,
	): Observable<R | undefined> {
		return this.openBottomSheet(component, config).closed;
	}

	close<R = unknown, C = unknown>(
		component: ComponentType<C>,
		result?: R,
	): void {
		const mirror = reflectComponentType(component);
		if (!mirror) {
			return;
		}

		const dialogRef = this.dialog.getDialogById(mirror.selector);
		dialogRef?.close(result);
	}

	closeAll(): void {
		this.dialog.closeAll();
	}
}
