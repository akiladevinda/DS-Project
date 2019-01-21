import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.scss']
})
export class ElectronicsComponent implements OnInit {

  array = [
    {
      name: 'macbook-air-2018',
      image: 'https://icdn2.digitaltrends.com/image/apple-macbook-air-2018-hands-on_4.jpg',
      price: '286,134'
    },
    {
      name: 'macbook-air-2018',
      image: 'https://icdn2.digitaltrends.com/image/apple-macbook-air-2018-hands-on_4.jpg',
      price: '286,134'
    },
    {
      name: 'macbook-air-2018',
      image: 'https://icdn2.digitaltrends.com/image/apple-macbook-air-2018-hands-on_4.jpg',
      price: '286,134'
    },
  ];


  constructor() { }

  ngOnInit() {
  }

}
