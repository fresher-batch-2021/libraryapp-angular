import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestbooksService {

  constructor(private http:HttpClient) { }
  url = "https://libraryapp-node-api.herokuapp.com/request/all-requests"
  allRequests(){
    return this.http.get(this.url)
  }
}
