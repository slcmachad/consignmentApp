import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'consignmentApp';

  isLoggedOn: any;

  constructor(private router: Router){}

  ngOnInit(){
    if(localStorage.getItem("jwt")){
      this.isLoggedOn = true
    }
  }

  logout(){
    this.isLoggedOn = false;
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
