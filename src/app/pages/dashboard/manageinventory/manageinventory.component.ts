import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manageinventory',
  templateUrl: './manageinventory.component.html',
  styleUrls: ['./manageinventory.component.css']
})
export class ManageinventoryComponent implements OnInit {
  showEntries = 10;
  constructor() { }

  ngOnInit() {
  }

}
