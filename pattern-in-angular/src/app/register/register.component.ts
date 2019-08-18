import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import setting from '../../assets/setting.js';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private email : String ;
  private password : String;
  private firstname : String;
  private lastname : String;
  private today : any = new Date();
  private isAdmin : boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  valueHandler(){

    let email = (<HTMLInputElement>document.getElementById("exampleInputEmail1")).value;
    let password = (<HTMLInputElement>document.getElementById("exampleInputPassword1")).value;
    let fname = (<HTMLInputElement>document.getElementById("exampleInputFirstname1")).value;
    let lname = (<HTMLInputElement>document.getElementById("exampleInputLastname1")).value;

    if(email.length>0 && email){
      this.email = email;
    }
    if(password.length>0 && password){
      this.password = password;
    }
    if(fname.length>0 && fname){
      this.firstname = fname;
    }
    if(lname.length>0 && lname){
      this.lastname = lname;
    }
  }

  register(){
    let email = this.email;
    let password = this.password;
    let firstname = this.firstname;
    let lastname = this.lastname;
    let today1 = new Date();
    let today2 = new Date();
    let isAdmin = this.isAdmin;
    axios
      .get(setting.api.get + '/getid/' + email)
      .then(res => {
        if (Object.keys(res.data).length === 0) {
          console.log('Fine to go!');
          axios
            .post(setting.api.post, {
              email,
              password,
              firstname,
              lastname,
              today1,
              today2,
              isAdmin
            })
            .then(response => {
              window.alert("Thank you for registration!");
              this.router.navigate(['/login']);
              console.log(response);
            });

        } else {
          window.alert("Email Already Exist");
          console.log('Already Exist!');
        }
      });
  }



}
