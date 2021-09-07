import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
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
  book!:Book[];
  userName:any;
  allRequests(){
    this.requestBooksService.allRequests().subscribe((res:any)=>{
  this.book=res.rows.map((e:any)=>e.doc)
  console.log(this.book)
}),((err:any)=>console.log(err.message))
  }
}
