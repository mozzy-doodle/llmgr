import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { PropertyService } from '../../services/property.service';

@Component({
  selector: 'property-detail',
  // styleUrls: ['property-detail.component.scss'],
  template: `
    <div class="col-sm-8 col-sm-offset-1">
      <h2>Property Detail</h2>

      <form [formGroup]="propertyForm">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="address">Street Address</label>
            <input
              type="text"
              class="form-control"
              id="address"
              placeholder="Address"
              formControlName="address">
          </div>
          <div class="form-group col-md-6">
            <label for="city">City</label>
            <input type="text" class="form-control" id="city" placeholder="City" formControlName="city">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="state">State</label>
            <input type="text" formControlName="state" class="form-control" id="state" placeholder="State">
          </div>
        </div>

        <button class="btn btn-primary pull-right" (click)="createNewProperty()">Add Property</button>
      </form>

    </div>

    <div class="col-sm-3">

       <!-- Badge -->
       <property-badge [showLink]="false" [property]="1"></property-badge>
    </div>
  `
})
export class PropertyDetailComponent implements OnInit {
  propertyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private propertyService: PropertyService
  ) {}

  ngOnInit() {
    this.propertyForm = this.fb.group({
      address: '',
      city: '',
      state: '',
      monthlyRent: '',
      zip: '',
      // tenants: new FormArray([])
    });
  }

  createNewProperty() {
    this.propertyService.createProperty(this.propertyForm.value);
  }

  savePropertyDetails() {

  }

  // createTenant(): FormGroup {
  //   return this.fb.group({
  //     firstName: '',
  //     lastName: ''
  //     // ssn: ''
  //   });
  // }

  // addTenant() {
  //   const ctrl = this.propertyForm.get('tenants') as FormArray;
  //   ctrl.push(this.createTenant());
  // }

  // get tenants() {
  //   return (this.propertyForm.get('tenants') as FormArray).controls;
  // }
}
