import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  islogged = true;

  constructor(
    private loginService:LoginService,
    private route: Router
    ){}

  login(creds: any){
    this.loginService.login(creds)
      .subscribe(data => {
        let authtoken = data.token;
        localStorage.setItem("jwt", authtoken);
        this.islogged = true;
        this.route.navigate(['consignments']);
      },
      err => {
        this.islogged = false;
      }
    )
  }
}
