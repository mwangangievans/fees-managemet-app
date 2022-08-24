import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../services/user-auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  is_login = false ;

  constructor(private auth: UserAuthService) { }

  ngOnInit(): void {
    this.is_login = this.auth.Islogged
    console.log(this.auth.Islogged);
    
  }
  logout(){
    this.auth.logout()
  }

}
