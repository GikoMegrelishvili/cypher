import { Directive, Input, ElementRef } from '@angular/core';
@Directive({
  selector: 'img[imgHandler]',
  host: {
    '(error)': 'updateUrl($event)',
    '(load)': 'load()',
    '[src]': 'src',
  },
})
export class ImgHandlerDirective {
  @Input() src!: string;
  constructor(private _elRef: ElementRef) {
    this.startLoading();
  }
  startLoading() {
    this.src = ''
    this._elRef.nativeElement.classList.add('img-loading');
  }
  updateUrl(event: any) {
    this._elRef.nativeElement.classList.add('img-not-found');
  }
  load() {
    this._elRef.nativeElement.classList.remove('img-loading');
    this._elRef.nativeElement.classList.remove('img-not-found');
  }
}
