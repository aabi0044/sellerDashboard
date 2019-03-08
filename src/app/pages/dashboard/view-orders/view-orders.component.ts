import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {
  @ViewChild('ch1') checkbox1: ElementRef;
  @ViewChild('ch2') checkbox2: ElementRef;
  @ViewChild('ch3') checkbox3: ElementRef;
  @ViewChild('ch4') checkbox4: ElementRef;
  @ViewChild('ch5') checkbox5: ElementRef;

  constructor(private api: ApiService, private router: Router, private route: ActivatedRoute
   ) { }
  orders;
 comingdate;
  startdate;
  enddate;
  data;
  use;
  searchText: number;
  startDateFilter:Date ;
  endDateFilter:Date ;
  public results = [];
  ngOnInit() {
    this.getOrders();
    // this.getPendingOrders();
    // this.getDue();



  }
  getOrders() {
    this.api.getOrders().subscribe(res => {
      console.log(res);
      this.orders = res;
    })
  }
  buttoncheck() {

    this.checkbox1.nativeElement.checked = true
    this.checkbox2.nativeElement.checked = false;
    this.checkbox3.nativeElement.checked = false;
    this.checkbox4.nativeElement.checked = false;
    this.checkbox5.nativeElement.checked = false;
    this.getOrders();
    console.log("1")
  }
  buttoncheck2() {
    this.checkbox2.nativeElement.checked = true
    this.checkbox1.nativeElement.checked = false;
    this.checkbox3.nativeElement.checked = false;
    this.checkbox4.nativeElement.checked = false;
    this.checkbox5.nativeElement.checked = false;

    console.log("2");
    this.getPendingOrders();

  }
  buttoncheck3() {
    this.checkbox3.nativeElement.checked = true
    this.checkbox1.nativeElement.checked = false;
    this.checkbox2.nativeElement.checked = false;
    this.checkbox4.nativeElement.checked = false;
    this.checkbox5.nativeElement.checked = false;
    console.log("3")
    this.getInProgress();
  }

  buttoncheck4() {
    this.checkbox4.nativeElement.checked = true
    this.checkbox1.nativeElement.checked = false;
    this.checkbox2.nativeElement.checked = false;
    this.checkbox3.nativeElement.checked = false;
    this.checkbox5.nativeElement.checked = false;
    console.log("4")
    this.getCompleted();
  }
  buttoncheck5() {
    this.checkbox5.nativeElement.checked = true
    this.checkbox1.nativeElement.checked = false;
    this.checkbox2.nativeElement.checked = false;
    this.checkbox4.nativeElement.checked = false;
    this.checkbox3.nativeElement.checked = false;
    console.log("5")
    this.getFailed();

  }
  //===================================Filter===============================
  getPendingOrders() {
    this.api.getOrders().subscribe(res => {
      console.log(res);

      this.data = res;
      let a = this.data.filter(e => e.deliveryStatus == "In Transit");
      console.log(a);
      this.orders = a;
    })
  }

  getInProgress() {
    this.api.getOrders().subscribe(res => {
      console.log(res);

      this.data = res;
      let a = this.data.filter(e => e.deliveryStatus == "Not Delivered");
      console.log(a);
      this.orders = a;
    })
  }
  getCompleted() {
    this.api.getOrders().subscribe(res => {
      console.log(res);

      this.data = res;
      let a = this.data.filter(e => e.deliveryStatus == "Delivered");
      console.log(a);
      this.orders = a;
    })
  }
  getFailed() {
    this.api.getOrders().subscribe(res => {
      console.log(res);

      this.data = res;
      let a = this.data.filter(e => e.deliveryStatus == "Returned");
      console.log(a);
      this.orders = a;
    })
  }

  filter(product) {
    var array = Object.assign(this.orders);
    this.orders = this.orders.filter(e => e.trackingNumber == product);
    console.log(product);
    if (product == '') {
      this.api.getOrders().subscribe(res => {
        this.orders = res;
      })
      // this.orders = array;
      console.log(array);
      console.log('object');
    }


  }
  filterByDate() {

  
    console.log(this.startDateFilter);
    let r=new Date(this.startDateFilter);
    let t=new Date(this.endDateFilter);
    console.log(r);
     this.startdate = { year: r.getFullYear(), month: r.getMonth() + 1, day:r.getDate() };
    console.log(this.startdate);
     this.enddate = { year: t.getFullYear(), month: t.getMonth() + 1, day: t.getDate() };

let b= this.orders.filter((elem)=>{
  let w = new Date(elem.forDelivery);
  // console.log(w);
   this.comingdate = { year: w.getFullYear(), month: w.getMonth() + 1, day: w.getDate() };
  console.log(this.comingdate);
  if(this.comingdate.year==this.startdate.year && this.comingdate.year ==this.enddate.year && this.comingdate.month ==this.startdate.month ){


    return (this.comingdate.day>=this.startdate.day && this.comingdate.day <= this.enddate.day)
  }
else if(this.startdate.year==this.enddate.year && this.startdate.month != this.enddate.month){
  return this.comingdate.year==this.startdate.year;
}

  // return (this.comingdate.year==this.startdate.year && this.comingdate.month == this.startdate.month && this.comingdate.day>= this.startdate.day)
  // && (this.comingdate.year==this.enddate.year && this.comingdate.month==this.enddate.year && this.comingdate.day<=this.enddate.day)
})
console.log(b);
 if(this.comingdate.year==this.startdate.year && this.comingdate.year ==this.enddate.year && this.comingdate.month ==this.startdate.month ){
this.orders=b;
 }
 else if(this.startdate.year==this.enddate.year && this.startdate.month != this.enddate.month){
this.use=b;
this.use.filter((elem)=>{
  let w = new Date(elem.forDelivery);
  this.comingdate = { year: w.getFullYear(), month: w.getMonth() + 1, day: w.getDate() };
return (this.comingdate.month== this.startdate.month || this.comingdate.month==this.enddate.month)
 && (this.comingdate.day>=this.startdate.day || this.comingdate.day<=this.enddate.day)
})
this.orders=this.use;
 }
  }
  //=========================================================================
  viewInvoice(id) {
    console.log(id);
    this.router.navigate(['dashboard/invoice/' + id]);
  }
  viewShipment(id) {
    console.log(id);
    this.router.navigate(['dashboard/shipment/' + id]);
  }
  onChange(event: any) {
    let val = event.target.value;
    console.log(val);

  }

}
