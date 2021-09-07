import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private toastr: ToastrService,
    private userService: UserserviceService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }
  email: string = "";
  password: string = "";
  login() {
    if (this.email == "") {
      this.toastr.error("Email cannot be empty");
    }
    else if (this.password == "") {
      this.toastr.error("Enter  The Password");
    } else {
      this.userService.login(this.email, this.password).subscribe((res: any) => {
        let results: any = res.docs;
        console.log(results)
        let user = results.length > 0 ? results[0] : null;
        console.log(user)
        localStorage.setItem('user', JSON.stringify(user));
        console.log(user)
        this.toastr.success('login success');
        setTimeout(() => {
          this.router.navigate(['initial-page']);
        }, 2000)

      }), ((err: any) => {
        this.toastr.error("Invalid email or password");
      })
    }
  }
}

