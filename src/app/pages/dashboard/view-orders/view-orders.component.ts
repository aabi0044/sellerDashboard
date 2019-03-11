import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { element } from '@angular/core/src/render3';
import { ExportToCsv } from 'export-to-csv';

const options = { 
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalSeparator: '.',
  showLabels: true, 
  showTitle: true,
  title: 'View Order ',
  useTextFile: false,
  useBom: true,
  useKeysAsHeaders: true,
  // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
};
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
  searchText='';
  startDateFilter: Date;
  endDateFilter: Date;
  showEntries = 10;
  public results = [];
  coming;
  ngOnInit() {
    this.getOrders();
    // this.getPendingOrders();
    // this.getDue();



  }
  getOrders() {
    this.api.getOrders().subscribe(res => {
      this.coming=res;
      let a = this.coming.filter(e=>e.userid==localStorage.getItem('uid'));
      console.log(res);
      this.orders = a;
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
      this.coming=res;
      let b = this.coming.filter(e=>e.userid==localStorage.getItem('uid'));
      this.data = b;
      let a = this.data.filter(e => e.deliveryStatus == "In Transit" && e.userid==localStorage.getItem('uid'));
      console.log(a);
      this.orders = a;
    })
  }

  getInProgress() {
    this.api.getOrders().subscribe(res => {
      console.log(res);
      this.coming=res;
      let b = this.coming.filter(e=>e.userid==localStorage.getItem('uid'));
      this.data = b;
      let a = this.data.filter(e => e.deliveryStatus == "Not Delivered"&& e.userid==localStorage.getItem('uid'));
      console.log(a);
      this.orders = a;
    })
  }
  getCompleted() {
    this.api.getOrders().subscribe(res => {
      console.log(res);
      this.coming=res;
      let b = this.coming.filter(e=>e.userid==localStorage.getItem('uid'));

      this.data = b;
      let a = this.data.filter(e => e.deliveryStatus == "Delivered"&& e.userid==localStorage.getItem('uid'));
      console.log(a);
      this.orders = a;
    })
  }
  getFailed() {
    this.api.getOrders().subscribe(res => {
      console.log(res);
      this.coming=res;
      let b = this.coming.filter(e=>e.userid==localStorage.getItem('uid'));
      this.data = b;
      let a = this.data.filter(e => e.deliveryStatus == "Returned"&& e.userid==localStorage.getItem('uid'));
      console.log(a);
      this.orders = a;
    })
  }

  filter(product) {
    var array = Object.assign(this.orders);
    this.orders = this.orders.filter(e => e.orderId == product );
    console.log(product);
    if (product == '') {
      this.api.getOrders().subscribe(res => {
        this.coming=res;
        let a = this.coming.filter(e=>e.userid== localStorage.getItem('uid'));
        this.orders = a;
      })
      // this.orders = array;
      console.log(array);
      console.log('object');
    }
  

  }
  filterCondition(product) {
  
  
    return product.orderRef.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
    }
  filterByDate() {

    console.log(this.startDateFilter);
    let i = this.orders.filter((elem) => {
      return elem.forDelivery >= this.startDateFilter && elem.forDelivery <= this.endDateFilter && elem.userid==localStorage.getItem('uid');
    })
    console.log(i);
    this.orders = i;
 
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
  CSV(){

    const csvExporter = new ExportToCsv(options);
     csvExporter.generateCsv(this.orders);
   }

}
