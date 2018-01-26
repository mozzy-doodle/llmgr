import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'property-badge',
  // styleUrls: ['property-badge.component.css'],
  template: `
    <div class="card property-badge" style="width: 18rem;">
      <img class="card-img-top" src="..." alt="Card image cap">
      <div class="card-body">
        <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
        <a *ngIf="showLink" routerLink="{{property}}" routerLinkActive="active">View Details</a>
        </p>
      </div>
    </div>
  `
})
export class PropertyBadgeComponent {
  @Input() property: any;
  @Input() showLink: boolean;

  constructor() {}
}
