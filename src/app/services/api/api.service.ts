import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http' 
import { map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
url="http://localhost:3000/users/";
url1="http://localhost:3000/users";

ordersUrl="http://localhost:3000/orders/";
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
    console.log(id);
    console.log(data);
    return this.http.put(this.url1+ '/' +id,data)
  }
  //===================Orders===============================
  CreateOrder(data){
    return this.http.post(this.ordersUrl,data);
  }
  getSpecificOrder(id){
    console.log(id);
    return this.http.get(this.ordersUrl + '' +id);
  }
  getOrders(){
    return this.http.get(this.ordersUrl);
  }
  updateOrder(id,data){
    console.log(id);
    console.log(data);
    return this.http.put(this.ordersUrl+ '' +id,data)
  }

}
