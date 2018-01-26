import { Component } from '@angular/core';

import { PropertyBadgeComponent } from './property-badge.component';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'property-list',
  // styleUrls: ['property-list.component.scss'],
  template: `
    <div>
      <div class="col-sm-3">LHS Search Filters</div>

      <!-- List of Properties -->
      <div class="col-sm-9">
        <ul class="list-group">
          <li class="list-group-item" *ngFor="let property of [1,2,3]">
            <property-badge [property]="property" [showLink]="true"></property-badge>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class PropertyListComponent {
  properties: any;
  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.afs.collection<any>('properties').valueChanges().subscribe((data) => {
      this.properties = data;
    })
  }
}
