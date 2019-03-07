import { Component, OnInit ,ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { Router } from '@angular/router';
import { timingSafeEqual } from 'crypto';

import{ToasterService}from 'src/app/services/toaster/toaster.service'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={
    fname:'',
    lastname:'',
    email:'',
    password:'',
    cpassword:''

  }
  getid;
  constructor(private api :ApiService,
    private router:Router,
    private tos:ToasterService) {
  // @ViewChild('btn')  button: ElementRef;

    this.getAllUsers();
   }

  ngOnInit() {
  }
  createUser(){
    try{
      if(this.user.email.match("^[a-z0-9._%+-]+\.@[a-z0-9.-]+\.[a-z]{2,4}$")
    && this.user.password.match("(?=.*[#/?//&/@/$/!/%////\/'/'/}/{/}])(?=.*).{7,}")
    &&this.user.fname!=''
    &&this.user.lastname!=''
    &&this.user.password==this.user.cpassword
    ){
     
      this.api.getUsers().subscribe(res=>{
      console.log(res);
      this.getid=res;
     let index= this.getid.length-1;
     console.log(index);
     console.log(this.getid[index].id);
      let dataEmail=this.getid.filter(e=>e.email==this.user.email);
      console.log(dataEmail);
      if(dataEmail.length==0){
       
        console.log("not exist");
   
        this.tos.warning("User Does not Exist")
            let data={
        "id":this.getid[index].id+1,
        "firstName":this.user.fname,
        "lastName":this.user.lastname,
        "email":this.user.email,
        "password":this.user.password
       
        
      }
      
      this.api.Createuser(data).subscribe(res=>{
    console.log("userCreated");
    this.tos.showSuccess('User Created')
    this.router.navigate(['/login']);
    
  })
      }
      else{
        this.tos.warning("Already Exist");
        console.log("exist");
      }
  
    })
  }
  else{
    this.tos.warning("Email is not in format");
    console.log("Email is not in format")
  }
    }
    catch(error){
     this.tos.warning(error.message);
      console.log(error.message);

    }
    
  }
getAllUsers(){
  this.api.getUsers().subscribe(res=>{
    console.log(res);
  })
}
}
