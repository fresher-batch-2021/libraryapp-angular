import { Component, OnInit } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

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
      let url = "http://localhost:8000/users/login";
      let userData = {
        email: this.email,
        password: this.password
      }
      axios.post(url, userData).then(res => {
        let user = res.data.userData
        localStorage.setItem('user', JSON.stringify(user));
        console.log(user)
        const data = res.data
        console.log(data);
        alert(data.message);
        if (data.message === "login successfull") {
          window.location.href = "initial-page"
        }
      }).catch(err => {
        console.log(err.response.data);
        let errorMessage = err.response.data.errorMessage;
        alert("Error:" + errorMessage);
      })
    }
  }
}

