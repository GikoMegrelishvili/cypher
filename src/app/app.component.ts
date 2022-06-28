import { Component, OnInit, RendererFactory2 } from '@angular/core';
import { NotificationService } from './shared/notifications/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private rendererFactory: RendererFactory2, private _notificationService: NotificationService) {
    // this.rendererFactory.end = () => {
    //   console.log('loaded');
    // };

  }
  onInfo() {
    this._notificationService.info('info', 'Message', 3000);
  }
  onError() {
    this._notificationService.error('Error', 'Message', 3000);
  }
  onSuccess() {
    this._notificationService.success('Succesfully saved!', 'Anyone with a link can now view this file', 3000);
  }
}
