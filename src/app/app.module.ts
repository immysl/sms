import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';

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
  method: AuthMethods.Redirect
};

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, authConfig),
    ButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
