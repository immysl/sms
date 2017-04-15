import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './auth/auth-guard.service';
import { PageNotFoundComponent } from './layout/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'student',
    loadChildren: 'app/student/student.module#StudentModule',
    canLoad: [AuthGuardService]
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }