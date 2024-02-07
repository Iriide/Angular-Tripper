import { Component } from '@angular/core';
import { Tour, TourService } from '../tours.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  selectedTours: { tour: Tour, count: number, selected: boolean }[] = [];
  totalOrderSum: number = 0;
  toursSubscription: any;

  constructor(public service: TourService) {
    this.subscribeToTours();
  }

  ngOnInit(): void {
    this.selectedTours = TourService.reservedTours.map(tour => {
      return {
        tour: tour,
        count: TourService.reservedTours.filter(t => t.Nazwa === tour.Nazwa).length,
        selected: false
      }
    }).filter((tour, index, self) => self.findIndex(t => t.tour.Nazwa === tour.tour.Nazwa) === index);
    this.totalOrderSum = this.selectedTours.reduce((sum, { tour, count }) => sum + tour.CenaJednostkowa * count, 0);
    this.subscribeToTours();
  }

  subscribeToTours() : any {
    this.toursSubscription = this.service.selectedTours.subscribe(tours => {
      this.selectedTours = TourService.reservedTours.map(tour => {
        return {
          tour: tour,
          count: TourService.reservedTours.filter(t => t.Nazwa === tour.Nazwa).length,
          selected: false
        }
      }).filter((tour, index, self) => self.findIndex(t => t.tour.Nazwa === tour.tour.Nazwa) === index);
      this.totalOrderSum = this.selectedTours.reduce((sum, { tour, count }) => sum + tour.CenaJednostkowa * count, 0);
    });
    return this.selectedTours;
  }

  getMappedSelectedTours(): [Tour, number][] {
    return this.selectedTours
      .filter(tourItem => tourItem.selected)
      .map(tourItem => [tourItem.tour, tourItem.count]);
  }
  getSelectedTours(): { tour: Tour, count: number, selected: boolean }[] {
    return this.selectedTours;
  }

  buyTours(): void {
    this.service.buyTours(this.getMappedSelectedTours());
    this.subscribeToTours();
  }
}
