import { Component } from '@angular/core';
import { ConsignmentService } from '../consignment.service';

@Component({
  selector: 'app-consignment',
  templateUrl: './consignment.component.html',
  styleUrls: ['./consignment.component.css']
})
export class ConsignmentComponent {

  consignments: ConsignmentComponent;

  constructor(private consignmentService: ConsignmentService){}


}
