import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
})
export class ProfileViewComponent implements OnInit {
  public user!: UserModel;

  constructor(
    private _authFire: AngularFireAuth,
    private _fireStore: AngularFirestore
  ) {}

  ngOnInit(): void {
    this._authFire.authState.subscribe((user) => {
      // console.log(user);
      this._fireStore
        .collection('users')
        .doc(user?.uid)
        .valueChanges()
        .subscribe((user) => {
          // console.log(user);
          this.user = user as UserModel;
        });
    });
  }
}
