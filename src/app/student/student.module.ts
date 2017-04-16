import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridModule } from '@progress/kendo-angular-grid';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

@NgModule({
  imports: [
    CommonModule,
    GridModule,
    StudentRoutingModule
  ],
  declarations: [
    StudentComponent,
    StudentListComponent,
    StudentDetailComponent
  ]
})
export class StudentModule { }
