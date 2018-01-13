import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "property-detail",
  // styleUrls: ['property-detail.component.scss'],
  template: `
    <div class="col-sm-8 col-sm-offset-1">
      <h2>Property Detail</h2>

      <form [formGroup]="propertyForm">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="address">Street Address</label>
            <input type="text" class="form-control" id="address" placeholder="Address" [formControl]="address">
          </div>
          <div class="form-group col-md-6">
            <label for="city">City</label>
            <input type="text" class="form-control" id="city" placeholder="City" [formControl]="city">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="state">State</label>
            <select [formControl]="state" id="state" class="form-control">
              <option></option>
            </select>
          </div>
          <div class="form-group col-md-6">
            <label for="address">City</label>
            <input type="text" class="form-control" id="address" placeholder="Address" [formControl]="city">
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
    </div>

    <div class="col-sm-3">
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
    </div>
  `
})
export class PropertyDetailComponent implements OnInit {
  propertyForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.propertyForm = this.fb.group({
      address: '',
      city: '',
      state: '',
      monthlyRent: ''
    });
  }
}
