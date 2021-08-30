import { Component, OnInit } from '@angular/core';
import axios from 'axios'
@Component({
  selector: 'app-requested-books',
  templateUrl: './requested-books.component.html',
  styleUrls: ['./requested-books.component.css']
})
export class RequestedBooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.requestedBooks()
  }
  books:any;
  userName:any;
  requestedBooks(){
    const url = "https://libraryapp-node-api.herokuapp.com/request/all-requests";
    axios.get(url).then(res=>{
  console.log(res.data)
  this.books=res.data
this.userName=res.data.forEach((obj:any)=>obj.bookName)
console.log(this.userName)
})
  .catch(err=>console.log(err.message))
  }

}
