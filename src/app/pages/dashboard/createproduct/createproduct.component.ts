import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  saleStartDate: Date;
  saleEndDate: Date;
  sku;
  weight;
  brandName;
  manufactureName;
  catagory;
  sellerSku;
  condition;
  shortDescription;
  detailedDescription;


  userid;

  prdid;


  @ViewChild('tab1') Tab1: ElementRef;
  @ViewChild('tab2') Tab2: ElementRef;
  @ViewChild('tab3') Tab3: ElementRef;
  @ViewChild('tab1pill') Tab1Pill: ElementRef;
  @ViewChild('tab2pill') Tab2Pill: ElementRef;
  @ViewChild('tab3pill') Tab3Pill: ElementRef;

  @ViewChild('Electronics') Electronics: ElementRef;
  @ViewChild('Fashion') Fashion: ElementRef;
  @ViewChild('Home') Home: ElementRef;
  @ViewChild('Beauty') Beauty: ElementRef;
  @ViewChild('Baby') Baby: ElementRef;
  id;
  getprd;
  constructor(public renderer: Renderer,
    private api: ApiService,
    private tos: ToasterService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userid = localStorage.getItem('uid');

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    if (this.id != null) {
      this.api.getSpecificProduct(this.id).subscribe(res => {
        this.getprd = res;
        this.productName = this.getprd.productName;
        this.sku = this.getprd.sku;
        this.weight = this.getprd.weight;
        this.brandName = this.getprd.brandName;
        this.manufactureName = this.getprd.manufacturerName;
        this.productPrice = this.getprd.productPrice;
        this.sellerSku = this.getprd.sellerSku;
        this.salePrice = this.getprd.salePrice;
        this.shortDescription = this.getprd.shortDescription;
        this.detailedDescription = this.getprd.detailedDescription;
        this.saleEndDate = this.getprd.saleEndDate;
        this.saleStartDate = this.getprd.saleStartDate;
      })
    }
    else {

      this.condition = "New";

      this.catagory = "Electronics";


      this.productName = '';
      this.sku = '';
      this.weight = '';
      this.brandName = '';
      this.manufactureName = '';
      this.productPrice = '';
      this.sellerSku = '';
      this.salePrice = '';
      this.shortDescription = '';
      this.detailedDescription = '';
    }

  }
  Electronics1() {
    this.catagory = "Electronics"
    console.log("got it");
  }
  fn2() {
    console.log("object");
    this.catagory = "Fashion"
  }
  fn3() {
    console.log("object");
    this.catagory = "Home & Kitchen"
  }
  fn4() {
    console.log("object");
    this.catagory = "Beauty & Fragrance"
  }
  cndNew() {
    this.condition = "New"
  }
  cndOld() {
    this.condition = "Old"
  }

  gotoTab2() {
    console.log(this.productName);
    console.log(this.sku);
    console.log(this.weight);
    console.log(this.brandName);
    console.log(this.manufactureName);
    if (this.productName != '' && this.sku != '' && this.weight != '' && this.brandName != '' && this.manufactureName != '') {

      console.log(this.Tab1Pill);
      console.log(this.Tab2Pill);
      this.renderer.setElementProperty(this.Tab1.nativeElement, 'aria-selected', false);
      this.renderer.setElementProperty(this.Tab1.nativeElement, 'className', 'nav-link');
      this.renderer.setElementProperty(this.Tab1Pill.nativeElement, 'className', 'tab-pane fade');

      this.renderer.setElementProperty(this.Tab2.nativeElement, 'aria-selected', true);
      this.renderer.setElementProperty(this.Tab2.nativeElement, 'className', 'nav-link active');
      this.renderer.setElementProperty(this.Tab2Pill.nativeElement, 'className', 'tab-pane fade show active');
      console.log(this.Tab1Pill);
      console.log(this.Tab2Pill);
    }
    else {
      this.tos.warning("Must fill all entries")
    }

  }

  gotoTab3() {
    console.log(this.saleEndDate);
    console.log(this.saleStartDate);
    // console.log(this.Tab2Pill);
    // console.log(this.Tab3Pill);
    if (this.productPrice != null && this.sellerSku != null && this.salePrice != null && this.saleEndDate != null && this.saleStartDate != null) {
      if (this.saleEndDate >= this.saleStartDate) {

        console.log("object");
        this.renderer.setElementProperty(this.Tab2.nativeElement, 'aria-selected', false);
        this.renderer.setElementProperty(this.Tab2.nativeElement, 'className', 'nav-link');
        this.renderer.setElementProperty(this.Tab2Pill.nativeElement, 'className', 'tab-pane fade');

        this.renderer.setElementProperty(this.Tab3.nativeElement, 'aria-selected', true);
        this.renderer.setElementProperty(this.Tab3.nativeElement, 'className', 'nav-link active');
        this.renderer.setElementProperty(this.Tab3Pill.nativeElement, 'className', 'tab-pane fade show active');
      }
      else {
        this.tos.warning("Sale Ending Date must be greater than Starting Date ")
        console.log("nothing");
      }
    }
    else {
      this.tos.warning('Must fill all entries')
    }


    // console.log(this.Tab2Pill);
    // console.log(this.Tab3Pill);
  }
  gotoTab1() {
    if (this.productName != '' && this.sku != '' && this.weight != '' && this.brandName != '' && this.manufactureName != ''
      && this.productPrice != '' && this.sellerSku != '' && this.salePrice != '' && this.saleEndDate != null
      && this.saleStartDate != null && this.shortDescription != '' && this.detailedDescription != '') {
      if (this.saleEndDate >= this.saleStartDate) {


        console.log(this.Tab2Pill);
        console.log(this.Tab3Pill);
        this.renderer.setElementProperty(this.Tab3.nativeElement, 'aria-selected', false);
        this.renderer.setElementProperty(this.Tab3.nativeElement, 'className', 'nav-link');
        this.renderer.setElementProperty(this.Tab3Pill.nativeElement, 'className', 'tab-pane fade');

        this.renderer.setElementProperty(this.Tab1.nativeElement, 'aria-selected', true);
        this.renderer.setElementProperty(this.Tab1.nativeElement, 'className', 'nav-link active');
        this.renderer.setElementProperty(this.Tab1Pill.nativeElement, 'className', 'tab-pane fade show active');
        console.log(this.Tab2Pill);
        console.log(this.Tab3Pill);
        this.createProduct();
      }


      else {
        this.tos.warning("Sale Ending Date must be greater than Starting Date ");
      }


    } else {

      this.tos.warning('Please Fill All Entries')
    }



  }
  ngAfterViewInit() {

  }

  createProduct() {
    if (this.productPrice > 0 && this.salePrice > 0) {
      this.api.getProducts().subscribe(res => {
        this.allProducts = res;
        console.log(this.allProducts);
        let len = this.allProducts.length - 1;
        this.prdid = this.allProducts[len].id;
        console.log(this.prdid);
        let data = {
          "id": this.prdid + 1,
          "productName": this.productName,
          "productPrice": this.productPrice,
          "salePrice": this.salePrice,
          "saleStartDate": this.saleStartDate,
          "saleEndDate": this.saleEndDate,
          "sku": this.sku,
          "weight": this.weight,
          "brandName": this.brandName,
          "manufacturerName": this.manufactureName,
          "catagory": this.catagory,
          "sellerSku": this.sellerSku,
          "condition": this.condition,
          "shortDescription": this.shortDescription,
          "detailedDescription": this.detailedDescription,
          "status": 'Pending',
          "quantity": 50,
          "prdstatus": "Active",
          "userid": this.userid
        }
        console.log(data);
        this.api.CreateProduct(data).subscribe(res => {
          console.log("product Created Successfully");
          this.tos.showSuccess('Product Created Successfully');

          this.productName = '';
          this.sku = '';
          this.weight = '';
          this.brandName = '';
          this.manufactureName = '';
          this.productPrice = '';
          this.sellerSku = '';
          this.salePrice = '';
          this.shortDescription = '';
          this.detailedDescription = '';
          this.saleEndDate = null;
          this.saleStartDate = null;


        })
      });
    }
    else {
      this.tos.warning("Prices can't be Negative Number");
    }


  }
  update() {
    if (this.productPrice > 0 && this.salePrice > 0) {
      if (this.saleEndDate != null && this.saleStartDate != null) {

        let data = {
          "id": this.getprd.id,
          "productName": this.productName,
          "productPrice": this.productPrice,
          "salePrice": this.salePrice,
          "saleStartDate": this.saleStartDate,
          "saleEndDate": this.saleEndDate,
          "sku": this.sku,
          "weight": this.weight,
          "brandName": this.brandName,
          "manufacturerName": this.manufactureName,
          "catagory": this.catagory,
          "sellerSku": this.sellerSku,
          "condition": this.condition,
          "shortDescription": this.shortDescription,
          "detailedDescription": this.detailedDescription,
          "status": this.getprd.status,
          "quantity": this.getprd.status,
          "prdstatus": this.getprd.prdstatus,
          "userid": this.userid
        }

        this.api.updateProduct(this.id, data).subscribe(res => {
          this.tos.showSuccess("Updated");
          setTimeout(function () {

          }, 1000);
          this.router.navigate(['/dashboard/manageinventory']);
        })
      }
      else {
        this.tos.warning('Sale Ending Date must grater than Starting date')
      }

    }
    else {
      this.tos.warning("Prices can't be Negative Number");
    }

  }
  cancel() {
    this.productName = '';
    this.sku = '';
    this.weight = '';
    this.brandName = '';
    this.manufactureName = '';
    this.productPrice = '';
    this.sellerSku = '';
    this.salePrice = '';
    this.shortDescription = '';
    this.detailedDescription = '';
    this.saleEndDate = null;
    this.saleStartDate = null;

  }
}
