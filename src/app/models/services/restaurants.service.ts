import { Injectable } from '@angular/core';
import {Restaurant} from '../restaurant';
import {Observable, of} from 'rxjs';
import {Address} from '../address';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {
restaurants: Restaurant[];
    constructor() {

    this.restaurants = [
    new Restaurant ({
    name: 'momoresto',
      address: new Address({streetnumber: 1477,
      streetname: 'van-horne',
        city: 'Montreal',
        province: 'quebec',
        postalcode: 'h3s-w3e',
        country: 'Canada'
    }),
    phone: '514-784-5466',
    website: 'momoresto.com',
    rating: 5,
    averageprice: 45,
  }),
  new Restaurant({
    name: 'samresto',
    address: new Address({streetnumber: 2587,
      streetname: 'decarie',
      city: 'Montreal',
      province: 'quebec',
      postalcode: 'h3s-2p3',
      country: 'Canada'
    }),
    phone: '514-552-4561',
    website: 'samresto.com',
    rating: 78,
    averageprice: 1000,
    }),

  new Restaurant( {
    name: 'johnresto',
    address: new Address({streetnumber: 1549,
      city: 'Montreal',
      province: 'quebec',
      postalcode: 'h3s-w3e',
      country: 'Canada'
    }),
    phone: '514-471-7412',
    website: 'johnresto.com',
    rating: 89,
    priceRange: 10000,
  }),
      new Restaurant ({
          name: 'yakimono',
          phone: '514-784-5466',
          website: 'yakimono.com',
          rating: 5,
          averageprice: 45,
        }),
        new Restaurant ({
          name: 'Chiyoko',
          phone: '514-784-5466',
          website: 'momoresto.com',
          rating: 5,
          averageprice: 45,
        })
    ];

  }
  getrestaurants(): Observable<Restaurant[]> {
    return of(this.restaurants);
  }
}
