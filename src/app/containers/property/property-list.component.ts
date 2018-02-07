import { Component, OnInit, OnDestroy } from '@angular/core';

import { PropertyBadgeComponent } from './property-badge.component';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'property-list',
  styleUrls: ['property-list.component.scss'],
  template: `
    <div>
      <div class="col-sm-3">LHS Search Filters</div>

      <!-- List of Properties -->
      <div class="col-sm-6">
        <input class="form-control" placeholder="Search Properties"/>
        <br/><br/>
        <ul class="list-group">
          <li class="list-group-item" *ngFor="let property of properties">
            <property-badge [property]="property" [showLink]="true"></property-badge>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class PropertyListComponent implements OnInit, OnDestroy {
  properties: any;
  propertiesSubscription: Subscription;
  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.propertiesSubscription = this.afs.collection<any>('properties').valueChanges().subscribe((data) => {
      this.properties = data;
    });
  }

  ngOnDestroy() {
    this.propertiesSubscription.unsubscribe();
  }
}
