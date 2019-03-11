import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
@Component({
  selector: 'app-view-shipment',
  templateUrl: './view-shipment.component.html',
  styleUrls: ['./view-shipment.component.css']
})
export class ViewShipmentComponent implements OnInit {
id;
order;
user;
coming;
getInvoice;
qtyToship;
  constructor(private route: ActivatedRoute,
    private api: ApiService) {
      this.id = this.route.snapshot.params['id'];
      console.log(this.id);

  }

  ngOnInit() {
    this.getUser();
    this.getOrder();
    this.getInvoices();

  }
  getOrder(){
    this.api.getSpecificOrder(this.id).subscribe(res=>{
this.order=res;
console.log(this.order);
    })
  }
getUser(){
  this.api.getSpecificUser(localStorage.getItem('uid')).subscribe(res=>{
this.user=res;
console.log(this.user);
  })
}
getInvoices(){
  this.api.getInvoices().subscribe(res=>{
    this.coming=res;
    let a = this.coming.filter(e=>e.userid == localStorage.getItem('uid') && e.id==this.id);
    this.getInvoice=a;
    console.log(this.getInvoice);
this.qtyToship=this.getInvoice[0].quantityToShip;
console.log(this.qtyToship);
  })
}
}
