import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private location: Location,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.checkLogin().subscribe(isLoggedIn => {
      if (isLoggedIn) {
        this.location.back();
      }
    });
  }

  login() {
    this.authService.login();
  }

}
