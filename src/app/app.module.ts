import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

// third-party modules
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ReactiveFormsModule } from '@angular/forms';

// App
import { AppComponent } from './containers/app/app.component';
import { PropertyListComponent } from './containers/property/property-list.component';
import { PropertyDetailComponent } from './containers/property/property-detail.component';
import { PropertyBadgeComponent } from './containers/property/property-badge.component';

// Service
import { PropertyService } from '../app/services/property.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'property',
    component: PropertyListComponent,
    data: { title: 'Property List' }
  },
  { path: 'property/:id', component: PropertyDetailComponent },
  { path: '**', component: PropertyListComponent }
];

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: 'AIzaSyBFfd_-OSch-J5gI8uxDaM4nppLCdiXyY0',
    authDomain: 'landlord-mgr.firebaseapp.com',
    databaseURL: 'https://landlord-mgr.firebaseio.com',
    projectId: 'landlord-mgr',
    storageBucket: '',
    messagingSenderId: '516026140115'
};


@NgModule({
  imports: [
  BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    PropertyBadgeComponent,
    PropertyListComponent,
    PropertyDetailComponent
    // AppHeaderComponent,
    // AppNavComponent
  ],
  providers: [
    PropertyService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
