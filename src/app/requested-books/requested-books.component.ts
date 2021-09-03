import { Component, OnInit } from '@angular/core';
import { RequestbooksService } from '../requestbooks.service';
@Component({
  selector: 'app-requested-books',
  templateUrl: './requested-books.component.html',
  styleUrls: ['./requested-books.component.css']
})
export class RequestedBooksComponent implements OnInit {

  constructor( private requestBooksService:RequestbooksService) { }

  ngOnInit(): void {
    this.allRequests()
  }
  books:any;
  userName:any;
  allRequests(){
    this.requestBooksService.allRequests().subscribe((res:any)=>{
  this.books=res.rows.map((e:any)=>e.doc)
}),((err:any)=>console.log(err.message))
  }

}
