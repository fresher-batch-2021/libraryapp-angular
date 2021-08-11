import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-initialpage',
  templateUrl: './initialpage.component.html',
  styleUrls: ['./initialpage.component.css']
})
export class InitialpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.allBooks();
  }

  books:any;
userStr:any;
  allBooks(){
    const userStr=localStorage.getItem("user");
    const data =userStr != null ? JSON.parse(userStr) : [];
    console.log(data);
  const url="http://localhost:8000/book/get-all-books";
  axios.post(url).then(res=> {
    console.log(res.data)
    this.books = res.data;
  })
  .catch(err=>{alert(err.data)})
}
}

