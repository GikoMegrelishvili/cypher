import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserDataService } from '../user-services/user-data.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
})
export class ProfileViewComponent implements OnInit, OnDestroy {
  user$ = this._userDataServ.getCurrentUser$();

  profileForm = new FormGroup({
    uid: new FormControl(''),
    displayName: new FormControl(''),
    email: new FormControl(''),
    photoUrl: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    role: new FormControl(''),
  });

  constructor(private _userDataServ: UserDataService) {}

  ngOnInit(): void {
    this._userDataServ.getCurrentUser$().subscribe((user) => {
      this.profileForm.patchValue({ ...user });
    });
  }

  saveProfile() {
    const profileData = this.profileForm.value;
    this._userDataServ.updateUser(profileData);
  }

  uploadImage(event: any, user: any) {
    this._userDataServ
      .uploadImage(event.target.files[0], `images/profile/${user.uid}`)
      .subscribe((photoUrl) => {
        this.profileForm.patchValue({ photoUrl });
      });
  }

  ngOnDestroy(): void {}
}
