import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {

  bookId:number;

  constructor(private route:ActivatedRoute) { 
    this.bookId = this.route.snapshot.params["id"]; 
  }

  ngOnInit(): void {
    this.loadBook();
  }
  bookName: string = "";
  authorName: string = "";
  quantity: string = "";
  price: string = "";
  category: string = "";
  image: string = "";
  
  editBook(){
    console.log(this.bookId);
    const url = ('http://localhost:8000/book/update-book/' + this.bookId);
    axios.put(url,this.book).then(res => {
      console.log(res)
    }).catch(err => alert("Enter the correct details"))
  }

  book:any;
  loadBook(){
    
    const url = ('http://localhost:8000/book/get-book-by-id/' + this.bookId);
    const _id=this.bookId
    axios.get(url).then(res => {
      console.log(res)
      this.book = res.data;
    }).catch(err => alert("Enter the correct details"))
  }
}
