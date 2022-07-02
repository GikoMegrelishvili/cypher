import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$ = this._auth.user;

  constructor(private _auth: AngularFireAuth) {}

  signUp(email: string, password: string) {
    return from(
      this._auth
        .createUserWithEmailAndPassword(email, password)
        .then((response: any) => {
          console.log(response.user);
        })
        .catch((error: any) => {
          console.log(error);
        })
    );
  }

  signIn(email: string, password: string) {
    return from(
      this._auth
        .signInWithEmailAndPassword(email, password)
        .then((response: any) => {
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
