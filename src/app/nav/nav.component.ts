import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TourService } from '../tours.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(public tourService: TourService) { }
}
