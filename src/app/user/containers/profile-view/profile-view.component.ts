import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/user/containers/auth/auth.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss'],
})
export class ProfileViewComponent implements OnInit {
  public user$ = new Observable<any>();

  constructor(private _authService: AuthService) {}

  ngOnInit(): void {
    this.user$ = this._authService.currentUser$;
    this.user$.subscribe((res) => {
      console.log(res);
    });
  }
}
