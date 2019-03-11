import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { Router } from '@angular/router';
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
  selector: 'app-manageinventory',
  templateUrl: './manageinventory.component.html',
  styleUrls: ['./manageinventory.component.css']
})
export class ManageinventoryComponent implements OnInit {
  @ViewChild('ch1') checkbox1: ElementRef;
  @ViewChild('ch2') checkbox2: ElementRef;
  @ViewChild('ch3') checkbox3: ElementRef;
  @ViewChild('ch4') checkbox4: ElementRef;
  @ViewChild('ch5') checkbox5: ElementRef;
  @ViewChild('ch6') checkbox6: ElementRef;
  showEntries = 10;
  products;
  getPrd;
  data;
  searchText='';
  coming;
  constructor(private api :ApiService,
    private tos:ToasterService,
    private router:Router) { }

  ngOnInit() {
    this.getProducts();
  }
  buttoncheck() {

    this.checkbox1.nativeElement.checked = true
    this.checkbox2.nativeElement.checked = false;
    this.checkbox3.nativeElement.checked = false;
    this.checkbox4.nativeElement.checked = false;
    this.checkbox5.nativeElement.checked = false;
    this.checkbox6.nativeElement.checked = false;
   this.getProducts();
    console.log("1")
  }
  buttoncheck2() {
    this.checkbox2.nativeElement.checked = true
    this.checkbox1.nativeElement.checked = false;
    this.checkbox3.nativeElement.checked = false;
    this.checkbox4.nativeElement.checked = false;
    this.checkbox5.nativeElement.checked = false;
    this.checkbox6.nativeElement.checked = false;
this.getPending();
    console.log("2");
    

  }
  buttoncheck3() {
    this.checkbox3.nativeElement.checked = true
    this.checkbox1.nativeElement.checked = false;
    this.checkbox2.nativeElement.checked = false;
    this.checkbox4.nativeElement.checked = false;
    this.checkbox5.nativeElement.checked = false;
    this.checkbox6.nativeElement.checked = false;
    console.log("3")
    this.getApproved();

  }

  buttoncheck4() {
    this.checkbox4.nativeElement.checked = true
    this.checkbox1.nativeElement.checked = false;
    this.checkbox2.nativeElement.checked = false;
    this.checkbox3.nativeElement.checked = false;
    this.checkbox5.nativeElement.checked = false;
    this.checkbox6.nativeElement.checked = false;
    console.log("4")
    this.getNotApproved();

  }
  buttoncheck5() {
    this.checkbox5.nativeElement.checked = true
    this.checkbox1.nativeElement.checked = false;
    this.checkbox2.nativeElement.checked = false;
    this.checkbox4.nativeElement.checked = false;
    this.checkbox3.nativeElement.checked = false;
    this.checkbox6.nativeElement.checked = false;
    console.log("5")
    this.getActive();
    

  }
  buttoncheck6() {
    this.checkbox6.nativeElement.checked = true
    this.checkbox1.nativeElement.checked = false;
    this.checkbox2.nativeElement.checked = false;
    this.checkbox4.nativeElement.checked = false;
    this.checkbox3.nativeElement.checked = false;
    this.checkbox5.nativeElement.checked = false;
    console.log("5")
    this.getNotActive();

  }


getPending(){
  this.api.getProducts().subscribe(res=>{
    this.data=res;
    let a =this.data.filter((elem)=>{
      return elem.status=="Pending" && elem.userid==localStorage.getItem('uid');
    })
    this.products=a;
  })
}
getApproved(){
  this.api.getProducts().subscribe(res=>{
    this.data=res;
    let a =this.data.filter((elem)=>{
      return elem.status=="Approved"&& elem.userid==localStorage.getItem('uid');
    })
    this.products=a;
  })
}
getNotApproved(){
  this.api.getProducts().subscribe(res=>{
    this.data=res;
    let a =this.data.filter((elem)=>{
      return elem.status=="NotApproved" && elem.userid==localStorage.getItem('uid');
    })
    this.products=a;
  })
}
getActive(){
  this.api.getProducts().subscribe(res=>{
    this.data=res;
    let a =this.data.filter((elem)=>{
      return elem.prdstatus=="Active" && elem.userid==localStorage.getItem('uid');
    })
    this.products=a;
  })
}
getNotActive(){
  this.api.getProducts().subscribe(res=>{
    this.data=res;
    let a =this.data.filter((elem)=>{
      return elem.prdstatus=="Deactive" && elem.userid==localStorage.getItem('uid');
    })
    this.products=a;
  })
}
filterCondition(product) {

  return product.productName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
}

//===================================filter=====================================

getProducts(){
this.api.getProducts().subscribe(res=>{
  this.coming=res;
  let a =this.coming.filter((elem)=>{
    return elem.userid==localStorage.getItem('uid');
  })
  this.products=a;
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
  "prdstatus":"Active",
  "userid":localStorage.getItem('uid')

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
  "prdstatus":"Deactive",
  "userid":localStorage.getItem('uid')
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
CSV(){

  const csvExporter = new ExportToCsv(options);
   csvExporter.generateCsv(this.products);
 }
}
