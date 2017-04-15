import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';

import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

const firebaseConfig = {
  apiKey: 'AIzaSyBcvQC2VNgy0uI-uN_hB9w_KifSxCPPIG8',
  authDomain: 'student-management-syste-9f8b3.firebaseapp.com',
  databaseURL: 'https://student-management-syste-9f8b3.firebaseio.com',
  projectId: 'student-management-syste-9f8b3',
  storageBucket: 'student-management-syste-9f8b3.appspot.com',
  messagingSenderId: '737353149236'
};

const authConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfig),
    AuthRoutingModule,
    ButtonsModule
  ],
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  providers: [
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AuthComponent]
})
export class AuthModule { }
