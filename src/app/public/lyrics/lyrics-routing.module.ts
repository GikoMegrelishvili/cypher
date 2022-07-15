import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardsGuard } from 'src/app/shared/guards/admin.guard';
import { EditLyricsComponent } from './containers/edit-lyrics/edit-lyrics.component';
import { LyricsAddComponent } from './containers/lyrics-add/lyrics-add.component';
import { LyricsPageComponent } from './containers/lyrics-page/lyrics-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'WkEBMtlTLp1IWVx39LQt', pathMatch: 'full' },
  {
    path: ':id/edit',
    component: EditLyricsComponent,
    canActivate: [GuardsGuard],
    redirectTo: '',
  },
  {
    path: ':id',
    component: LyricsPageComponent,
  },
  {
    path: 'add',
    component: LyricsAddComponent,
    canActivate: [GuardsGuard],
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LyricsRoutingModule {}
