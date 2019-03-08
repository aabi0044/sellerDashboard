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
data;
public results = [];
  ngOnInit() {
    this.getOrders();
    // this.getPendingOrders();
    // this.getDue();
    

   
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
  this.getOrders();
    console.log("1")
  }
buttoncheck2(){
    this.checkbox2.nativeElement.checked=true  
    this.checkbox1.nativeElement.checked=false;
    this.checkbox3.nativeElement.checked=false;
    this.checkbox4.nativeElement.checked=false;
    this.checkbox5.nativeElement.checked=false;
   
    console.log("2");
    this.getPendingOrders();
  
}
buttoncheck3(){
    this.checkbox3.nativeElement.checked=true
    this.checkbox1.nativeElement.checked=false;
    this.checkbox2.nativeElement.checked=false;
    this.checkbox4.nativeElement.checked=false;
    this.checkbox5.nativeElement.checked=false;
    console.log("3")
this.getInProgress();
  }

buttoncheck4(){
    this.checkbox4.nativeElement.checked=true
    this.checkbox1.nativeElement.checked=false;
    this.checkbox2.nativeElement.checked=false;
    this.checkbox3.nativeElement.checked=false;
    this.checkbox5.nativeElement.checked=false;
    console.log("4")
  this.getCompleted();
}
buttoncheck5(){
    this.checkbox5.nativeElement.checked=true
    this.checkbox1.nativeElement.checked=false;
    this.checkbox2.nativeElement.checked=false;
    this.checkbox4.nativeElement.checked=false;
    this.checkbox3.nativeElement.checked=false;
    console.log("5")
 this.getFailed();
  
}
//===================================Filter===============================
getPendingOrders(){
  this.api.getOrders().subscribe(res=>{
    console.log(res);
    
    this.data=res;
    let a = this.data.filter(e=>e.deliveryStatus=="In Transit");
    console.log(a);
    this.orders=a;
  })
  }

  getInProgress(){
    this.api.getOrders().subscribe(res=>{
      console.log(res);
      
      this.data=res;
      let a = this.data.filter(e=>e.deliveryStatus=="Not Delivered");
      console.log(a);
      this.orders=a;
    })
    }
    getCompleted(){
      this.api.getOrders().subscribe(res=>{
        console.log(res);
        
        this.data=res;
        let a = this.data.filter(e=>e.deliveryStatus=="Delivered");
        console.log(a);
        this.orders=a;
      })
      }
      getFailed(){
        this.api.getOrders().subscribe(res=>{
          console.log(res);
          
          this.data=res;
          let a = this.data.filter(e=>e.deliveryStatus=="Returned");
          console.log(a);
          this.orders=a;
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
