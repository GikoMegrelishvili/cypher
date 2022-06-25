import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsListComponent } from './containers/songs-list/songs-list.component';
import { SongsListRoutingModule } from './songs-routing.module';
import { SongAddComponent } from './containers/song-add/song-add.component';
import { SongEditComponent } from './containers/song-edit/song-edit.component';
import { SongViewComponent } from './containers/song-view/song-view.component';

@NgModule({
  declarations: [SongsListComponent, SongAddComponent, SongEditComponent, SongViewComponent],
  imports: [CommonModule, SongsListRoutingModule],
})
export class SongsModule {}
