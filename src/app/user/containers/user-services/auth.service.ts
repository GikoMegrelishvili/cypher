import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { updateProfile, UserInfo } from 'firebase/auth';
import { concatMap, from, Observable, of } from 'rxjs';
import { UserModel } from '../../models/user.model';

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

  updateProfileData(profileData: Partial<UserInfo>): Observable<any> {
    const user = this._fireAuth.authState;
    return of(user).pipe(
      concatMap((user: any) => {
        if (!user) {
          throw new Error('User is not authenticated');
        }
        return updateProfile(user, profileData);
      })
    );
  }
}
