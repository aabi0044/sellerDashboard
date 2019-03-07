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
data;
public results = [];
  ngOnInit() {
    this.getOrders();
    // this.getPendingOrders();
    // this.getDue();
    // this.getOverDue();
    this.getAllUnDispatched();
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

  getOverDue(){
    this.api.getOrders().subscribe(res=>{
      console.log(res);
      
      this.orders=res;
      let a = this.orders.filter(e=>e.deliveryStatus=="overdue");
      console.log(a);
      
    })
    }
    getDue(){
      this.api.getOrders().subscribe(res=>{
        console.log(res);
        
        this.orders=res;
        let a = this.orders.filter(e=>e.deliveryStatus=="due");
        console.log(a);
     
      })
      }
      getAllUnDispatched(){
        this.api.getOrders().subscribe(res=>{
          console.log(res);
          
          this.orders=res;
          let a = this.orders.filter(e=>e.deliveryStatus=="due" || e.deliveryStatus=="overdue");
          console.log(a);
     
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
