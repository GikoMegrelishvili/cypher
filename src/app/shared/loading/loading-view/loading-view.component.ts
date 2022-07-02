import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-loading-view',
  template: `<ng-container *ngIf="loading$ | async">
    <div class="page-overlay-wrapper">
      <span>S</span>
      <span style="--delay: 0.1s">Y</span>
      <span style="--delay: 0.3s">P</span>
      <span style="--delay: 0.4s">H</span>
      <span style="--delay: 0.5s">E</span>
      <span style="--delay: 0.6s">R</span>
    </div>
  </ng-container>`,
  styleUrls: ['./loading-view.component.scss'],
})
export class LoadingViewComponent implements OnInit {
  loading$ = this._loadingService.loading$;
  constructor(private _loadingService: LoadingService) {}

  ngOnInit(): void {}
}
