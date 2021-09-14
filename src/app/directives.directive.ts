import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirectives]'
})
export class DirectivesDirective {
color:any;
  constructor(public element:ElementRef ) { 
    this.element.nativeElement.style.backgroundColor="yellow";

  }
  private highlight(color: string) {
    // this.element.nativeElement.style.backgroundColor = color;
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appDirectives||this.defaultColor);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  @Input() appDirectives = '';
  @Input() defaultColor = '';

}
