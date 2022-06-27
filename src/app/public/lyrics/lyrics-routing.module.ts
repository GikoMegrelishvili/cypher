import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditLyricsComponent } from './containers/edit-lyrics/edit-lyrics.component';
import { LyricsAddComponent } from './containers/lyrics-add/lyrics-add.component';
import { ViewLyricsComponent } from './containers/view-lyrics/view-lyrics.component';

const routes: Routes = [
  { path: '', redirectTo: 'WkEBMtlTLp1IWVx39LQt/view', pathMatch: 'full' },
  {
    path: ':id/edit',
    component: EditLyricsComponent,
  },
  {
    path: ':id/view',
    component: ViewLyricsComponent,
  },
  {
    path: 'add',
    component: LyricsAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LyricsRoutingModule {}
