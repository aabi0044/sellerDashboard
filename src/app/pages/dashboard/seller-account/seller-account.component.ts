import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-seller-account',
  templateUrl: './seller-account.component.html',
  styleUrls: ['./seller-account.component.css']
})
export class SellerAccountComponent implements OnInit {
image;
getuser;
id;
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getUser();
  }
  getUser(){
    this.id=localStorage.getItem('uid');
    this.api.getSpecificUser(this.id).subscribe(res=>{
      console.log(res);
      this.getuser=res;
    })
  }
  updateUser(){
let data={
  
}
  }
}
