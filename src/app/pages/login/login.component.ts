import { Component, OnInit } from '@angular/core';
import{Validator}from '@angular/forms'
import{NgModel}from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    email:''
  }
  constructor() { }

  ngOnInit() {
  }

}
