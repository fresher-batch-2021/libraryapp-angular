import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private toastr:ToastrService) { 
 
  }

  ngOnInit(): void {
  }
  email: string = "";
  password: string = "";
  login() {
    if (this.email == "") {
      alert("Email cannot be empty");
    }
    else if (this.password == "") {
      alert("password cannot be empty");
    } else {
      let url = "https://libraryapp-node-api.herokuapp.com/users/login";
      let userData = {
        email: this.email,
        password: this.password
      }
      axios.post(url, userData).then(res => {
        let user = res.data
        localStorage.setItem('user', JSON.stringify(user));
        console.log(user)
        if (user.userData.userRole==='admin') {
        this.toastr.success(res.data.message);
          window.location.href='initial-page'
        }
      }).catch(err => {
        this.toastr.error("Invalid email or password");
      })
    }
  }
}

