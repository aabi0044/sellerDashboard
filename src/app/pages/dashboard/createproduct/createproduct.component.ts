import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer } from '@angular/core';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  @ViewChild('tab1') Tab1 : ElementRef;
  @ViewChild('tab2') Tab2 : ElementRef;
  @ViewChild('tab3') Tab3 : ElementRef;
  @ViewChild('tab1pill') Tab1Pill : ElementRef;
  @ViewChild('tab2pill') Tab2Pill : ElementRef;
  @ViewChild('tab3pill') Tab3Pill : ElementRef;
  constructor(public renderer:Renderer) {

   }

  ngOnInit() {
   
  }

  gotoTab2()
  {
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

  gotoTab3()
  {
    console.log(this.Tab2Pill);
    console.log(this.Tab3Pill);
    this.renderer.setElementProperty(this.Tab2.nativeElement,'aria-selected',false);
    this.renderer.setElementProperty(this.Tab2.nativeElement,'className','nav-link');
    this.renderer.setElementProperty(this.Tab2Pill.nativeElement,'className','tab-pane fade');

    this.renderer.setElementProperty(this.Tab3.nativeElement,'aria-selected',true);
    this.renderer.setElementProperty(this.Tab3.nativeElement,'className','nav-link active');
    this.renderer.setElementProperty(this.Tab3Pill.nativeElement,'className','tab-pane fade show active');
    console.log(this.Tab2Pill);
    console.log(this.Tab3Pill);
  }
  gotoTab1()
  {
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
  ngAfterViewInit(){

  }
}
