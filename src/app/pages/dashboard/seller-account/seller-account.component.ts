import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { rename } from 'fs';

@Component({
  selector: 'app-seller-account',
  templateUrl: './seller-account.component.html',
  styleUrls: ['./seller-account.component.css']
})
export class SellerAccountComponent implements OnInit {
image;
image1;
getuser;
id;
fname;
lname;
companyName;
billingName;
phoneNumber;
street1;
street2;
city;
state;
imageData: any;
@ViewChild('display') displayImage : ElementRef;
  constructor(private api:ApiService,
    public ren: Renderer2) { 
      this.imageData="assets/images/avatar-1.jpg";
    }

  ngOnInit() {
    this.getUser();

  }
  getImage(event:any){
    let d = this.imageData;
    console.log(event.target.files[0]);
    var reader = new FileReader();
    reader.onload = (_event) => { 
      this.imageData = reader.result;
    }
    reader.readAsDataURL(event.target.files[0]);
  }

  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

  getUser(){
    this.id=localStorage.getItem('uid');
    this.api.getSpecificUser(this.id).subscribe(res=>{
      console.log(res);
      this.getuser=res;
    })
  }
  updateUser(){
    var reader = new FileReader();
    reader.onload = function(){
      console.log(reader.result);
    }
    reader.readAsDataURL(this.image);
let data={
"firstName":this.fname,
"lastName":this.lname,
"companyName":this.companyName,
"billingName":this.billingName,
"phoneNumber":this.phoneNumber,
"street1":this.street1,
"street2":this.street2,
"city":this.city,
"state":this.state



}
  }
  selectCountry(event:any){
    let country=event.target.value;
    console.log(country);
    this.city=country;
console.log(this.image);
  }
}
