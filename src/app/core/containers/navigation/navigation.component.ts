import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/user/containers/auth/auth.service';
import { filter } from 'rxjs/operators';
import { UserModel } from 'src/app/user/models/user.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @ViewChild('nav', { static: true }) nav!: ElementRef;
  currentRouteUrl: string = '';
  currentUser!: UserModel;

  constructor(
    public _authService: AuthService,
    private _router: Router,
    private _fireAuth: AngularFireAuth
  ) {}

  ngOnInit(): void {
    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((res: any) => {
        this.currentRouteUrl = res.url;
        // console.log(this.currentRouteUrl);
      });
    this._fireAuth.authState.subscribe((user) => {
      // console.log(user);
      // console.log(user?.uid);
    });
  }

  navOpen() {
    this.nav.nativeElement.classList.toggle('active');
  }

  onSignOut() {
    this._authService.signOut();
    console.log(this.currentRouteUrl);
    if (this.currentRouteUrl === '/user/profile') {
      console.log('hi');
      this._router.navigate(['/home']);
    }
  }

  onSignIn() {
    this._router.navigate(['/user']);
  }
}
