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
    this.requestedBooks()
  }
  books:any;
  userName:any;
  requestedBooks(){
    this.requestBooksService.allRequests().subscribe((res:any)=>{
  this.books=res
this.userName=res.forEach((obj:any)=>obj.bookName)
console.log(this.userName)
}),((err:any)=>console.log(err.message))
  }

}
