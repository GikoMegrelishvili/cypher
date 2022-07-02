import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/admin/containers/auth/auth.service';
import { LoadingService } from 'src/app/shared/loading/loading.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @ViewChild('nav', { static: true }) nav!: ElementRef;

  constructor(
    public _authService: AuthService,
    private _router: Router,
    private _loadingService: LoadingService
  ) {}

  ngOnInit(): void {}

  navOpen() {
    this.nav.nativeElement.classList.toggle('active');
  }

  onSignOut() {
    this._authService.signOut();
  }

  onSignIn() {
    this._router.navigate(['/admin']);
  }
}
