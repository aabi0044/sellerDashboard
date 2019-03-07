import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
@ViewChild('ch1') checkbox1:ElementRef;
@ViewChild('ch2') checkbox2:ElementRef;
@ViewChild('ch3') checkbox3:ElementRef;
@ViewChild('ch4') checkbox4:ElementRef;
@ViewChild('ch5') checkbox5:ElementRef;

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
buttoncheck(){
 
    this.checkbox1.nativeElement.checked=true
    this.checkbox2.nativeElement.checked=false;
    this.checkbox3.nativeElement.checked=false;
    this.checkbox4.nativeElement.checked=false;
    this.checkbox5.nativeElement.checked=false;
  
    console.log("1")
  }
buttoncheck2(){
    this.checkbox2.nativeElement.checked=true  
    this.checkbox1.nativeElement.checked=false;
    this.checkbox3.nativeElement.checked=false;
    this.checkbox4.nativeElement.checked=false;
    this.checkbox5.nativeElement.checked=false;
   
    console.log("2")
  
}
buttoncheck3(){
    this.checkbox3.nativeElement.checked=true
    this.checkbox1.nativeElement.checked=false;
    this.checkbox2.nativeElement.checked=false;
    this.checkbox4.nativeElement.checked=false;
    this.checkbox5.nativeElement.checked=false;
    console.log("3")

  }

buttoncheck4(){
    this.checkbox4.nativeElement.checked=true
    this.checkbox1.nativeElement.checked=false;
    this.checkbox2.nativeElement.checked=false;
    this.checkbox3.nativeElement.checked=false;
    this.checkbox5.nativeElement.checked=false;
    console.log("4")
  
}
buttoncheck5(){
    this.checkbox5.nativeElement.checked=true
    this.checkbox1.nativeElement.checked=false;
    this.checkbox2.nativeElement.checked=false;
    this.checkbox4.nativeElement.checked=false;
    this.checkbox3.nativeElement.checked=false;
    console.log("5")
 
  
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
