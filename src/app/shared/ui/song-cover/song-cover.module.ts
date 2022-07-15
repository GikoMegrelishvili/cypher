import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongCoverComponent } from './component/song-cover.component';
import { UtilsModule } from '../../utils/utis.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SongCoverComponent],
  imports: [CommonModule, UtilsModule, RouterModule],
  exports: [SongCoverComponent],
})
export class SongCoverModule {}
