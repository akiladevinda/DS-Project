import { AdvertismentService } from './../_services/advertisment.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ItemPopupComponent } from '../item-popup/item-popup.component';


@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent implements OnInit {

  itemList = [];

  array = [
    {
      name: 'Jaguar-Indus-Silver',
      image: 'https://media.wired.com/photos/5b86fce8900cb57bbfd1e7ee/master/pass/Jaguar_I-PACE_S_Indus-Silver_065.jpg',
      price: '3.5M'
    },
    {
      name: 'Honda Grace 2015',
      image: 'https://static.carmudi.lk/hs9ang0wmFZ1vTx3IYBTrClxug0=/333x206/smart/listing_images/LK/upload_5b8e337ec31c95.58857127.jpg',
      price: '4,950,000'
    },
    {
      name: 'Toyota Axio 2016',
      image: 'https://static.carmudi.lk/VI5oaZ8tRhFHpHbacllUc7yHQJw=/333x206/smart/listing_images/LK/upload_5c4481184824e0.89975237.jpg',
      price: '5,925,000'
    },
    {
      name: 'Land Rover Range Rover Evoque 2013',
      // tslint:disable-next-line:max-line-length
      image: 'https://static.carmudi.lk/8pqfCoD1CnD_tMzy9civEf61MPU=/fit-in/745x405/filters:watermark(http://static.carmudi.lk/vZAZwYDMggPn1UKPIhoWTrqbVFc=/187x0/WATERMARK/carmudi-watermark.png,-17,-17,30)/listing_images/LK/upload_5c419d9ed29365.27368614.jpg',
      price: '9,900,000'
    },
    {
      name: 'Mercedes-Benz E300 2015',
      // tslint:disable-next-line:max-line-length
      image: 'https://static.carmudi.lk/-vYDk32jp5oGPfArEFSlLTvBBBY=/fit-in/745x405/filters:watermark(http://static.carmudi.lk/vZAZwYDMggPn1UKPIhoWTrqbVFc=/187x0/WATERMARK/carmudi-watermark.png,-17,-17,30)/listing_images/LK/upload_5c078bee492821.03647606.jpg',
      price: '8,000,400'
    },

    {
      name: 'Honda Fit GP5 2014',
      // tslint:disable-next-line:max-line-length
      image: 'https://static.carmudi.lk/NeA5noiWycBfUilmhZWQzbtsru0=/fit-in/745x405/filters:watermark(http://static.carmudi.lk/vZAZwYDMggPn1UKPIhoWTrqbVFc=/187x0/WATERMARK/carmudi-watermark.png,-17,-17,30)/listing_images/LK/upload_5c443ee6c58cf9.02163433.jpg',
      price: '3,790,000'
    },
  ];


  images = [
    {

      // tslint:disable-next-line:max-line-length
      image: 'https://static.carmudi.lk/8pqfCoD1CnD_tMzy9civEf61MPU=/fit-in/745x405/filters:watermark(http://static.carmudi.lk/vZAZwYDMggPn1UKPIhoWTrqbVFc=/187x0/WATERMARK/carmudi-watermark.png,-17,-17,30)/listing_images/LK/upload_5c419d9ed29365.27368614.jpg'

    },
    {
      // tslint:disable-next-line:max-line-length
      image: 'https://static.carmudi.lk/-vYDk32jp5oGPfArEFSlLTvBBBY=/fit-in/745x405/filters:watermark(http://static.carmudi.lk/vZAZwYDMggPn1UKPIhoWTrqbVFc=/187x0/WATERMARK/carmudi-watermark.png,-17,-17,30)/listing_images/LK/upload_5c078bee492821.03647606.jpg'
    },

    {
      // tslint:disable-next-line:max-line-length
      image: 'https://static.carmudi.lk/NeA5noiWycBfUilmhZWQzbtsru0=/fit-in/745x405/filters:watermark(http://static.carmudi.lk/vZAZwYDMggPn1UKPIhoWTrqbVFc=/187x0/WATERMARK/carmudi-watermark.png,-17,-17,30)/listing_images/LK/upload_5c443ee6c58cf9.02163433.jpg'
    }
  ];

  constructor(private advertismentService: AdvertismentService, private dialog: MatDialog, ) { }

  getAdvertismentByCategory() {

    const advertisment = {};

    advertisment['category_name'] = 'Mens Fashion';

    // this.itemList.push(this.images);

    this.advertismentService.getAdvertismentByCategory(advertisment).subscribe(result => {

      // this.itemList = result;
      console.log(result);
      console.log('result.length');
      console.log(result.data.length);

      for ( let i = 0; i < result.data.length; i++ ) {

        this.itemList.push(result.data[i]);
        console.log('Joooo');
        console.log(result.data[i]);

      }

    });

  }

  openPopup(element) {
    console.log(element);
    this.dialog.open(ItemPopupComponent, {
      width: '60%',
      data: {element: element}
    });
  }

  ngOnInit() {
    this.getAdvertismentByCategory();


  }

  tets(){
    console.log('Helllo');
    console.log(this.itemList);
  }

}
