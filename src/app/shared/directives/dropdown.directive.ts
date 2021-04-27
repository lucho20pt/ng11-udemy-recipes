import { Directive, ElementRef, EventEmitter, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  isOpen:boolean = false;

  constructor( private elRef: ElementRef, private renderer: Renderer2 ) { }

  // TOGGLE dropdownMenu
  @HostListener('click') toggleOpen(): void {

    const dropdownMenu: HTMLElement = this.elRef.nativeElement.nextSibling;

    this.isOpen = !this.isOpen;

    if( this.isOpen ) {
      this.renderer.addClass(dropdownMenu, 'show');
    }
    else{
      this.renderer.removeClass(dropdownMenu, 'show');
    }
    console.log(this.isOpen);
  }

  // CLOSE dropdown if outside click
  clickOutside = new EventEmitter<Event>();

  @HostListener('document:click', ['$event', '$event.target'])
  onClick( event: Event, targetElement: HTMLElement ): void {

    if (!targetElement || this.isOpen === false ) return;

    const dropdownMenu: HTMLElement = this.elRef.nativeElement.nextSibling;
    let clickedInside = this.elRef.nativeElement.contains(targetElement);

    if (!clickedInside) {
      this.clickOutside.emit(event);
      this.renderer.removeClass(dropdownMenu,'show');
      this.isOpen = false;
    }
  }

}
