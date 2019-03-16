import { MatSnackBar } from '@angular/material';
import { AdvertismentService } from './../_services/advertisment.service';
import { Component, OnInit } from '@angular/core';


export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {

   category;
   condition;
   email;
   model;
   title;
   discription;
   city;
   price;


  foods: Food[] = [
    {value: 'vehicles', viewValue: 'Vehicles'},
    {value: 'phones', viewValue: 'Mobile Phones'},
    {value: 'electronics', viewValue: 'Electronics'}
  ];

  conditions: Food[] = [
    {value: 'brandNew', viewValue: 'Brand New'},
    {value: 'used', viewValue: 'Used'},
  ];

  constructor(private advertismentService: AdvertismentService , public snackBar: MatSnackBar ) { }

  ngOnInit() {
  }

  getAlladdsByUser() {

    console.log('Hooooo');
    console.log(this.category);
    console.log(this.condition);
    console.log(this.email);
    console.log(this.model);
    console.log(this.title);
    console.log(this.discription);
    console.log(this.city);
    console.log(this.price);

    const advertisment = {};

    // advertisment['category_name'] = 'Fashions';
    // advertisment['item_condition'] = 'Brand New';
    // advertisment['item_name'] = 'Mens Denim';
    // advertisment['ad_title'] = 'Black Shirts';
    // advertisment['ad_description'] = 'Call For More Shirts';
    // advertisment['city'] = 'Colombos';
    // advertisment['price'] = '30';
    // advertisment['user_email'] = 'akila@test.com';
    // advertisment['user_contactnum'] = '0711091499';

    advertisment['category_name'] = this.category;
    advertisment['item_condition'] = this.condition;
    advertisment['user_email'] = this.email;
    advertisment['item_name'] = this.model;
    // advertisment['model'] = this.model;
    advertisment['ad_title'] = this.title;
    advertisment['ad_description'] = this.discription;
    advertisment['city'] = this.city;
    advertisment['price'] = this.price;
    advertisment['user_contactnum'] = '0711091499';


    this.advertismentService.getAdvertismentDetails(advertisment).subscribe(result => {

      console.log(result);
  });

  this.openSnackBar('Your Add Posted Sucessfully', 'OK');

  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }

}
