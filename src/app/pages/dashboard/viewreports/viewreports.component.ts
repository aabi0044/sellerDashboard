import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-viewreports',
  templateUrl: './viewreports.component.html',
  styleUrls: ['./viewreports.component.css']
})
export class ViewreportsComponent implements OnInit {
orders;
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getOrders();
  }
getOrders(){
  this.api.getOrders().subscribe(res=>{
this.orders=res;
  })
}
}
