import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsListComponent } from './containers/songs-list/songs-list.component';
import { SongsListRoutingModule } from './songs-routing.module';
import { SongAddComponent } from './containers/song-add/song-add.component';
import { SongEditComponent } from './containers/song-edit/song-edit.component';
import { CoreModule } from 'src/app/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SongsListComponent, SongAddComponent, SongEditComponent],
  imports: [CommonModule, SongsListRoutingModule, ReactiveFormsModule],
})
export class SongsModule {}
