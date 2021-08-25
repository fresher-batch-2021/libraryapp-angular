import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }
  url='https://libraryapp-node-api.herokuapp.com/users'
  register(userData:{name:string,email:string,password:string}){
    return axios.post(this.url+'/addUser')

  }
  login(userData:{email:string,password:string}){
    return axios.post(this.url+'/login')

  }
}
