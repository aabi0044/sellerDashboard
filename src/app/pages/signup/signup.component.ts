import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private api:ApiService
  ) { }

  ngOnInit() {
  }
  createUser(){
    let data={
      "id":1,
      "name":"ali",
     
      
    }
this.api.Createuser(data).subscribe(res=>{
  console.log("userCreated");
})
  }

}
