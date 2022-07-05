import { Injectable } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$ = this._fireAuth.user as Observable<User>;

  constructor(private _fireAuth: AngularFireAuth) {}

  signUp(value: any) {
    return from(
      this._fireAuth
        .createUserWithEmailAndPassword(value.email, value.password)
        .then((response: any) => {
          console.log(response.user);
        })
        .catch((error: any) => {
          console.log(error);
        })
    );
  }

  signIn(value: any) {
    return this._fireAuth
      .signInWithEmailAndPassword(value.email, value.password)
      .then((response: any) => {
        console.log(response.user);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  signOut() {
    return this._fireAuth.signOut();
  }
}
