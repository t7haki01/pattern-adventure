import { Component, OnInit } from '@angular/core';
import AuthHandler from '../../../modules/AuthHandler.js';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  private user : String;

  private firstName : String;

  private lastName : String;

  private authHanlder : any = new AuthHandler();

  constructor(private router: Router) { }

  ngOnInit() {
    if(this.authHanlder.loggedIn()){
      let data = this.authHanlder.getData();
      this.firstName = data.firstname;
      this.lastName = data.lastname;
    }
    if(this.firstName && this.lastName){
      this.user = this.firstName + " " + this.lastName;
    }
  }

}