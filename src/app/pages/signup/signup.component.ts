import { Component, OnInit ,ViewChild, ElementRef } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
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
  // @ViewChild('btn')  button: ElementRef;
  constructor(private api :ApiService,private tos:ToasterService) {
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
      let dataEmail=this.getid.filter(e=>e.email==this.user.email);
      console.log(dataEmail);
      if(dataEmail.length==0){
        this.tos.showSuccess();
        console.log("not exist");
            let data={
        "id":this.getid.id+1,
        "firstName":this.user.fname,
        "lastName":this.user.lastname,
        "email":this.user.email,
        "password":this.user.password
       
        
      }
      
      this.api.Createuser(data).subscribe(res=>{
    console.log("userCreated");
  })
      }
      else{
        
        console.log("exist");
      }
  
    })
  }
  else{
    this.tos.warning();
    console.log("Email is not in format")
  }
    }
    catch(error){
     
      console.log(error.message);

    }
    
  }
getAllUsers(){
  this.api.getUsers().subscribe(res=>{
    console.log(res);
  })
}
}
