import { Component, OnInit, RendererFactory2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private rendererFactory: RendererFactory2) {
    // this.rendererFactory.end = () => {
    //   console.log('loaded');
    // };
  }
}
