import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookdaoService {

  baseUrl: string;

  headers: any;
  constructor(private http: HttpClient) {

    this.baseUrl = environment.baseUrl;
    const basicAuth = 'Basic ' + btoa(environment.dbUsername + ':' + environment.dbPassword);
    this.headers = { headers: { 'Authorization': basicAuth } };
  }
  save(dbName: any, inputData: any) {
    const url = this.baseUrl + '/' + dbName
    console.log(url)
    console.log(inputData)
    return this.http.post(url, inputData, this.headers)

  }
  findAll(dbName: any) {
   // const url = this.baseUrl + "/" + dbName + "/_all_docs?include_docs=true";
   const url = this.baseUrl + "/" + dbName + "/_find";
    let selector = {
      selector : {},
      sort : ["bookName"]
    }
    return this.http.post(url, selector, this.headers)

  }
  findOne(dbName: any, id: any) {
    const url = this.baseUrl + "/" + dbName + "/" + id;
    console.log(url);
    return this.http.get(url, this.headers);
  }
  updateBook(dbName: any, inputData: any) {

      //3. Update 
      const url = this.baseUrl + "/" + dbName + "/" + inputData._id ;
      console.log(url);

      return this.http.put(url, inputData, this.headers);

  }
   deleteOne(dbName:any, bookObj:any) {
    
    const url = this.baseUrl + '/' + dbName + '/' + bookObj._id + "?rev="+ bookObj._rev;
    console.log(url)
  return this.http.delete(url, this.headers)
}
 findBook(dbName:any, bookName:any) {
  const url = this.baseUrl + "/" + dbName + "/_find";
  console.log(url);
  let criteria = {
      selector: {
          bookName: bookName.bookName
      }
  }
  console.log(criteria)
return this.http.post(url, criteria, this.headers);
}
}
