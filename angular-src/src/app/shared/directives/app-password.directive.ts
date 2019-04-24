import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appPassword]'
})
export class AppPasswordDirective {

  private _shown = false;

  constructor(private el: ElementRef) {
    this.setup();
  }

  setup() {
    const parent = this.el.nativeElement.parentNode;
    const span = document.createElement('span');
    span.className += 'input-group-append';
    span.innerHTML = `<div class="input-group-text" style="background-color:#f7f7f9;cursor:pointer"><i class="fas fa-eye-slash"></i></div>`;
    span.addEventListener('click', (event) => {
      this.toggle(span);
    });
    parent.appendChild(span);
  }

  toggle(span: HTMLElement) {
    this._shown = !this._shown;
    if (this._shown) {
      this.el.nativeElement.setAttribute('type', 'text');
      span.innerHTML = '<div class="input-group-text" style="background-color:#f7f7f9;cursor:pointer"><i class="fas fa-eye"></i></div>';
    } else {
      this.el.nativeElement.setAttribute('type', 'password');
      span.innerHTML = '<div class="input-group-text" style="background-color:#f7f7f9;cursor:pointer"><i class="fas fa-eye-slash"></i></div>';
    }
  }

}
