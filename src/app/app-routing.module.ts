import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { redirectLoggedInTo } from '@angular/fire/auth-guard';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

const redirectToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'lyrics',
    loadChildren: () =>
      import('./public/lyrics/lyrics.module').then((m) => m.LyricsModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./public/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectToHome },
  },
  {
    path: 'artists',
    loadChildren: () =>
      import('./public/artists/artists.module').then((m) => m.ArtistsModule),
  },
  {
    path: 'songs',
    loadChildren: () =>
      import('./public/songs/songs.module').then((m) => m.SongsModule),
  },
  {
    path: 'overview',
    loadChildren: () =>
      import('./public/overview/overview.module').then((m) => m.OverviewModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
