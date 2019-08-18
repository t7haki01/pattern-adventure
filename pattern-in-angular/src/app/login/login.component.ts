import { Component, OnInit } from '@angular/core';
import AuthHandler from '../../../modules/AuthHandler.js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private authHandler = new AuthHandler();

  private email: String;
  private password: String;

  constructor(private router: Router) { }

  ngOnInit() {
    if(this.authHandler.loggedIn()){
      this.router.navigate(['/']);
    }
  }

  valueHandler(){
    let email = (<HTMLInputElement>document.getElementById("exampleInputEmail1")).value;
    let password = (<HTMLInputElement>document.getElementById("exampleInputPassword1")).value;
    if(email.length > 0 && email){
      this.email = email;
    }
    if(password.length>0 && password){
      this.password = password;
    }
  }

  login(){
    if(this.email && this.password && this.email.length>0 && this.password.length>0){

//With using Axios
      // this.authHandler.loginAxios(this.email, this.password);
      this.authHandler.login(this.email, this.password)
      .then(res => {
        if (res.status === false) {
          console.log(res);
          window.alert("Sorry those credentials don't exist!");
          this.router.navigate(['/login']);
        } 
        else {
          console.log(res);
          window.alert("Welcome!");
          this.router.navigate(['/']);
        }
      })
      .catch(err => {
        alert(err);
      });
    }
  }

}
