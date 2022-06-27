import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistAddComponent } from './containers/artist-add/artist-add.component';
import { ArtistEditComponent } from './containers/artist-edit/artist-edit.component';
import { ArtistViewComponent } from './containers/artist-view/artist-view.component';
import { ArtistsListComponent } from './containers/artists-list/artists-list.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistsListComponent,
    pathMatch: 'full',
  },
  { path: 'add', component: ArtistAddComponent },
  { path: ':id/view', component: ArtistViewComponent },
  { path: ':id/edit', component: ArtistEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistsRoutingModule {}
