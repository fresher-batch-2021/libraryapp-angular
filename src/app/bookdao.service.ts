import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
@Injectable({
  providedIn: 'root'
})
export class BookdaoService {

  baseUrl: string;

  constructor(private http: HttpClient) {

    this.baseUrl = environment.baseUrl;
  }
  book!: Book[];

  save(dbName: string, inputData: Book) {
    const url = this.baseUrl + '/' + dbName
    console.log(url)
    console.log(inputData)
    return this.http.post(url, inputData)

  }
  findAll(dbName: string) {
    const url = this.baseUrl + "/" + dbName + "/_find";
    let selector = {
      selector: {},
      sort: ["bookName"]
    }
    return this.http.post(url, selector)

  }
  findOne(dbName: string, id: Book) {
    const url = this.baseUrl + "/" + dbName + "/" + id;
    console.log(url);
    return this.http.get(url);
  }
  updateBook(dbName: string, inputData: Book) {

    //3. Update 
    const url = this.baseUrl + "/" + dbName + "/" + inputData._id;
    console.log(url);

    return this.http.put(url, inputData);

  }
  deleteOne(dbName: string, bookObj: Book) {

    const url = this.baseUrl + '/' + dbName + '/' + bookObj._id + "?rev=" + bookObj._rev;
    console.log(url)
    return this.http.delete(url)
  }
  findBook(dbName: string, bookName: Book) {
    const url = this.baseUrl + "/" + dbName + "/_find";
    console.log(url);
    let criteria = {
      selector: {
        bookName: bookName.bookName
      }
    }
    console.log(criteria)
    return this.http.post(url, criteria);
  }
}
