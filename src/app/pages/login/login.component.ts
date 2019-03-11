import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { ToasterService } from 'src/app/services/toaster/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={
    email:'',
    password:''
  }
getUser;

  constructor(
    private router:Router,
    private api:ApiService,
    private tos:ToasterService
  ) { }

  ngOnInit() {
  }
  login(){
this.api.getUsers().subscribe(res=>{
  this.getUser=res;
  let getuser=this.getUser.filter(e=>e.email==this.user.email && e.password ==this.user.password);

  console.log(getuser);
  console.log(this.user);
  if(getuser.length!=0 ){
    this.tos.showSuccess("login Successfully")
      localStorage.setItem('uid',getuser[0].id)
      this.router.navigate(['./dashboard/sellerdashboard']);
   
   
    
  }
  else{
    this.tos.warning("User Not Exist in system")
    console.log("user doesnot Exist");
  }
})
  }

}
