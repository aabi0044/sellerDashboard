import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
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
