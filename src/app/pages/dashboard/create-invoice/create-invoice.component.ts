import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {
id;
order;
shipedQuantity;
  constructor(private route: ActivatedRoute,
    private api: ApiService,
    private router:Router) { 
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
  }

  ngOnInit() {
    this.getOrder();
  }
getOrder(){
  this.api.getSpecificOrder(this.id).subscribe(res=>{
this.order=res;
console.log(this.order);
  })
}
saveInvoice(value){
  console.log(value);
  let containputiner = document.querySelector("#"+value);
  console.log(containputiner);
}
}
