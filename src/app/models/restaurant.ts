// region imports ;
import {Address} from './address';
import {Review} from './review';
// import construct = Reflect.construct;



// restaurants
// endRegion;
export class Restaurant {
  name: string;
  website: string;
  phone: string;
  rating: number;
  priceRange: number;
  reviews: Review[];
  address: Address;
  // endregion
  constructor(args?) {
    if (args) {
      this.address = args.address;
      this.name = args.name;
      this.website = args.website;
      this.phone = args.phone;
      this.rating = args.rating;
      this.priceRange = args.priceRange;
    } else {
      this.address = null ;
      this.name = '';
      this.website = '';
      this.phone = '';
      this.rating = null;
      this.priceRange = null;

    }
  }

}
