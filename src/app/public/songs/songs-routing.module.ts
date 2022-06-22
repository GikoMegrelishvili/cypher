import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsListComponent } from './containers/songs-list/songs-list.component';

const routes: Routes = [
  { path: '', component: SongsListComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SongsListRoutingModule {}
