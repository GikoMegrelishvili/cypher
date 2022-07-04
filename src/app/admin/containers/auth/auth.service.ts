import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from } from 'rxjs';
import { LoadingService } from 'src/app/shared/loading/loading.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$ = this._auth.user;

  constructor(
    private _auth: AngularFireAuth,
    private _loadingService: LoadingService
  ) {}

  signUp(email: string, password: string) {
    this._loadingService.showLoading();
    return from(
      this._auth
        .createUserWithEmailAndPassword(email, password)
        .then((response: any) => {
          this._loadingService.hideLoading();
          console.log(response.user);
        })
        .catch((error: any) => {
          console.log(error);
        })
    );
  }

  signIn(email: string, password: string) {
    this._loadingService.showLoading();
    return from(
      this._auth
        .signInWithEmailAndPassword(email, password)
        .then((response: any) => {
          this._loadingService.hideLoading();
          console.log(response.user);
          console.log(this.currentUser$);
        })
        .catch((error: any) => {
          console.log(error);
        })
    );
  }

  signOut() {
    return from(this._auth.signOut());
  }
}
