import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsListComponent } from './containers/songs-list/songs-list.component';
import { SongsListRoutingModule } from './songs-routing.module';

@NgModule({
  declarations: [SongsListComponent],
  imports: [CommonModule, SongsListRoutingModule],
})
export class SongsModule {}
