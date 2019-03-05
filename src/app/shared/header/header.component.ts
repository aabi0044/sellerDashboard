import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  getuser;
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.getUser();
  }
  getUser(){
    let id=localStorage.getItem('uid');
    this.api.getSpecificUser(id).subscribe(res=>{
      console.log(res);
      this.getuser=res;
    })
  }

}
