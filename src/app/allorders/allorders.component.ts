import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../orders.service';
import { ToastrService } from 'ngx-toastr';
import { Order } from '../order';
@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.css']
})
export class AllordersComponent implements OnInit {

  constructor( private orderService:OrdersService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.allOrders();
  }
  order!:Order[];
  allOrders() {
    
  
  this.orderService.getAllOrders().subscribe((res:any) => {
    console.log(res)
        this.order = res.rows.map((obj:any)=>obj.doc)

        console.log(this.order)
      }),((error:any) => console.error(error))
  }
 
}

