import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestService } from './request.service';
@Injectable({
  providedIn: 'root'
})
export class RequestbooksService {
  collectionName = 'libraryapp_requests'
  constructor(private http:HttpClient,private requestService:RequestService) { }
  allRequests(){
        return this.requestService.findAll(this.collectionName)
}
}