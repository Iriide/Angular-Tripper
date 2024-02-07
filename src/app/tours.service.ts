import { EventEmitter, Injectable, OnInit, inject } from '@angular/core';
// import { Firestore } from '@angular/fire/firestore';
// import { getDocs, collection } from 'firebase/firestore';
import { Observable, from, map } from 'rxjs';
import { addDoc, collection, deleteDoc, doc, Firestore, getDoc, getDocs, setDoc, updateDoc, } from "@angular/fire/firestore";
import { arrayUnion } from 'firebase/firestore';

@Injectable({
    providedIn: 'root'
})

export class TourService {
    tours: Tour[] = [];
    static reservedTours: Tour[] = [];
    currency = { "EUR": 1, "PLN": 4.5, "USD": 1.2 };
    chosedCurrency = "PLN";
    selectedTours = new EventEmitter<Tour[]>();
    static history: Tour[] = [];
    itemsPerPage = 5;
    firestore: Firestore = inject(Firestore);

    constructor() {
        this.tours = [];
        from(getDocs(collection(this.firestore, 'trips'))).subscribe((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const tour = new Tour(
                    data['CenaJednostkowa'],
                    new Date(data['DataRozpoczecia']), // Assuming DataRozpoczecia is a date string in Firestore
                    new Date(data['DataZakonczenia']), // Same as above
                    data['DocelowyKraj'],
                    data['KrotkiOpis'],
                    data['LinkDoZdjecia'],
                    data['Nazwa'],
                    data['Map'],
                    data['MaxIloscMiejsc'],
                    data['Tags']
                );
                this.tours.push(tour);
            });
        });
        this.getComments();
    }
getComments(): void {
    from(getDocs(collection(this.firestore, 'ratings'))).subscribe((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = doc.data();
            const tour = this.tours.find(tour => tour.Nazwa === data['Nazwa']);
            if (tour) {
                tour.rating = [];
                const commentsArray = data['Comments'];
                commentsArray.forEach((comment: any) => {
                    const rating = new Rating(comment['Name'], comment['Rating'], comment['Comment'], comment['Date']);
                    tour.rating.push(rating);

                });
            }
        });
    });
    }

    onItemsChange(itemsPerPage: number): void {
        this.itemsPerPage = itemsPerPage;
    }

    reserveSpot(tour: Tour): void {
        if (tour.availableSpots <= 0) {
            return;
        }
        TourService.reservedTours.push(tour);
        tour.availableSpots--;
        this.selectedTours.emit(TourService.reservedTours.slice());
    }

    calcelReservation(tour: Tour): void {
        if (tour.availableSpots >= tour.MaxIloscMiejsc) {
            return;
        }
        TourService.reservedTours.splice(TourService.reservedTours.indexOf(tour), 1);
        tour.availableSpots++;
        this.selectedTours.emit(TourService.reservedTours.slice());
    }

    getReservedTripsCount(): any {
        return TourService.reservedTours.length;
    }

    getPriceInChosenCurrency(tour: Tour): any {
        return (tour.CenaJednostkowa * this.currency[this.chosedCurrency as keyof typeof this.currency]).toFixed(2);
    }
    changeCurrency(currency: number): number {
        return currency * this.currency[this.chosedCurrency as keyof typeof this.currency];
    }

    onCurrencyChange(currency: string): void {
        this.chosedCurrency = currency;
    }

    getTopPricedTour(): Tour | any {
        const availableTours = this.tours.filter(tour => tour.availableSpots > 0);

        if (availableTours.length === 0) {
            return { topPricedTour: null };
        }

        const sortedTours = availableTours.slice().sort((a, b) => a.CenaJednostkowa - b.CenaJednostkowa);

        const topPricedTour = sortedTours[sortedTours.length - 1];
        return topPricedTour;
    }
    getBottomPricedTour(): Tour | any {
        const availableTours = this.tours.filter(tour => tour.availableSpots > 0);

        if (availableTours.length === 0) {
            return { topPricedTour: null };
        }

        const sortedTours = availableTours.slice().sort((a, b) => a.CenaJednostkowa - b.CenaJednostkowa);

        const bottomPricedTour = sortedTours[0];

        return bottomPricedTour;
    }
    getEarliestTour(): Tour | any {
        const availableTours = this.tours.filter(tour => tour.availableSpots > 0);

        if (availableTours.length === 0) {
            return { earliestTour: null };
        }

        const sortedTours = availableTours.slice().sort((a, b) => a.DataRozpoczecia.getTime() - b.DataRozpoczecia.getTime());

        const earliestTour = sortedTours[0];

        return earliestTour;
    }
    getLatestTour(): Tour | any {
        const availableTours = this.tours.filter(tour => tour.availableSpots > 0);

        if (availableTours.length === 0) {
            return { latestTour: null };
        }

        const sortedTours = availableTours.slice().sort((a, b) => a.DataRozpoczecia.getTime() - b.DataRozpoczecia.getTime());

        const latestTour = sortedTours[sortedTours.length - 1];

        return latestTour;
    }

    deleteTour(tourName: string): void {
        this.tours = this.tours.filter(tour => tour.Nazwa !== tourName);
        deleteDoc(doc(this.firestore, 'trips', tourName));
    }

    public addTour(tour: Tour): any {
        console.log("Adding tour:", tour);
        this.tours.push(tour);
        return setDoc(doc(this.firestore, 'trips', tour.Nazwa), {
            Nazwa: tour.Nazwa,
            DocelowyKraj: tour.DocelowyKraj,
            DataRozpoczecia: tour.DataRozpoczecia,
            DataZakonczenia: tour.DataZakonczenia,
            CenaJednostkowa: tour.CenaJednostkowa,
            MaxIloscMiejsc: tour.MaxIloscMiejsc,
            KrotkiOpis: tour.KrotkiOpis,
            LinkDoZdjecia: tour.LinkDoZdjecia,
            Tags: tour.tags,
            Map: tour.map
        });
    }

    getTourById(id: string): Tour {
        return this.tours.find(tour => tour.Nazwa === id) || Tour.empty();
    }

    buyTours(tours: [Tour, number][]): void {
        tours.forEach(tour => {
            // Remove the tour from reservedTours
            TourService.reservedTours = TourService.reservedTours.filter(t => t !== tour[0]);

            // Add the tour to history
            for (let i = 0; i < tour[1]; i++) {
                TourService.history.push(tour[0]);
            }
            // change the available spots
            this.tours.find(t => t.Nazwa === tour[0].Nazwa)!.MaxIloscMiejsc -= tour[1];
        });
        this.selectedTours.emit(TourService.reservedTours.slice());
    }

    rateTour(name: string, comment: Rating): void {
        const tour = this.tours.find(tour => tour.Nazwa === name);
        if (tour) {
            const tourDocRef = doc(this.firestore, 'ratings', name);
            const data = { User: comment.User, Rating: comment.Rating, Comment: comment.Comment, Date: comment.Date }
            updateDoc(tourDocRef, {
                Comments: arrayUnion(data)
              });
        }
        this.getComments();
    }

}
export class Rating {
    User: string;
    Rating: number;
    Comment: string;
    Date: string;
    constructor(user: string, rating: number, comment: string, date: string) {
        this.User = user;
        this.Rating = rating;
        this.Comment = comment;
        this.Date = date;
    }
}


export class Tour {
    Nazwa: string;
    DocelowyKraj: string;
    DataRozpoczecia: Date;
    DataZakonczenia: Date;
    CenaJednostkowa: number;
    MaxIloscMiejsc: number;
    KrotkiOpis: string;
    LinkDoZdjecia: string[] = [];
    availableSpots: number;
    tags: string[] = [];
    rating: Rating[] = [];
    map: string = "";


    constructor(
        cenaJednostkowa: number,
        dataRozpoczecia: Date,
        dataZakonczenia: Date,
        docelowyKraj: string,
        krotkiOpis: string,
        linkDoZdjecia: string[],
        nazwa: string,
        map: string,
        maxIloscMiejsc: number,
        Tags: string[]
    ) {
        this.Nazwa = nazwa;
        this.DocelowyKraj = docelowyKraj;
        this.DataRozpoczecia = new Date(dataRozpoczecia);
        this.DataZakonczenia = new Date(dataZakonczenia);
        this.CenaJednostkowa = cenaJednostkowa;
        this.MaxIloscMiejsc = maxIloscMiejsc;
        this.KrotkiOpis = krotkiOpis;
        this.LinkDoZdjecia = linkDoZdjecia;
        this.availableSpots = maxIloscMiejsc;
        this.tags = Tags;
        this.map = map;
    }

    static empty(): Tour {
        return new Tour(0, new Date(), new Date(), "", "", [], "", "", 0, []);
    }

    getRating(): number {
        if (this.rating.length === 0) {
            return 0;
        }
        let sum = 0;
        this.rating.forEach(r => sum += r.Rating);
        return Math.floor(sum / this.rating.length);
    }
}
