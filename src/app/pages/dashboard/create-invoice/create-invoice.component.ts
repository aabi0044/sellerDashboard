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
available=15;
getInvoices;
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
saveInvoice(i){
  if(i[0].quantity<this.available){
    console.log(i[0].quantity);

    
    this.api.getInvoices().subscribe(res=>{
  this.getInvoices=res;
  let len =this.getInvoices.length-1;
  // let id=this.getInvoices[len].id+1;
  
  let data={
    "id":this.id,
    "date":new Date,
    "amount":20000,
    "cart":i,
    "quantityToShip":i[0].quantity,
    "userid":localStorage.getItem('uid')
  }
  this.api.createInvoice(data).subscribe(res=>{
    console.log("created ");
  })
    })

  }
  else{
    this.api.getInvoices().subscribe(res=>{
      this.getInvoices=res;
      let len =this.getInvoices.length-1;
      let id=this.getInvoices[len].id+1;
      
      let data={
        "id":this.id,
        "date":new Date,
        "amount":20000,
        "cart":i,
        "quantityToShip":this.available,
        "userid":localStorage.getItem('uid')
      }
      this.api.createInvoice(data).subscribe(res=>{
        console.log(" okay created ");
      })
        })
  }
  let total=0;
  console.log(i);
//   let length=i.length;
//   for( let j =0;j<length;j++){
// total=total+i.total;

//   }



}
backToInvoice(){
  this.router.navigate(['/dashboard/invoice/'+this.id])
}
}
