import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  constructor( private userService:UserserviceService) { }

  ngOnInit(): void {
    this.allUsers()
  }
  users:any='';
  user:any='';
  allUsers(){
    const userStr=localStorage.getItem('user');
    this.user = userStr != null ? JSON.parse(userStr) : null;
    console.log(this.user);
    this.userService.userLists().then(res=>
      {console.log(res.data)
    this.users=res.data
      }
    )
    .catch(error=>console.error({error:error.message}))
  }

}
