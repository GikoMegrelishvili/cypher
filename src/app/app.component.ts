import { Component } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private _contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    return this._contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
