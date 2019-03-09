import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manageinventory',
  templateUrl: './manageinventory.component.html',
  styleUrls: ['./manageinventory.component.css']
})
export class ManageinventoryComponent implements OnInit {
  showEntries = 10;
  products;
  getPrd;
  constructor(private api :ApiService,
    private tos:ToasterService,
    private router:Router) { }

  ngOnInit() {
    this.getProducts();
  }
getProducts(){
this.api.getProducts().subscribe(res=>{
  this.products=res;
})
}
activate(id){
  console.log(id);
  this.api.getSpecificProduct(id).subscribe(res=>{
this.getPrd=res;
let data={
  "id":this.getPrd.id,
  "productName":this.getPrd.productName,
  "productPrice":this.getPrd.productPrice,
  "salePrice":this.getPrd.salePrice,
  "saleStartDate":this.getPrd.saleStartDate,
  "saleEndDate":this.getPrd.saleEndDate,
  "sku":this.getPrd.sku,
  "weight":this.getPrd.weight,
  "brandName":this.getPrd.brandName, 
  "manufacturerName":this.getPrd.manufacturerName,
  "catagory":this.getPrd.catagory,
  "sellerSku":this.getPrd.sellerSku,
  "condition":this.getPrd.condition,
  "shortDescription":this.getPrd.shortDescription,
  "detailedDescription":this.getPrd.detailedDescription,
  "status":this.getPrd.status,
  "quantity":this.getPrd.quantity,
  "prdstatus":"Active"
}
this.api.updateProduct(id,data).subscribe(res=>{
this.tos.showSuccess("Status Updated");
setTimeout(function(){
  location.reload();
},2000);


})
  })

}
deActivate(id){
  console.log(id);
  this.api.getSpecificProduct(id).subscribe(res=>{
this.getPrd=res;
let data={
  "id":this.getPrd.id,
  "productName":this.getPrd.productName,
  "productPrice":this.getPrd.productPrice,
  "salePrice":this.getPrd.salePrice,
  "saleStartDate":this.getPrd.saleStartDate,
  "saleEndDate":this.getPrd.saleEndDate,
  "sku":this.getPrd.sku,
  "weight":this.getPrd.weight,
  "brandName":this.getPrd.brandName, 
  "manufacturerName":this.getPrd.manufacturerName,
  "catagory":this.getPrd.catagory,
  "sellerSku":this.getPrd.sellerSku,
  "condition":this.getPrd.condition,
  "shortDescription":this.getPrd.shortDescription,
  "detailedDescription":this.getPrd.detailedDescription,
  "status":this.getPrd.status,
  "quantity":this.getPrd.quantity,
  "prdstatus":"Deactive"
}
this.api.updateProduct(id,data).subscribe(res=>{
this.tos.showSuccess("Status Updated");
setTimeout(function(){
  location.reload();
},2000);
})
  })
}
edit(id){
this.router.navigate(['dashboard/createproduct/' + id]);

}
}
