import { Component } from '@angular/core';
import { TourService, Tour } from '../tours.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FiltersComponent } from '../filters/filters.component';
import { TourFormComponent } from '../tour-form/tour-form.component';
import { SelectedToursSummaryComponent } from '../selected-tours-summary/selected-tours-summary.component';
import { OnInit } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
@Component({
  standalone: true,
  selector: 'app-tours',
  templateUrl: './tours.component.html',
  styleUrls: ['./tours.component.css'],
  imports: [NgxPaginationModule, SelectedToursSummaryComponent, CommonModule, RouterLink, RouterLinkActive, HttpClientModule, FiltersComponent, TourFormComponent],
})
export class ToursComponent implements OnInit {
  service: TourService;
  stars: string[] = ['☆', '☆', '☆', '☆', '☆'];
  filteredTours: Tour[];

  selectedTags: Set<string> = new Set();
  selectedRatings: Set<number> = new Set();

  minPrice: number = 0;
  maxPrice: number = 0;

  startDate: Date = new Date();
  endDate: Date = new Date();

  currentPage = 1;
  totalItems = 5;

  constructor(service: TourService) {
    this.service = service;
    this.filteredTours = this.service.tours;
  }

  ngOnInit() {
    this.minPrice = this.service.getBottomPricedTour().CenaJednostkowa;
    this.maxPrice = this.service.getTopPricedTour().CenaJednostkowa;
    this.totalItems = this.filteredTours.length;
  }

  applyFilters() {
    // Start with all tours
    let result = [...this.service.tours];

    // Filter by tags if any tags are selected
    if (this.selectedTags.size > 0) {
      result = result.filter(tour => tour.tags.some(tag => this.selectedTags.has(tag)));
    }

    // Filter by ratings if any ratings are selected
    if (this.selectedRatings.size > 0) {
      result = result.filter(tour => this.selectedRatings.has(tour.getRating()));
    }

    // Filter by price range
    result = result.filter(tour => tour.CenaJednostkowa >= this.minPrice && tour.CenaJednostkowa <= this.maxPrice);

    // Filter by date range
    result = result.filter(tour => tour.DataRozpoczecia.getTime() >= this.startDate.getTime() && tour.DataZakonczenia.getTime() <= this.endDate.getTime());

    // Assign the filtered results
    this.filteredTours = result;

  }

  onTagsFilterChanged(selectedTags: Set<string>) {
    this.selectedTags = selectedTags;
    this.applyFilters();
  }

  onRatingFilterChanged(selectedRatings: Set<number>) {
    this.selectedRatings = selectedRatings;
    this.applyFilters();
  }

  onPriceFilterChanged(priceRange: number[]) {
    this.minPrice = this.changeToEuro(priceRange[0]);
    this.maxPrice = this.changeToEuro(priceRange[1]);
    this.applyFilters();
  }

  onDateFilterChanged(dateRange: Date[]) {
    this.startDate = dateRange[0];
    this.endDate = dateRange[1];
    this.applyFilters();
  }

  changeToEuro(price: number): number {
    const currency = this.service.currency[this.service.chosedCurrency as keyof typeof this.service.currency];
    return price / currency;
  }

  get returnTours(): Tour[] {
    if (this.filteredTours.length === 0) {
      return this.service.tours;
    }
    return this.filteredTours;
  }

  deleteTour(event: Event, tourId: string): void {
    this.service.deleteTour(tourId);
    this.filteredTours = this.service.tours;
  }
}
