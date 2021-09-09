import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class OrderdaoService {

  baseUrl: string;

  headers: any;
  book!:Book[];
  constructor(private http: HttpClient) {

    this.baseUrl = environment.baseUrl;
  }
  isBookTaken(dbName: string, book: Book) {
    const url = this.baseUrl + "/" + dbName + "/_find";
    console.log(url);
    console.log(book)
    let criteria = {
      selector: {
        book: { _id: book._id }, status: "ordered"
      }

    }
    console.log(criteria)
    return this.http.post(url, criteria);

  }
  findAll(dbName: string) {

    const url = this.baseUrl + "/" + dbName + "/_all_docs?include_docs=true";
    console.log(url);
    return this.http.get(url);
  }
  findBook(dbName: string,id:number) {
    const url = this.baseUrl + "/" + dbName + "/_find";
    console.log(url);
    let criteria = {
      selector: {
        book:{_id:id}
      }
    }
    console.log(criteria)
    
    return this.http.post(url, criteria);
  }
}
