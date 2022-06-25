import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongCoverComponent } from './component/song-cover.component';

@NgModule({
  declarations: [SongCoverComponent],
  imports: [CommonModule],
  exports: [SongCoverComponent],
})
export class SongCoverModule {}
