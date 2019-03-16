import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-phones',
  templateUrl: './mobile-phones.component.html',
  styleUrls: ['./mobile-phones.component.scss']
})
export class MobilePhonesComponent implements OnInit {

  array = [
    {
      name: 'Samsung Galaxy s9',
      image: 'https://apollo-ireland.akamaized.net/v1/files/vstzr3fgunt21-LB/image;s=644x461;olx-st/_1_.jpg',
      price: '104,990'
    },
    {
      name: 'iPhone 8 Plus Red - 256GB',
      image: 'https://buyabans.com/upload/product/i%20phone/APPIP8PMRT92ZPA/thuaaaa.jpg',
      price: '160,999'
    },
    {
      name: 'Xiaomi Black Shark',
      image: 'https://i.ytimg.com/vi/OLMX-a82D6w/maxresdefault.jpg',
      price: '87,400'
    },
    {
      name: 'OnePlus 6T',
      image: 'https://www.o2.co.uk/sites/default/files/oneplus-6-os4-160518.jpg',
      price: '98,900'
    },
    {
      name: 'Nokia 7 plus',
      image: 'https://cdn.techadvisor.co.uk/cmsdata/features/3672586/nokia_7_plus_0003_thumb800.jpg',
      price: '65,900'
    },
  ];


  constructor() {
   }

   newpage(element) {
    console.log(element);

  }

  ngOnInit() {
  }

}
