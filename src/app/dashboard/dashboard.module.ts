import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';

@NgModule({
  imports: [
    CommonModule,
    ButtonsModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DashboardHomeComponent
  ],
  bootstrap: [DashboardComponent]
})
export class DashboardModule { }
