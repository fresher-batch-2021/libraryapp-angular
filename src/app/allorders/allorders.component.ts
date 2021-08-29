import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { OrdersService } from '../orders.service';
@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {

  constructor( private orderService:OrdersService) { }

  ngOnInit(): void {
    this.allOrders();
  }
  orders: any;
  allOrders() {
  
  this.orderService.allOrders().then(res => {
        this.orders = res.data
      })
      .catch(error => console.error(error))
  }

}

