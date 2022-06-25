import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditLyricsComponent } from './containers/edit-lyrics/edit-lyrics.component';
import { ViewLyricsComponent } from './containers/view-lyrics/view-lyrics.component';

const routes: Routes = [
  { path: '', redirectTo: '3/edit', pathMatch: 'full' },
  {
    path: ':id/edit',
    component: EditLyricsComponent,
  },
  {
    path: ':id/view',
    component: ViewLyricsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LyricsRoutingModule {}
