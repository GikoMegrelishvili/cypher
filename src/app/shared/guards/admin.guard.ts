import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { relative } from 'path';
import { map, Observable, take } from 'rxjs';
import { UserDataService } from '../../user/containers/user-services/user-data.service';

@Injectable({
  providedIn: 'root',
})
export class GuardsGuard implements CanActivate {
  constructor(
    private _userDataServ: UserDataService,
    private _router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this._userDataServ.getCurrentUser$().pipe(
      take(1),
      // map((user) => {
      //   return user?.role === 'admin' ? true : false;
      // })
      map((user) => {
        return user?.role === 'admin'
          ? true
          : this._router.createUrlTree(['/']);
      })
    );
  }
}
