import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewinvoice',
  templateUrl: './viewinvoice.component.html',
  styleUrls: ['./viewinvoice.component.css']
})
export class ViewinvoiceComponent implements OnInit {
id;
invoice;
order;
user;
  constructor(private route: ActivatedRoute,
    private api: ApiService,
    private router:Router) {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
  }

  ngOnInit() {
    this.getInvoice();
    this.getorder();
    this.getUser();
  }
  getInvoice(){
    this.api.getInvoice(this.id).subscribe(res=>{
this.invoice=res;
console.log(this.invoice);
    })
  }
  getorder(){
    this.api.getSpecificOrder(this.id).subscribe(res=>{
this.order=res;
console.log(this.order);
    })
  }
getUser(){
  this.api.getSpecificUser(localStorage.getItem('uid')).subscribe(res=>{
this.user=res;
  })
}
}
