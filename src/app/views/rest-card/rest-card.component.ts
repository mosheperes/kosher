import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../models/restaurant';

@Component({
  selector: 'app-rest-card',
  templateUrl: './rest-card.component.html',
  styleUrls: ['./rest-card.component.scss']
})
export class RestCardComponent implements OnInit {
  @Input()restaurant: Restaurant;
  now = new Date();
  constructor() {
  }

  ngOnInit() {
    // this.restaurant.name = 'pizza pita';
    // this.restaurant.phone = '514-785-4578';
    // this.restaurant.rating = 5;
    // this.restaurant.priceRange = 45;
    // this.restaurant.website = 'pizzapita.com';
  }

}


