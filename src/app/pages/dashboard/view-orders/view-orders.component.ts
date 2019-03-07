import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  constructor(private api:ApiService, private router:Router,private route: ActivatedRoute) { }
orders;
  ngOnInit() {
    this.getOrders();
    this.getPendingOrders();
  }
getOrders(){
this.api.getOrders().subscribe(res=>{
  console.log(res);
  this.orders=res;
})
}
//===================================Filter===============================
getPendingOrders(){
  this.api.getOrders().subscribe(res=>{
    console.log(res);
    
    this.orders=res;
    let a = this.orders.filter(e=>e.deliveryStatus=="pending");
    console.log(a);
  })
  }

  getOverDueOrders(){
    this.api.getOrders().subscribe(res=>{
      console.log(res);
      this.orders=res;
    })
    }
    getDueOrders(){
      this.api.getOrders().subscribe(res=>{
        console.log(res);
        this.orders=res;
      })
      }
  //=========================================================================
viewInvoice(id){
  console.log(id);
  this.router.navigate(['dashboard/invoice/'+id]);
}
viewShipment(id){
  console.log(id);
  this.router.navigate(['dashboard/shipment/'+id]);
}
onChange(event:any){
  let val=event.target.value;
  console.log(val);
  
}
}
