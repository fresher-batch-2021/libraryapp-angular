import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OrderdaoService {

  baseUrl: string;
  
  headers: any;
  data:any;
  constructor(private http: HttpClient) {
    
    this.baseUrl = environment.baseUrl;
    const basicAuth = 'Basic ' + btoa(environment.dbUsername + ':' + environment.dbPassword);
    this.headers = { headers: { 'Authorization': basicAuth } };
   }
  isBookTaken(dbName:any,book:any) {
    const url = this.baseUrl + "/" + dbName + "/_find";
    console.log(url);
    console.log(book)
    let criteria={
        selector:{
            book:{_id:book._id},status:"ordered"
        }
        
    }
    console.log(criteria)
    return this.http.post(url, criteria, this.headers);
    
}
 findAll(dbName:any) {

  const url = this.baseUrl + "/" + dbName + "/_all_docs?include_docs=true";
  console.log(url);
  return this.http.get(url, this.headers);
}
}
