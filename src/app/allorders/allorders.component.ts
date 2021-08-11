import { Component, OnInit } from '@angular/core';
import axios from 'axios'
@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.allOrders();
  }
  orders:any;
allOrders(){
  let i=1;
  const url="http://localhost:8000/order/all-orders"
  axios.get(url)
  .then(res=>{console.log(res.data)
  this.orders=res.data
const order=res.data

  })
  .catch(error=>alert("not found"))
}
}
