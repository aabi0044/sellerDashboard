import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  getuser;
  constructor(private api: ApiService,
    private router: Router) { }

  ngOnInit() {
    this.getUser();
  }
  getUser() {
    let id = localStorage.getItem('uid');
    this.api.getSpecificUser(id).subscribe(res => {
      console.log(res);
      this.getuser = res;
    })
  }
  viewOrders() {
    this.router.navigate(['/dashboard/vieworders']);
  }

}
