import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  array = [
    {
      name: 'Jaguar-Indus-Silver',
      image: 'https://media.wired.com/photos/5b86fce8900cb57bbfd1e7ee/master/pass/Jaguar_I-PACE_S_Indus-Silver_065.jpg',
      price: '3.5M'
    },
    {
      name: 'macbook-air-2018',
      image: 'https://icdn2.digitaltrends.com/image/apple-macbook-air-2018-hands-on_4.jpg',
      price: '286,134'
    },
    {
      name: 'Toyota Axio 2016',
      image: 'https://static.carmudi.lk/VI5oaZ8tRhFHpHbacllUc7yHQJw=/333x206/smart/listing_images/LK/upload_5c4481184824e0.89975237.jpg',
      price: '5,925,000'
    },
    {
      name: ' DEEDAT CASUAL T-SHIRT',
      // tslint:disable-next-line:max-line-length
      image: 'http://www.nolimit.lk/wp-content/uploads/2015/11/43.jpg',
      price: '1,590'
    },
    {
      name: 'STRIPE COMBO T-SHIRT',
      // tslint:disable-next-line:max-line-length
      image: 'http://www.nolimit.lk/wp-content/uploads/2018/10/0012.jpg',
      price: '1,390'
    },

    {
      name: 'Samsung Gear S3 Frontier',
      // tslint:disable-next-line:max-line-length
      image: 'https://katara-s3.my.lk/products/15421862091217/r/mystore-lk-samsung-sm-r760-img-3-460-0.jpg',
      price: '46,220'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
