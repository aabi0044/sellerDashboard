import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {
id;
invoice;
  constructor(private route: ActivatedRoute,
    private api:ApiService) {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
   }
 
  ngOnInit() {
    this.getOrder();
  }
getOrder(){
  console.log("object");
this.api.getSpecificOrder(this.id).subscribe(res=>{
  console.log(res);
  this.invoice=res;
})
}
}
