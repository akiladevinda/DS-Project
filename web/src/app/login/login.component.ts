import { GlobalService } from './../_services/global.service';
import { HeaderComponent } from './../header/header.component';
import { UserService } from "./../_services/user.service";
import { MatSnackBar } from "@angular/material";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public registerForm: FormGroup;
  public appLoading;

  username;
  password;
  fullname;
  moblenumber;
  email;
  regpassword;
  //static name;
  constructor(public snackBar: MatSnackBar, private users: UserService, private router: Router ,private globalService: GlobalService) {}

  ngOnInit() {
    this.username = "";
    this.password = "";

    this.registerForm = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      fname: new FormControl("", [Validators.required]),
      mobile: new FormControl("", [Validators.required])
    });
    this.appLoading = false;
  }

  login() {
    console.log("Hello");
    console.log(this.username);
    console.log(this.password);



    // if (this.username === "akitha" && this.password === "pass") {

    //   this.openSnackBar("Login Sucessfull", "OK");
    // } else {

    //   this.openSnackBar("Login Failed", "OK");
    // }

    this.getAllUsers();

  }

  getAllUsers() {


    const user = {};

    user['email'] = this.username;

    this.users.getUserDetails(user).subscribe(result => {
      console.log(result);

      if (result.data) {

        console.log('Data is included');
        console.log(result.data[0]);
        if (result.data[0].password === this.password) {

          localStorage.clear();
          localStorage.setItem('currentUserEmail', this.username);
          console.log('Your Password is Correct');
          this.openSnackBar('Login Sucessfull', 'OK');
          this.router.navigate(['/home']);

          this.globalService.addNewName(result.data[0].full_name);


        } else {

          this.openSnackBar('Login Failed', 'OK');
        }
      } else {

        this.openSnackBar('Login Failed', 'OK');
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000
    });
  }


  registerUser() {

    console.log('Hooooo');
    console.log(this.email);
    console.log(this.regpassword);
    console.log(this.fullname);
    console.log(this.moblenumber);

    const register = {};


    register['email'] = this.email;
    register['password'] = this.regpassword;
    register['full_name'] = this.fullname;
    register['contact_number'] = this.moblenumber;

    this.users.registerUser(register).subscribe(result => {

      console.log(result);
  });
  this.openSnackBar('Register Sucessfully', 'OK');

  }

}
