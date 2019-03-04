import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http' 
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
}
