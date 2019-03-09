import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { ExportToCsv } from 'export-to-csv';

const options = { 
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalSeparator: '.',
  showLabels: true, 
  showTitle: true,
  title: 'Report',
  useTextFile: false,
  useBom: true,
  useKeysAsHeaders: true,
  // headers: ['Column 1', 'Column 2', etc...] <-- Won't work with useKeysAsHeaders present!
};
@Component({
  selector: 'app-viewreports',
  templateUrl: './viewreports.component.html',
  styleUrls: ['./viewreports.component.css']
})
export class ViewreportsComponent implements OnInit {
orders;
startDate:Date;
endDate:Date;
data;

  constructor(private api:ApiService,) { }

  ngOnInit() {
    this.getOrders();
  }
getOrders(){
  this.api.getOrdersReport().subscribe(res=>{
this.orders=res;

console.log(this.orders);
  })
}
filterByDate(){
  console.log(this.startDate);
  console.log(this.endDate);

  this.api.getOrdersReport().subscribe(res=>{
    this.data=res;
    let a = this.data.filter((elem)=>{
      return elem.period>=this.startDate && elem.period<=this.endDate
    })
    console.log(a);
    this.orders=a;
    this.CSV(this.orders);
})
}

CSV(orders){
 const csvExporter = new ExportToCsv(options);
  csvExporter.generateCsv(orders);
}
}
