import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import axios from 'axios'
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor(private userService: UserserviceService) { }

  ngOnInit(): void {
    this.allUsers()
  }
  users: any = '';
  user: any = '';
  allUsers() {
    const userStr = localStorage.getItem('user');
    this.user = userStr != null ? JSON.parse(userStr) : null;
    console.log(this.user);
    this.userService.userLists().subscribe((res:any) => {
      this.users = res
    }

    ),((error:any) => console.error({ error: error.message }))
  }

}
