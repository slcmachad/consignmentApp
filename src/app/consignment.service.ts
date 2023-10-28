import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConsignmentModel } from './ConsignmentMode';

@Injectable({
  providedIn: 'root'
})
export class ConsignmentService {

  constructor(private http: HttpClient) { }

  public getConsignment(): Observable<ConsignmentModel[]>{
    let token = localStorage.getItem("jwt");

    let headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
    return this.http.get<ConsignmentModel[]>("http://localhost:8080/consignments",{headers});
  }
}
