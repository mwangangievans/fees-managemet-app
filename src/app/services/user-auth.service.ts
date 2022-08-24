import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  public Islogged = false
  constructor(private router: Router) { }

  login(uname: string, pword: string) {
    if (uname === 'evans' && pword === '1234') {
      this.Islogged=true;
      console.log(this.Islogged);
      
      return 200;
    } else {
      return 403;
    }
  }

  logout() {
    this.router.navigate(['']);
   return this.Islogged=false;
  }
}
