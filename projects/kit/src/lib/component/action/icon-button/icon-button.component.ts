import { Component, EventEmitter, Input, Output } from '@angular/core';
import { KtIcon, KtIconComponent } from '../../icon/icon.component';

@Component({
    standalone: true,
    selector: 'kt-icon-button',
    templateUrl: './icon-button.component.html',
    imports: [KtIconComponent],
})
export class KtIconButtonComponent {
    @Input()
    icon!: KtIcon;

    @Input()
    variant: 'primary' | 'ghost' = 'primary';

    @Input()
    shape: 'rounded' | 'circle' | 'none' = 'rounded';

    @Input()
    size: 'small' | 'medium' | 'large' = 'medium';

    @Output()
    onTap = new EventEmitter<MouseEvent>();
}
