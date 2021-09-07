import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RestService } from './rest.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  baseUrl: string;
  dbName: string;
  constructor(private http: HttpClient, private restService: RestService) {
    this.dbName = environment.dbUsername
    this.baseUrl = environment.baseUrl;
  }
  collectionName = 'libraryapp_users';



  login(email: string, password: string, role = "ADMIN") {
    const criteria = {
      selector: {
        email: email,
        password: password,
        role: role
      },
      fields: ["_id", "name", "email", "role"]
    }
    return this.restService.query(this.collectionName, criteria);

  }

  usersLists() {
    return this.restService.findAll(this.collectionName);
  }
}
