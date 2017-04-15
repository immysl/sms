import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Student Management System Prototype';

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
  }
}
