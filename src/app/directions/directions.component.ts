// src/app/directions/directions.component.ts
import { Component, OnInit } from '@angular/core';
import { MapquestService } from '../mapquest.service';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css']
})
export class DirectionsComponent implements OnInit {
  directionsData: any;
  selectedStep: number | undefined;
  from: string = '6th Ave, Brooklyn, NY'; // Initialize 'from' location
  to: string = 'State St, Binghamton, NY'; // Initialize 'to' location
  
  constructor(private mapquestService: MapquestService) {}

  ngOnInit() {
    this.updateDirections();

    this.mapquestService.directionsData$.subscribe((data) => {
      this.directionsData = data;
    });
  }

  showRawData(stepIndex: number) {
    this.selectedStep = stepIndex;
  }

  updateDirections() {
    this.mapquestService.getDirections(this.from, this.to);
  }

}


