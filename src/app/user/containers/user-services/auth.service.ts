import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUser$ = this._fireAuth.authState;

  constructor(private _fireAuth: AngularFireAuth) {}

  signUp(email: string, password: string) {
    return from(this._fireAuth.createUserWithEmailAndPassword(email, password));
  }

  signIn(email: string, password: string) {
    return from(this._fireAuth.signInWithEmailAndPassword(email, password));
  }

  signOut() {
    return this._fireAuth.signOut();
  }

  // updateProfileData(profileData: Partial<UserInfo>): Observable<any> {
  //   const user = this._fireAuth.currentUser;
  //   return of(user).pipe(
  //     concatMap((user) => {
  //       if (!user) throw new Error('User is not authenticated');

  //       return updateProfile(user, profileData);
  //     })
  //   );
  // }
}
