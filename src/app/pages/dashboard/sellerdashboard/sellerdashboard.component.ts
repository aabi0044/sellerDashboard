import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-sellerdashboard',
  templateUrl: './sellerdashboard.component.html',
  styleUrls: ['./sellerdashboard.component.css']
})
export class SellerdashboardComponent implements OnInit {
coming;
getpending;
getCompleted;
getDeliveryProgress;
completed;
products;
comng;
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getPaymentPending();
    this.getPaymentCompleted();
    this.getDeliveryInProgress();
    this.getOrderCompleted();
    this.getProducts();
  }
getPaymentPending(){
this.api.getOrders().subscribe(res=>{
this.coming=res;
let a =this.coming.filter(e=>e.orderStatus=="Payment Pending" && e.userid==localStorage.getItem('uid'));
this.getpending=a.length;
console.log(this.getpending);
console.log(a);
})
}
getPaymentCompleted(){
  this.api.getOrders().subscribe(res=>{
  this.coming=res;
  let a =this.coming.filter(e=>e.orderStatus=="Payment Completed" && e.userid==localStorage.getItem('uid'));
  this.getCompleted=a.length;
  console.log(this.getpending);
  console.log(a);
  })
  }
  getDeliveryInProgress(){
    this.api.getOrders().subscribe(res=>{
    this.coming=res;
    let a =this.coming.filter(e=>e.deliveryStatus=="In Transit" && e.userid==localStorage.getItem('uid'));
    this.getDeliveryProgress=a.length;
    console.log(this.getDeliveryProgress);
    console.log(a);
    })
    }
    getOrderCompleted(){
      this.api.getOrders().subscribe(res=>{
      this.coming=res;
      let a =this.coming.filter(e=>e.orderStatus=="Completed" && e.userid==localStorage.getItem('uid'));
      this.completed=a.length;
      console.log(this.completed);
      console.log(a);
      })
      }
      getProducts(){
        this.api.getProducts().subscribe(res=>{
this.comng=res;
let a = this.comng.filter(e=>e.userid==localStorage.getItem('uid'));
this.products=a;
console.log(this.products);
        })
      }
}
