import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  baseUrl: string;
  
  headers: any;
  constructor(private http: HttpClient) {
    
    this.baseUrl = environment.baseUrl;
    const basicAuth = 'Basic ' + btoa(environment.dbUsername + ':' + environment.dbPassword);
    this.headers = { headers: { 'Authorization': basicAuth } };
   }
   query(dbName:any, selector:any) {
    const url = this.baseUrl + "/" + dbName + "/_find";
    console.log(url);
    console.log(JSON.stringify(selector));

    return this.http.post(url, selector, this.headers);
}
 findAll(dbName:any) {

  const url = this.baseUrl + "/" + dbName + "/_all_docs?include_docs=true";
  console.log(url);
  return this.http.get(url, this.headers);
}
}
