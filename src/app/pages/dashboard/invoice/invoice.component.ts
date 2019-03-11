import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
  id;
  invoice;
  user;
  coming;
 getInvoice;
  segment = 'information';
  constructor(private route: ActivatedRoute,
    private api: ApiService,
    private router:Router) {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
  }

  ngOnInit() {
    this.getCustomer();
    this.getOrder();
    this.getInvoices();
  }
  shipments() {
    this.segment = 'shipments'
  }
  invoices() {
    this.segment = 'invoices'
  }
  information() {
    this.segment = 'information'
  }
  getOrder() {
    console.log("object");
    this.api.getSpecificOrder(this.id).subscribe(res => {
      console.log(res);
      this.invoice = res;
    })
  }
  getCustomer(){

    this.api.getSpecificUser(localStorage.getItem('uid')).subscribe(res=>{
this.user=res;
    })
  }
  view(){
    this.router.navigate(['/dashboard/view-shipment/'+ this.id]);
  }
  createInvoice(){
    this.router.navigate(['/dashboard/create-invoice/'+ this.id]);
  }
  getInvoices(){
    this.api.getInvoices().subscribe(res=>{
      this.coming=res;
      let a = this.coming.filter(e=>e.userid == localStorage.getItem('uid') && e.id==this.id);
      this.getInvoice=a;
      console.log(this.getInvoice);
    })
  }
  viewInvoiceDetails(){
    this.router.navigate(['/dashboard/viewinvoice/'+this.id]);
  }
}
