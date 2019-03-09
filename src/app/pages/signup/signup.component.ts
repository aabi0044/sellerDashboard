import { Component, OnInit ,ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';
import { timingSafeEqual } from 'crypto';

import{ToasterService}from 'src/app/services/toaster/toaster.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={
    fname:'',
    lastname:'',
    email:'',
    password:'',
    cpassword:''

  }
  getid;
  coming;
  userid;
  arrived;
  constructor(private api :ApiService,
    private router:Router,
    private tos:ToasterService
    ) {
  // @ViewChild('btn')  button: ElementRef;

    this.getAllUsers();
   }

  ngOnInit() {
  }
  createUser(){
    try{
      if(this.user.email.match("^[a-z0-9._%+-]+\.@[a-z0-9.-]+\.[a-z]{2,4}$")
    && this.user.password.match("(?=.*[#/?//&/@/$/!/%////\/'/'/}/{/}])(?=.*).{7,}")
    &&this.user.fname!=''
    &&this.user.lastname!=''
    &&this.user.password==this.user.cpassword
    ){
     
      this.api.getUsers().subscribe(res=>{
      console.log(res);
      this.getid=res;
     let index= this.getid.length-1;
     console.log(index);
     console.log(this.getid[index].id);
     let idinc=this.getid[index].id+1
      let dataEmail=this.getid.filter(e=>e.email==this.user.email);
      console.log(dataEmail);
      if(dataEmail.length==0){
        // console.log(d[inde].id);
    //     this.userid=idinc+1
    //  console.log(localStorage.setItem('uid',this.userid));   
        console.log("not exist");
   
        this.tos.warning("User Does not Exist")
            let data={
        "id":this.getid[index].id+1,
        "firstName":this.user.fname,
        "lastName":this.user.lastname,
        "email":this.user.email,
        "password":this.user.password
       
        
      }
    
      this.api.Createuser(data).subscribe(res=>{
    console.log("userCreated");
this.api.getUsers().subscribe(res=>{
  this.arrived=res;
  let a = this.arrived.filter(e=>e.email==this.user.email && e.password== this.user.password);

let id=a[0].id;
console.log(id);
localStorage.setItem('uid',id);

  this.tos.showSuccess('User Created')
  
  // for (let i=0; i<10;i++){
  //   this.createManualOrders();
    
  // }
  this.router.navigate(['/login']);

})
  
   
    
  })
      }
      else{
        this.tos.warning("Already Exist");
        console.log("exist");
      }
  
    })
  }
  else{
    this.tos.warning("Email is not in format");
    console.log("Email is not in format")
  }
    }
    catch(error){
     this.tos.warning(error.message);
      console.log(error.message);

    }
    
  }
getAllUsers(){
  this.api.getUsers().subscribe(res=>{
    console.log(res);
  })
}
// createManualOrders(){
//   this.api.getOrders().subscribe(res=>{
// this.coming=res;
// let index=this.coming.length-1;
// let prdid=this.coming[index].id;
// let orderid=this.coming[index].orderId;
// let trackingNumber=this.coming[index].trackingNumber;
// let invoice=this.coming[index].invoiceNo;
// let data={
//   "id": prdid+1,
//   "userid": localStorage.getItem('uid'),
//   "orderId": orderid+1,
//   "image": "./image.jpg",
//   "orderPlaced": " 2019-03-02",
//   "forDelivery": "2019-03-05",
//   "trackingNumber": trackingNumber+1,
//   "customerName": "johan",
//   "deliveryStatus": "In Transit",
//   "orderStatus": "Payment Completed",
//   "totalPrice": 987,
//   "invoiceNo": invoice+1,
//   "customerEmail": "customer@email.com",
//   "shippingEmail": "customer@email.com",
//   "billingAddress": "2341  Tenmile Road Boston",
//   "shippingAddress": "2341  Tenmile Road Boston",
//   "billingPhone": "0014151247892",
//   "netTotal": 5000,
//   "subTotal": 5000,
//   "Discount": 1000,
//   "vat": 100,
//   "products": [
//     {
//       "itemName": "Origin License",
//       "Description": "Extended License",
//       "unitCost": 1000,
//       "quantity": 5,
//       "total": 5000
//     },
//     {
//       "itemName": "Origin License",
//       "Description": "Extended License",
//       "unitCost": 1000,
//       "quantity": 5,
//       "total": 5000
//     },
//     {
//       "itemName": "Origin License",
//       "Description": "Extended License",
//       "unitCost": 1000,
//       "quantity": 5,
//       "total": 5000
//     },
//     {
//       "itemName": "Origin License",
//       "Description": "Extended License",
//       "unitCost": 1000,
//       "quantity": 5,
//       "total": 5000
//     }
//   ]
// }
// this.api.CreateOrder(data).subscribe(res=>{
//   this.tos.showSuccess('Orders Manually Created');
//   this.MonthlyOrderReport();
// })
//   })
// }
// MonthlyOrderReport(){
//   let data={
//     "period": "2019-02-19",
//     "qty": 8,
//     "userid": localStorage.getItem('uid'),
//     "subtotal": 5000,
//     "netIncome": 3875
//   }
//   this.api.CreateOrderReport(data).subscribe(res=>{
    
//   });
// }
}
