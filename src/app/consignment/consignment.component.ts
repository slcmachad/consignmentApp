import { Component } from '@angular/core';
import { ConsignmentService } from '../consignment.service';
import { ConsignmentModel } from '../ConsignmentMode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consignment',
  templateUrl: './consignment.component.html',
  styleUrls: ['./consignment.component.css']
})
export class ConsignmentComponent{

  consignments: ConsignmentModel[] = [];

  constructor(private consignmentService: ConsignmentService, private router: Router){}

  ngOnInit(){
    this.consignmentService.getConsignment().subscribe(data => {

      this.consignments = data;

    }, err => {
      this.router.navigate(['login']);
    })
  }

}
