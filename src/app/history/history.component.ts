import { Component } from '@angular/core';
import { Tour, TourService } from '../tours.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  service: TourService;
  selectedTours: { tour: Tour, count: number, selected: boolean }[] = [];
  totalOrderSum: number = 0;

  constructor(service: TourService) {
    this.service = service;
   }

  ngOnInit(): void {
      this.selectedTours = TourService.history.map(tour => {
        return {
          tour: tour,
          count: TourService.history.filter(t => t.Nazwa === tour.Nazwa).length,
          selected: false
        }
      }).filter((tour, index, self) => self.findIndex(t => t.tour.Nazwa === tour.tour.Nazwa) === index);
      this.totalOrderSum = this.selectedTours.reduce((sum, { tour, count }) => sum + tour.CenaJednostkowa * count, 0);
  }
}
