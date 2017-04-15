import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../auth/auth-guard.service';

import { StudentComponent } from './student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

const studentRoutes: Routes = [
  {
    path: '',
    component: StudentComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'list',
        component: StudentListComponent
      },
      {
        path: ':id',
        component: StudentDetailComponent,
        outlet: 'popup'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(studentRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class StudentRoutingModule { }
