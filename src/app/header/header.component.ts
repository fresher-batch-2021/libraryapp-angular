import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
  
})
export class HeaderComponent implements OnInit {
  color = '';
  
  @Output() newItemEvent = new EventEmitter<any>();
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

  constructor(private router: Router) { }

  isLoggedIn = false;
  ngOnInit(): void {
    this.userDetails();
  }
  user: any;
  userDetails() {
    const userStr = localStorage.getItem('user');
    this.user = userStr != null ? JSON.parse(userStr) : null;
    if (this.user) {
      this.isLoggedIn = true;
    }
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(["login"])
  }
}
