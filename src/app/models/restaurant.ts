// region imports ;
import {Address} from './address';
import {Review} from './review';



// restaurants
// endRegion;
export class Restaurant {
  name: string;
  website: string;
  phone: string;
  rating: number;
  priceRange: number;
  reviews: Review[];
  location: Address;
  endregion;
}
