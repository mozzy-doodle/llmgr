import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { PropertyService } from '../../services/property.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'property-detail',
  styleUrls: ['property-detail.component.scss'],
  template: `
    <div class="col-sm-3">
        <ul class="nav nav-pills nav-stacked">
          <li role="presentation" class="active"><a href="#">Home</a></li>
          <li role="presentation"><a href="#">Profile</a></li>
          <li role="presentation"><a href="#">Messages</a></li>
        </ul>
    </div>

    <!-- Property Detail -->
    <div class="col-sm-9">
      <h2>Create a New Property</h2>
      <form [formGroup]="propertyForm">

        <div class="form-row">
        <div class="btn-group btn-group-justified unit-count-btn-group" role="group" aria-label="Single vs Multi Unit?">
            <div class="btn-group" role="group">
              <button type="button"
               class="btn btn-default {{ propertyForm.get('unitCountStyle')?.value === 'single' ? 'active': 'nonactive'}}"
               (click)="setUnitCountStyle('single')">
                <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
                Single Unit
              </button>
            </div>
            <div class="btn-group" role="group">
              <button type="button" (click)="setUnitCountStyle('multi')"
              class="btn btn-default {{ propertyForm.get('unitCountStyle')?.value === 'multi' ? 'active': 'nonactive'}}">
                <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
                <span class="glyphicon glyphicon-home" aria-hidden="true"></span>
                Multiple Units
              </button>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-12">
            <label for="propertyType">Property Type</label>
            <select formControlName="propertyType" class="form-control">
              <option val="">Select a property type</option>
              <option *ngFor="let type of propertyTypes">{{ type }}</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-7">
            <label for="streetAddress">Street Address</label>
            <input
              type="text"
              class="form-control"
              id="streetAddress"
              placeholder="Street Address"
              formControlName="streetAddress">
          </div>
          <div class="form-group col-md-5">
            <label for="address2">Address 2</label>
            <input type="text" class="form-control" id="city" placeholder="Address 2" formControlName="address2">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-5">
            <label for="city">City</label>
            <input type="text" formControlName="city" class="form-control" id="city" placeholder="City">
          </div>
          <div class="form-group col-md-4">
            <label for="state">State</label>
            <select formControlName="state" class="form-control">
              <option val="">Select a State</option>
              <option *ngFor="let state of usStates$ | async">{{ state.name }}</option>
            </select>
          </div>
          <div class="form-group col-md-3">
            <label for="zip">Zip</label>
            <input type="text" formControlName="zip" class="form-control" id="zip" placeholder="Zip">
          </div>
        </div>

        <div class="row btn-row">
          <div class="col-sm-12">
            <button class="btn btn-primary pull-right btn-block"
              (click)="createNewProperty()">Create Property</button>
          </div>
        </div>

      </form>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">New Property Created!</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  `
})
export class PropertyDetailComponent implements OnInit {
  propertyForm: FormGroup;
  propertyTypes: string[];
  usStates$: Observable<any>;

  constructor(
    private fb: FormBuilder,
    private propertyService: PropertyService
  ) {}

  ngOnInit() {
    this.usStates$ = this.propertyService.getUsStates();
    this.propertyTypes = this.propertyService.getPropertyTypes();
    this.propertyForm = this.fb.group({
      // unitCount: '',
      unitCountStyle: 'single',
      propertyType: '',
      streetAddress: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
      // tenants: new FormArray([])
    });
  }

  /** Patch property type value */
  setUnitCountStyle(val: string) {
    console.log(val);
    this.propertyForm.patchValue({'unitCountStyle': val});
  }

  createNewProperty() {
    this.propertyService.createProperty(this.propertyForm.value);
    this.propertyForm.reset();
  }

  savePropertyDetails() {}

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
