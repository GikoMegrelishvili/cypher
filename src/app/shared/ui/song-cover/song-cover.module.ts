import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongCoverComponent } from './component/song-cover.component';
import { UtilsModule } from '../../utils/utis.module';

@NgModule({
  declarations: [SongCoverComponent],
  imports: [CommonModule, UtilsModule],
  exports: [SongCoverComponent],
})
export class SongCoverModule {}
