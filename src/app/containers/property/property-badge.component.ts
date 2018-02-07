import { Component, Input, OnInit, Output } from '@angular/core';
import { Property } from '../../services/property.service';

@Component({
  selector: 'property-badge',
  styleUrls: ['property-badge.component.scss'],
  template: `
    <div class="card property-badge">
      <img class="card-img-top" src="http://via.placeholder.com/250x150?text=PropertyImage" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ property.streetAddress }}</h5>
        <p class="card-text">
        {{ property | json }}
        Some quick example text to build on the card title and make up the bulk of the card's content.
        <a *ngIf="showLink" routerLink="{{property.$key}}" routerLinkActive="active">View Details</a>
        </p>
      </div>
    </div>

  `
})
export class PropertyBadgeComponent implements OnInit {
  @Input() property: Property;
  @Input() showLink?: boolean;

  constructor() {}

  ngOnInit() {
    console.log(this.property);
  }
}
