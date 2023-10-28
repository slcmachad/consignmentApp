import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from './loginModel';
import { JwtModel } from './jwtMode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(payload: LoginModel): Observable<JwtModel>{
    return this.http.post<JwtModel>("http://localhost:8080/login", payload)
  }
}
