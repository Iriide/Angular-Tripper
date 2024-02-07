import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { RouterModule,  } from '@angular/router';
import { HttpClientModule,  } from '@angular/common/http';
import { TourService } from './tours.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavComponent, RouterModule, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [TourService]
})
export class AppComponent {
  title = 'Tripper';
}
