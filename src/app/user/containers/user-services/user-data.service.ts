import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { from, Observable, of, switchMap } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(
    private _fireStore: AngularFirestore,
    private _authServ: AuthService
  ) {}

  getCurrentUser$(): Observable<UserModel | null> {
    return this._authServ.currentUser$.pipe(
      switchMap((user) => {
        if (!user?.uid) {
          return of(null);
        }
        const docRef = this._fireStore.doc(`users/${user.uid}`);
        return docRef.valueChanges() as Observable<UserModel>;
      })
    );
  }

  addUser(user: UserModel) {
    const docRef = this._fireStore.doc(`users/${user.uid}`);
    return from(docRef.set(user));
  }

  updateUser(user: UserModel): Observable<any> {
    const docRef = this._fireStore.doc(`users/${user.uid}`);
    return from(docRef.update({ ...user }));
  }

  // uploadImage(image: File, path: string): Observable<string> {
  //   const storageRef = ref(this._storage, path);
  //   const uploadTask = from(uploadBytes(storageRef, image));
  //   return uploadTask.pipe(switchMap((result) => getDownloadURL(result.ref)));
  // }
}
