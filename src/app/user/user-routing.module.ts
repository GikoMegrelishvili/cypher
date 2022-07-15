import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './containers/login/login.component';
import { ProfileViewComponent } from './containers/profile-view/profile-view.component';
import { RegisterComponent } from './containers/register/register.component';
import {
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['user/auth']);
const redirectToHome = () => redirectLoggedInTo(['user/profile']);

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth',
    component: LoginComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectToHome },
  },

  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectToHome },
  },
  {
    path: 'profile',
    component: ProfileViewComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectToLogin },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
