import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { WizardModule } from './wizard/wizard.module';

const config = {
  apiKey: 'AIzaSyDlHLxeBQjzH5_qOkkuriQ6VMnLGznGPlU',
  authDomain: 'angular-test-75bd0.firebaseapp.com',
  databaseURL: 'https://angular-test-75bd0-default-rtdb.firebaseio.com',
  projectId: 'angular-test-75bd0',
  storageBucket: 'angular-test-75bd0.appspot.com',
  messagingSenderId: '655547747292',
  appId: '1:655547747292:web:25503dc8daedb862d55d19',
  measurementId: 'G-91YQRCCWSP',
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
  ],
  declarations: [AppComponent, WizardModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
