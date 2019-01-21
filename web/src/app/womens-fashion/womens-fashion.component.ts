import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-womens-fashion',
  templateUrl: './womens-fashion.component.html',
  styleUrls: ['./womens-fashion.component.scss']
})
export class WomensFashionComponent implements OnInit {


  array = [
    {
      name: 'STRIPE COMBO T-SHIRT',
      image: 'http://www.nolimit.lk/wp-content/uploads/2018/10/0012.jpg',
      price: '1,390'
    },
    {
      name: 'STRIPE COMBO T-SHIRT',
      image: 'http://www.nolimit.lk/wp-content/uploads/2018/10/0012.jpg',
      price: '1,390'
    },
    {
      name: 'STRIPE COMBO T-SHIRT',
      image: 'http://www.nolimit.lk/wp-content/uploads/2018/10/0012.jpg',
      price: '1,390'
    },
    {
      name: 'STRIPE COMBO T-SHIRT',
      image: 'http://www.nolimit.lk/wp-content/uploads/2018/10/0012.jpg',
      price: '1,390'
    },
    {
      name: 'STRIPE COMBO T-SHIRT',
      image: 'http://www.nolimit.lk/wp-content/uploads/2018/10/0012.jpg',
      price: '1,390'
    },

    {
      name: 'STRIPE COMBO T-SHIRT',
      image: 'http://www.nolimit.lk/wp-content/uploads/2018/10/0012.jpg',
      price: '1,390'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
