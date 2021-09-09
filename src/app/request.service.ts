import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseUrl: string;

  constructor(private http: HttpClient) {

    this.baseUrl = environment.baseUrl;
  }
  findAll(dbName: string) {
    const url = this.baseUrl + "/" + dbName + "/_all_docs?include_docs=true";
    return this.http.get(url)

  }

}
