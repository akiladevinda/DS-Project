import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  array = [
    {
      name: 'software engineer(JAVA)',
      image: 'https://www.analyticsindiamag.com/wp-content/uploads/2018/11/SoftwareEngineer_Final.png',
    },
    {
      name: 'Data entry',
      image: 'https://d3b423mfsq4bmy.cloudfront.net/wp-content/uploads/2014/11/tips-for-data-entry-jobs-quality-nov-2014.png',

    },
    {
      name: 'marketing executive',
      image: 'https://images.locanto.sg/Marketing-Executive/vap_3983771974.jpg',

    },
    {
      name: 'security guard',
      // tslint:disable-next-line:max-line-length
      image: 'http://braveguard.com/images/slider/banner030.jpg',

    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
