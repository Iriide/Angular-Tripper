import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Rating, Tour, TourService } from '../tours.service';
import { from, of, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { getDocs, collection } from 'firebase/firestore';

@Component({
  selector: 'app-trip-details',
  standalone: true,
  imports: [CommonModule, CarouselModule, FormsModule],
  templateUrl: './trip-details.component.html',
  styleUrl: './trip-details.component.css'
})
export class TripDetailsComponent {
  tour: Tour = Tour.empty();
  service: TourService;
  currentSlideIndex = 0;
  rating = 0;
  errors: string[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    service: TourService) {
    this.service = service;

  }

  onPrevClick(): void {
    this.currentSlideIndex = (this.currentSlideIndex + this.tour.LinkDoZdjecia.length - 1) % this.tour.LinkDoZdjecia.length;
  }

  onNextClick(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.tour.LinkDoZdjecia.length;
  }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        return id ? of(this.service.getTourById(id)) : of(Tour.empty());
      })
    ).subscribe(trip => {
      this.tour = trip;
    });
  }

  setRating(newRating: number): void {
    this.rating = newRating;
  }

  get mapUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.tour.map);
  }

  onSubmit(form: any) {
    this.errors = [];

    const comment = new Rating(form.name, this.rating, form.review, form.date);
    console.log("Rating tour:", comment);
    this.service.rateTour(this.tour.Nazwa, comment);
    form.reset();
  }
  goToToursPage() {
    this.router.navigate(['/tours']);
  }
  ratingCount(): number {
    return this.tour.rating.length;
  }

}
