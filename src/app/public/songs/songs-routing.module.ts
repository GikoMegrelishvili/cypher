import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongAddComponent } from './containers/song-add/song-add.component';
import { SongEditComponent } from './containers/song-edit/song-edit.component';
import { SongsListComponent } from './containers/songs-list/songs-list.component';

const routes: Routes = [
  { path: '', component: SongsListComponent, pathMatch: 'full' },
  { path: 'add', component: SongAddComponent },
  { path: ':id/edit', component: SongEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongsListRoutingModule {}
