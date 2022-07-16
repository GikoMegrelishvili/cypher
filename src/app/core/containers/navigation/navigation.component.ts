import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/user/containers/user-services/auth.service';
import { filter } from 'rxjs/operators';
import { UserDataService } from 'src/app/user/containers/user-services/user-data.service';
import { SongsFacade } from 'src/app/shared/data-access/songs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @ViewChild('nav', { static: true }) nav!: ElementRef;
  currentRouteUrl: string = '';
  user$ = this._userDataServ.getCurrentUser$();
  songs$ = this._songsFacade.getAllSongs$();

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _userDataServ: UserDataService,
    private _songsFacade:SongsFacade
  ) {}

  ngOnInit(): void {
    this._router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((res: any) => {
        this.currentRouteUrl = res.url;
      });
  }

  navOpen() {
    this.nav.nativeElement.classList.toggle('active');
  }

  onSignOut() {
    this._authService.signOut();
    if (this.currentRouteUrl === '/user/profile') {
      this._router.navigate(['/home']);
    }
  }

  onSignIn() {
    this._router.navigate(['/user']);
  }
}
