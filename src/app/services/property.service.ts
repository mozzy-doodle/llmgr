import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';

import '../../assets/states.json';

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
  streetAddress: string;
  propertyType: string;
  city: string;
  state: string;
  zip: string;
  tenants?: string[];
  rent: number;
  timestamp: number;
  $key: string;
  $exists: () => boolean;
}

export interface PropertyType {
  name: string;
  $key: string;
  exists: () => boolean;
}

@Injectable()
export class PropertyService {
  propertyCollectionRef: AngularFirestoreCollection<Property>;
  propertyTypesCollection: AngularFirestoreCollection<any>;
  // usStatesCollection: AngularFirestoreCollection<any>;
  properties$: Observable<Property[]>;
  usStatesCollection: AngularFirestoreCollection<any> = this.afs.collection('usStates');


  constructor(private afs: AngularFirestore, private httpClient: HttpClient) {
    this.propertyCollectionRef = this.afs.collection<Property>('properties');
    this.propertyTypesCollection = this.afs.collection<PropertyType>('propertyTypes');
    this.usStatesCollection = this.afs.collection<any>('usStates');
    this.properties$ = this.propertyCollectionRef.valueChanges();
  }

  createProperty(property: Property) {
    this.propertyCollectionRef.add(property);
  }

  bootstrapData() {
    // this.httpClient.get('../../assets/states.json').subscribe((data: any[]) => {
    //   data.forEach((x) => {
    //     this.usStatesCollection.add(x);
    //   });
    // });

    // ['Apartment', 'Single Family home', 'Duplex/Triplex/Townhouse',
    // 'Mobile/Manufactured home', 'Dormitory', 'Commercial'].forEach((type) => {
    //   console.log(type);
    //   this.propertyTypesCollection.add({'name': type});
    // });
  }

  getPropertyTypes(): string[] {
    console.log(this.afs.collection('propertyTypes'));
    return ['Apartment', 'Single Family home', 'Duplex/Triplex/Townhouse', 'Mobile/Manufactured home', 'Dormitory', 'Commercial'];
  }

  getUsStates(): Observable<any> {
    const usStates$ = this.afs.collection<any>('usStates').valueChanges();
    return usStates$;
    // .valueChanges() is simple. It just returns the
    // JSON data without metadata. If you need the
    // doc.id() in the value you must persist it your self
    // or use .snapshotChanges() instead. See the addItem()
    // method below for how to persist the id with
    // valueChanges()
  }

  // updateMeal(key: string, meal: Meal) {
  //   return this.db.object(`meals/${this.uid}/${key}`).update(meal);
  // }

  // removeMeal(key: string) {
  //   return this.db.list(`meals/${this.uid}`).remove(key);
  // }

}
