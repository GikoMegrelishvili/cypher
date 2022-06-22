import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistBoxComponent } from './components/artist-box/artist-box.component';
import { ArtistsListComponent } from './containers/artists-list/artists-list.component';

const routes: Routes = [
  {
    path: '',
    component: ArtistsListComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistsRoutingModule {}
