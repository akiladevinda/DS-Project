import { AdvertismentService } from './../_services/advertisment.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myads',
  templateUrl: './myads.component.html',
  styleUrls: ['./myads.component.scss']
})
export class MyadsComponent implements OnInit {
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

  itemList = [];

  constructor( private advertismentService: AdvertismentService) { }

  ngOnInit() {

    this.getAdvertismentByEmail();

    console.log('Current User Email : ');
    console.log(localStorage.getItem('currentUserEmail'));
  }

  getAdvertismentByEmail() {

    const email = {};

    email['user_email'] = localStorage.getItem('currentUserEmail');

    this.advertismentService.getAdvertismentByEmail(email).subscribe(result => {

      // this.itemList = result;
      console.log(result);
      // console.log(result.data[0]);
      // console.log(result.data[1]);
      // console.log(result.data[2]);

      for ( let i = 0; i < result.data.length; i++ ) {

        this. itemList.push(result.data[i]);
        // console.log('Joooo');
        // console.log(result.data[i]);

      }

    });

  }


  tets() {

    console.log('Helllo');
    console.log(this.itemList);
  }



}
