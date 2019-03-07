import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   
  }
  
  goto(){
    $("pills-productinfo-tabpills-productinfo-tab").attr("aria-arries","false");
    $("pills-offers-tab").attr("aria-arries","true");
    $("pills-description-tab").attr("aria-arries","false");
  }
}
