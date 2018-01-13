import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';

// feature modules
// import { AuthModule } from '../auth/auth.module';
// import { HealthModule } from '../health/health.module';

// containers
import { AppComponent } from './containers/app/app.component';

import { PropertyListComponent } from './containers/property/property-list.component';
import { PropertyDetailComponent } from './containers/property/property-detail.component';
import { PropertyBadgeComponent } from './containers/property/property-badge.component';


// import { PropertyService } from './property.service';

// // components
// import { AppHeaderComponent } from './components/app-header/app-header.component';
// import { AppNavComponent } from './components/app-nav/app-nav.component';

// routes
export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'property/:id', component: PropertyDetailComponent },
  {
    path: 'property',
    component: PropertyListComponent,
    data: { title: 'Property List' }
  },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  imports: [
// feature modules
// import { AuthModule } from ';
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  declarations: [
    AppComponent,
    PropertyListComponent,
    PropertyDetailComponent
    // AppHeaderComponent,
    // AppNavComponent
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
