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
  orders: any;
  allOrders() {
    const url = "https://libraryapp-node-api.herokuapp.com/order/all-orders"
    axios.get(url)
      .then(res => {
        this.orders = res.data

      })
      .catch(error => console.error(error))
  }

}

