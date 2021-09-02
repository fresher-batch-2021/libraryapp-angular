import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VerificationService {

  constructor( private http:HttpClient) { }
  url = 'https://libraryapp-node-api.herokuapp.com/users'
  acceptUser(userData:{email:string,status: string}){
    return this.http.post(this.url+'/verification',userData)

  }
  rejectUser(user:number){
    return this.http.delete(this.url+`/reject-users/${user}`)
  }
}
