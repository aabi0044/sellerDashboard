import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {
allProducts;


productName;
productPrice;
salePrice;
saleStartDate:Date;
saleEndDate:Date;
sku;
weight;
brandName;
manufactureName;
catagory;
sellerSku;
condition;
shortDescription;
detailedDescription;


  @ViewChild('tab1') Tab1 : ElementRef;
  @ViewChild('tab2') Tab2 : ElementRef;
  @ViewChild('tab3') Tab3 : ElementRef;
  @ViewChild('tab1pill') Tab1Pill : ElementRef;
  @ViewChild('tab2pill') Tab2Pill : ElementRef;
  @ViewChild('tab3pill') Tab3Pill : ElementRef;
  constructor(public renderer:Renderer,
    private api :ApiService,
    private tos:ToasterService) {
    

   }

  ngOnInit() {
   
  }

  gotoTab2()
  {
    if(this.productName== null || this.sku==null || this.weight== null || this.brandName==null || this.manufactureName==null){
      this.tos.warning("Must fill all entries")
    }
    else{
      console.log(this.Tab1Pill);
      console.log(this.Tab2Pill);
      this.renderer.setElementProperty(this.Tab1.nativeElement,'aria-selected',false);
      this.renderer.setElementProperty(this.Tab1.nativeElement,'className','nav-link');
      this.renderer.setElementProperty(this.Tab1Pill.nativeElement,'className','tab-pane fade');
  
      this.renderer.setElementProperty(this.Tab2.nativeElement,'aria-selected',true);
      this.renderer.setElementProperty(this.Tab2.nativeElement,'className','nav-link active');
      this.renderer.setElementProperty(this.Tab2Pill.nativeElement,'className','tab-pane fade show active');
      console.log(this.Tab1Pill);
      console.log(this.Tab2Pill);
    }
    
  }

  gotoTab3()
  {
    console.log(this.saleEndDate);
    console.log(this.saleStartDate);
    // console.log(this.Tab2Pill);
    // console.log(this.Tab3Pill);
    if(this.productPrice!=null||this.sellerSku!=null || this.salePrice != null ||this.saleEndDate != null || this.saleStartDate!= null ){
      if(this.saleEndDate>=this.saleStartDate){

        console.log("object");
        this.renderer.setElementProperty(this.Tab2.nativeElement,'aria-selected',false);
      this.renderer.setElementProperty(this.Tab2.nativeElement,'className','nav-link');
      this.renderer.setElementProperty(this.Tab2Pill.nativeElement,'className','tab-pane fade');
  
      this.renderer.setElementProperty(this.Tab3.nativeElement,'aria-selected',true);
      this.renderer.setElementProperty(this.Tab3.nativeElement,'className','nav-link active');
      this.renderer.setElementProperty(this.Tab3Pill.nativeElement,'className','tab-pane fade show active');
      }
      else{
        this.tos.warning("Sale Ending Date must grater than Starting date ")
        console.log("nothing");
      }
    }
    else{
this.tos.warning('Must fill all entries')
    }
   
    
    // console.log(this.Tab2Pill);
    // console.log(this.Tab3Pill);
  }
  gotoTab1()
  {
    if(this.shortDescription != null || this.detailedDescription != null){
      console.log(this.Tab2Pill);
      console.log(this.Tab3Pill);
      this.renderer.setElementProperty(this.Tab3.nativeElement,'aria-selected',false);
      this.renderer.setElementProperty(this.Tab3.nativeElement,'className','nav-link');
      this.renderer.setElementProperty(this.Tab3Pill.nativeElement,'className','tab-pane fade');
  
      this.renderer.setElementProperty(this.Tab1.nativeElement,'aria-selected',true);
      this.renderer.setElementProperty(this.Tab1.nativeElement,'className','nav-link active');
      this.renderer.setElementProperty(this.Tab1Pill.nativeElement,'className','tab-pane fade show active');
      console.log(this.Tab2Pill);
      console.log(this.Tab3Pill);
    }
    else{
this.tos.warning("Must fill all entries")
    }
   
  }
  ngAfterViewInit(){

  }

  createProduct(){
    this.api.getProducts().subscribe(res=>{
      this.allProducts=res;
 
    let data={
      "id":this.allProducts.id+1,
      "productName":this.productName,
      "productPrice":this.productPrice,
      "salePrice":this.salePrice,
      "saleStartDate":this.saleStartDate,
      "saleEndDate":this.saleEndDate,
      "sku":this.sku,
      "weight":this.weight,
      "brandName":this.brandName, 
      "manufacturerName":this.manufactureName,
      "catagory":this.catagory,
      "sellerSku":this.sellerSku,
      "condition":this.condition,
      "shortDescription":this.shortDescription,
      "detailedDescription":this.detailedDescription
    }
    this.api.CreateProduct(data).subscribe(res=>{
      console.log("product Created Successfully");
    })
  });

  }
}
