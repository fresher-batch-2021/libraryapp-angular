import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor( private http:HttpClient) { }
  url='https://libraryapp-node-api.herokuapp.com/users'
  register(userData:{name:string,email:string,password:string}){
    return this.http.post(this.url+'/addUser',userData)

  }
  login(userData:{email:string,password:string}){
    console.log(userData)
    return this.http.post(this.url+'/login',userData)
  }
  userLists(){
    return this.http.get(this.url+'/get-all-users')
  }
}
