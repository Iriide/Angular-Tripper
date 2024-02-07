import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ToursComponent } from './trips/tours.component';
import { HomeComponent } from './home/home.component';
import { TourFormComponent } from './tour-form/tour-form.component';
import { BasketComponent } from './basket/basket.component';
import { HistoryComponent } from './history/history.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: 'tours', component: ToursComponent },
    { path: 'add', component: TourFormComponent },
    { path: 'basket', component: BasketComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'details/:id', component: TripDetailsComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: AppComponent }
];

@NgModule ( {
    imports: [
      BrowserModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFirestoreModule
    ]
  })
  export class AppModule {}
