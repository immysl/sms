import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2';

@Injectable()
export class AuthService {
  private isLoggedIn: boolean;

  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) { }

  login(): void {
    this.auth.login();
  }

  logout(): void {
    this.auth.logout().then(() => this.router.navigate(['/login']));
  }

  checkLogin(): Observable<boolean> {
    const observable: Observable<boolean> = Observable.create((observer) => {
      this.auth.subscribe(authState => {
        if (authState) {
          observer.next(true);
        } else {
          observer.next(false);
        }

        observer.complete();
      });
    });

    return observable;
  }

  private redirectState(isLoggedIn: boolean, redirectUrl: string): void {
    if (isLoggedIn === true) {
      if (redirectUrl) {
        this.router.navigate([redirectUrl]);
      } else {
        this.router.navigate(['/dashboard']);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }
}
