import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

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
  constructor(private api :ApiService) {
    this.getAllUsers();
   }

  ngOnInit() {
  }
  createUser(){
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
            let data={
        "id":this.getid[index].id+1,
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
 
// getUser(){

//   this.api.getUser(id)
// }
getAllUsers(){
  this.api.getUsers().subscribe(res=>{
    console.log(res);
  })
}
}
