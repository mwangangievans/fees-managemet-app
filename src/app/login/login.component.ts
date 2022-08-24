import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { UserAuthService } from '../services/user-auth.service';
import {AuthService} from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = "";
  password = "";
  errorMsg = "";
  is_login = false ;
  constructor(private auth: UserAuthService, private router: Router , private guard : AuthService) { }

  ngOnInit(): void {
  }
  login() {
    if (this.username.trim().length === 0) {
      this.errorMsg = "Username is required";
      setTimeout(() => {
        this.errorMsg="";
        this.username="";
        this.password="";
      }, 3000);
      
    } else if (this.password.trim().length === 0) {
      this.errorMsg = "Password is required";
      setTimeout(() => {
        this.errorMsg="";
        this.username="";
        this.password="";
            }, 5000);
      
    } else {
      this.errorMsg = "";
      let res = this.auth.login(this.username, this.password);
      if (res === 200) {
        this.guard.login()
        this.is_login = this.auth.Islogged        
        // this.router.navigate(['students']);
      }
      if (res === 403) {
        this.errorMsg = "Invalid Credentials";
      setTimeout(() => {
        this.errorMsg="";
        this.username="";
        this.password="";
            }, 3000);
      }
    }
  }

}
