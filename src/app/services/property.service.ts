import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { AngularFirestore } from 'angularfire2/firestore';
import {
  AngularFirestoreCollection
} from 'angularfire2/firestore';

// import { AuthService } from '../../../../auth/shared/services/auth/auth.service';

export interface Property {
  address: string;
  city: string;
  tenants: string[];
  rent: number;
  timestamp: number;
  $key: string;
  $exists: () => boolean;
}

@Injectable()
export class PropertyService {
  propertyCollectionRef: AngularFirestoreCollection<Property>;
  properties$: Observable<Property[]>;

  constructor(private afs: AngularFirestore) {
    this.propertyCollectionRef = this.afs.collection<Property>('properties');
    this.properties$ = this.propertyCollectionRef.valueChanges();
  }

  createProperty(property: Property) {
    this.propertyCollectionRef.add(property);
  }

  // updateMeal(key: string, meal: Meal) {
  //   return this.db.object(`meals/${this.uid}/${key}`).update(meal);
  // }

  // removeMeal(key: string) {
  //   return this.db.list(`meals/${this.uid}`).remove(key);
  // }

}
