import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2';

@Injectable()
export class AuthService {
  constructor(
    private auth: AngularFireAuth,
    private router: Router
  ) { }

  login(): void {
    this.auth.login().then(auth => {
      if (auth) {
        this.redirectState(true);
      }
    });
  }

  logout(): void {
    this.auth.logout().then(() => this.redirectState(false));
  }

  checkLogin(): Observable<boolean> {
    const observable: Observable<boolean> = Observable.create((observer) => {
      this.auth.subscribe(authState => {
        if (authState) {
          observer.next(true);
        } else {
          this.redirectState(false);
          observer.next(false);
        }

        observer.complete();
      });
    });

    return observable;
  }

  private redirectState(isLoggedIn: boolean): void {
    if (isLoggedIn === true) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
