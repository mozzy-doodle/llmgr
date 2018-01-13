import { Component } from '@angular/core';

import { PropertyBadgeComponent } from './property-badge.component';

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
            <!-- Badge -->
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" src="..." alt="Card image cap">
              <div class="card-body">
                <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
                <a routerLink="{{property}}" routerLinkActive="active">View Details</a>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `
})
export class PropertyListComponent {
  constructor() {}
}
