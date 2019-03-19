import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../../models/restaurant';
import {RestaurantsService} from '../../models/services/restaurants.Service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  constructor(private restaurantService: RestaurantsService) { }
  rests: Restaurant[];
  ngOnInit() {
    this.getRestaurants();
  }
  getRestaurants(): void {
    this.restaurantService.getrestaurants().subscribe( restaurant => this.rests = restaurant);
  }

}
