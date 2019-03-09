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
email;
password;
coming;
userid;
@ViewChild('display') displayImage : ElementRef;
  constructor(private api:ApiService,
    public ren: Renderer2) { 
      this.imageData="assets/images/avatar-1.jpg";
    }

  ngOnInit() {
    this.getUser();

  }
//   getImage(event:any){
//     let d = this.imageData;
//     console.log(event.target.files[0]);
//     var reader = new FileReader();
//     reader.onload = (_event) => { 
//       this.imageData = reader.result;
//     }
//     reader.readAsDataURL(event.target.files[0]);
//   }

//   getBase64Image(img) {
//     var canvas = document.createElement("canvas");
//     canvas.width = img.width;
//     canvas.height = img.height;

//     var ctx = canvas.getContext("2d");
//     ctx.drawImage(img, 0, 0);

//     var dataURL = canvas.toDataURL("image/png");

//     return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
// }

  getUser(){
    this.id=localStorage.getItem('uid');
    this.api.getSpecificUser(this.id).subscribe(res=>{
this.coming=res;
let a =this.coming.filter((elem)=>{
  return elem.userid==localStorage.getItem('uid');
})
      // console.log(res);
      this.getuser=a;

      this.fname=this.getuser.firstName;
      this.lname=this.getuser.lastName;
      this.companyName=this.getuser.companyName;
      this.billingName=this.getuser.billingName;
      this.phoneNumber=this.getuser.phoneNumber;
     this.street1=this.getuser.street1;
      this.street2=this.getuser.street2;
      this.city=this.getuser.city;
      this.state=this.getuser.state;
this.email=this.getuser.email;
this.password=this.getuser.password;
this.userid=localStorage.getItem('uid');

    })
  }
  updateUser(){
  
    
let data={
"firstName":this.fname,
"lastName":this.lname,
"companyName":this.companyName,
"billingName":this.billingName,
"phoneNumber":this.phoneNumber,
"street1":this.street1,
"street2":this.street2,
"city":this.city,
"state":this.state,
"email":this.email,
"password":this.password,
"userid":localStorage.getItem('uid')

}
this.api.updateUser(this.id,data).subscribe(res=>{
  console.log("user updated");
})
  }
  selectCountry(event:any){
    let country=event.target.value;
    console.log(country);
    this.city=country;
console.log(this.image);
  }
}
