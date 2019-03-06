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
  }
getOrders(){
this.api.getOrders().subscribe(res=>{
  console.log(res);
  this.orders=res;
})
}
viewInvoice(id){
  console.log(id);
  this.router.navigate(['dashboard/invoice/'+id]);
}
viewShipment(id){
  console.log(id);
  this.router.navigate(['dashboard/shipment/'+id]);
}
}
