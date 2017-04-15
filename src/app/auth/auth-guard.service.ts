import { Injectable } from '@angular/core';

import {
  CanActivate,
  CanLoad,
  Router,
  Route,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Observable } from 'rxjs/Rx';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.checkLogin();
  }

  canLoad(route: Route): Observable<boolean> {
    return this.authService.checkLogin();
  }
}
