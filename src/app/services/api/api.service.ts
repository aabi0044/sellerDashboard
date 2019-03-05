import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http' 
import { map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
url="http://localhost:3000/users/";

  constructor(
    private http:HttpClient
  ) { }
  Createuser(data){
    return this.http.post(this.url,data);
  }
  getSpecificUser(id){
    console.log(id);
    return this.http.get(this.url + '' +id);
  }
  getUsers(){
    return this.http.get(this.url);
  }
  updateUser(id,data){
    return this.http.post(this.url,+ '' +id,data)
  }

}
