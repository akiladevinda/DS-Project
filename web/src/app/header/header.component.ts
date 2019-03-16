import { GlobalService } from './../_services/global.service';
import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  // email;
  userName ;
  constructor(private users: UserService , private globalService: GlobalService) { }

  ngOnInit() {

    this.globalService.globalRequestName.subscribe(name => {

      console.log('My name is');
      console.log(name);
      this.userName = name;
    });



    // console.log(localStorage.getItem('currentUserEmail'));
    // this.email = localStorage.getItem('currentUserEmail');

    //   const user = {};

    //   user['email'] = this.email;

    //   this.users.getUserDetails(user).subscribe(result => {
    //     // console.log('RRRR QQQQ');
    //     // console.log(result.data[0].full_name);
    //     this.userName = result.data[0].full_name;

    //   });
    // }

}

    tets(){

      this.globalService.addNewName(null);
      this.userName === null;

    }

}
