import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PageNotFoundComponent
  ],
  declarations: [
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
