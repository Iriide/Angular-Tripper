import { Component, OnInit } from '@angular/core';
import { Tour, TourService } from '../tours.service';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-selected-tours-summary',
  templateUrl: './selected-tours-summary.component.html',
  styleUrls: ['./selected-tours-summary.component.css']
})
export class SelectedToursSummaryComponent implements OnInit {
  service: TourService;
  selectedTours: { tour: Tour, count: number }[] = [];
  totalOrderSum: number = 0;
  private toursSubscription: Subscription | undefined;

  constructor(service: TourService) {
    this.service = service;
   }

  ngOnInit(): void {
      this.selectedTours = TourService.reservedTours.map(tour => {
        return {
          tour: tour,
          count: TourService.reservedTours.filter(t => t.Nazwa === tour.Nazwa).length
        }
      }).filter((tour, index, self) => self.findIndex(t => t.tour.Nazwa === tour.tour.Nazwa) === index);
      this.totalOrderSum = this.selectedTours.reduce((sum, { tour, count }) => sum + tour.CenaJednostkowa * count, 0);
      this.subscribeToTours();
  }

  subscribeToTours() {
    this.toursSubscription = this.service.selectedTours.subscribe(tours => {
      this.selectedTours = TourService.reservedTours.map(tour => {
        return {
          tour: tour,
          count: TourService.reservedTours.filter(t => t.Nazwa === tour.Nazwa).length
        }
      }).filter((tour, index, self) => self.findIndex(t => t.tour.Nazwa === tour.tour.Nazwa) === index);
      this.totalOrderSum = this.selectedTours.reduce((sum, { tour, count }) => sum + tour.CenaJednostkowa * count, 0);
    });
  }

}

