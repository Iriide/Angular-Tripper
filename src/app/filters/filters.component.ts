import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TourService, Tour } from '../tours.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { min } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent implements OnInit {
  service: TourService;
  showFilters: boolean = false;
  availableCurrencies = ['PLN', 'EUR', 'USD'];

  availableTags = ['Cultural Experience', 'Nature', 'Exclusive', 'Adventure', 'Relaxation'];
  selectedTags: Set<string> = new Set();

  ratingOptions = [
    { label: '1-2 Stars', value: [1, 2] },
    { label: '3-4 Stars', value: [3, 4] },
    { label: '5 Stars', value: [5] }
  ];
  selectedRatings: Set<number> = new Set();
  ratingCheckedStates: Set<string> = new Set();

  itemsPerPageOptions = [5, 10, 15, 20];
  minPrice: number = 0;
  maxPrice: number = 0;

  startDate: string = "";
  endDate: string = "";

  constructor(service: TourService) {
    this.service = service;
  }

  ngOnInit() {
    this.resetFilter();
  }

  onRatingChange(rating: number[], label:string, isChecked: any): void {
    if (isChecked.target.checked) {
      this.ratingCheckedStates.add(label);
    }
    else {
      this.ratingCheckedStates.delete(label);
    }
    rating.forEach(r => {
      if (isChecked.target.checked) {

        this.selectedRatings.add(r);
      } else {
        this.selectedRatings.delete(r);
      }
    });
    if (this.selectedRatings.size === 0) {
      this.ratingFilterChanged.emit(new Set([0, 1, 2, 3, 4, 5]));
    }
    else {
      this.ratingFilterChanged.emit(this.selectedRatings);
    }
  }    

  toggleFilters() {
    if (!this.showFilters) {
      this.resetFilter();
    }
    this.showFilters = !this.showFilters;
    
  }

  onTagChange(tag: string, isChecked: any): void {
    if (isChecked.target.checked) {
      this.selectedTags.add(tag);
    } else {
      this.selectedTags.delete(tag);
    }
    if (this.selectedTags.size === 0) {
      this.tagsFilterChanged.emit(new Set(this.availableTags));
    }
    else {
      this.tagsFilterChanged.emit(this.selectedTags);
    }
  }

  onPriceChange(form: any): void {
    if (form.minPrice === null || form.maxPrice === null) {
      return;
    }
    if (form.minPrice < 0 || form.maxPrice < 0) {
      return;
    }
    if (form.minPrice > form.maxPrice) {
      return;
    }
    this.priceFilterChanged.emit([this.minPrice, this.maxPrice]);
  }

  onDateChange(): void {
    this.dateFilterChanged.emit([new Date(this.startDate), new Date(this.endDate)]);
  }

  resetFilter() {
    this.minPrice = this.service.changeCurrency(this.service.getBottomPricedTour().CenaJednostkowa);
    this.maxPrice = this.service.changeCurrency(this.service.getTopPricedTour().CenaJednostkowa);

    const earliestTour = this.service.getEarliestTour();
    const latestTour = this.service.getLatestTour();
    this.startDate = earliestTour ? this.formatDateForInput(earliestTour.DataRozpoczecia) : '';
    this.endDate = latestTour ? this.formatDateForInput(latestTour.DataZakonczenia) : '';

    this.selectedTags.clear();
    this.selectedRatings.clear();
    this.ratingCheckedStates.clear();

    this.tagsFilterChanged.emit(new Set(this.availableTags));
    this.ratingFilterChanged.emit(new Set([0, 1, 2, 3, 4, 5]));
    this.priceFilterChanged.emit([this.minPrice, this.maxPrice]);
    this.dateFilterChanged.emit([new Date(this.startDate), new Date(this.endDate)]);
  }

  formatDateForInput(date: Date): string {
    if (!date) return '';

    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}



  @Output() tagsFilterChanged: EventEmitter<Set<string>> = new EventEmitter();
  @Output() ratingFilterChanged: EventEmitter<Set<number>> = new EventEmitter();
  @Output() priceFilterChanged: EventEmitter<[number, number]> = new EventEmitter();
  @Output() dateFilterChanged: EventEmitter<[Date, Date]> = new EventEmitter();

}
