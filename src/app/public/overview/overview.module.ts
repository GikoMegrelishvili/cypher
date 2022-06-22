import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OverviewPageComponent } from './overview-page/overview-page.component';
import { OverviewPageRoutingModule } from './overview-routing.module';

@NgModule({
  declarations: [OverviewPageComponent],
  imports: [CommonModule, OverviewPageRoutingModule],
})
export class OverviewModule {}
