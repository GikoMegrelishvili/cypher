import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private _auth: AngularFireAuth) {}

  signUp(username: string, email: string, password: string) {
    return from(this._auth.createUserWithEmailAndPassword(email, password));
  }

  signIn(email: string, password: string) {
    return from(this._auth.signInWithEmailAndPassword(email, password));
  }

  signOut() {
    return from(this._auth.signOut());
  }
}
