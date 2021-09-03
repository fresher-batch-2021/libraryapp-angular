import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseUrl: string;
  
  headers: any;
  data:any;
  constructor(private http: HttpClient) {
    
    this.baseUrl = environment.baseUrl;
    const basicAuth = 'Basic ' + btoa(environment.dbUsername + ':' + environment.dbPassword);
    this.headers = { headers: { 'Authorization': basicAuth } };
   }
 findAll(dbName:any) {
    const url = this.baseUrl + "/" + dbName + "/_all_docs?include_docs=true";
    return this.http.get(url,this.headers)

}

}
