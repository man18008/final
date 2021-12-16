import { Directive, HostListener, HostBinding } from '@angular/core';


@Directive({
  selector: '[bujoDropdown]',
  exportAs: 'bujoDropdown'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen(): void {
    this.isOpen = !this.isOpen;
  }
  constructor() { }

}
