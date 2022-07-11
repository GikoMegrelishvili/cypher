import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardsGuard } from 'src/app/shared/guards/admin.guard';
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
  {
    path: 'add',
    component: ArtistAddComponent,
    canActivate: [GuardsGuard],
    redirectTo: '',
  },
  { path: ':id/view', component: ArtistViewComponent },
  {
    path: ':id/edit',
    component: ArtistEditComponent,
    canActivate: [GuardsGuard],
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArtistsRoutingModule {}
