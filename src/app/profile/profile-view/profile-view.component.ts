import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/admin/containers/auth/auth.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
})
export class ProfileViewComponent implements OnInit {
  user: any;
  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this._authService.currentUser$.subscribe((user: any) => {
      this.user = user;
      console.log(this.user);
    });
  }
}
