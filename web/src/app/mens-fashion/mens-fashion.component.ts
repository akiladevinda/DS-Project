import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mens-fashion',
  templateUrl: './mens-fashion.component.html',
  styleUrls: ['./mens-fashion.component.scss']
})
export class MensFashionComponent implements OnInit {

  array = [
    {
      name: 'DEEDAT CASUAL T-SHIRT',
      image: 'http://www.nolimit.lk/wp-content/uploads/2015/11/43.jpg',
      price: '1,590'
    },
    {
      name: 'DEEDAT CASUAL T-SHIRT',
      image: 'http://www.nolimit.lk/wp-content/uploads/2015/11/43.jpg',
      price: '1,590'
    },
    {
      name: 'DEEDAT CASUAL T-SHIRT',
      image: 'http://www.nolimit.lk/wp-content/uploads/2015/11/43.jpg',
      price: '1,590'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
