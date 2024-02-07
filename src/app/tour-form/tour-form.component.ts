import { Component } from '@angular/core';
import { TourService, Tour } from '../tours.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tour-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tour-form.component.html',
  styleUrl: './tour-form.component.css'
})
export class TourFormComponent {
  service: TourService;
  showForm: boolean = true;
  availableTags = ['Cultural Experience', 'Nature', 'Exclusive', 'Adventure', 'Relaxation'];
  selectedTags: string[] = [];


  constructor(service: TourService) {
    this.service = service
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }
  onTagChange(event: any) {
    const tag = event.target.value;
    if (event.target.checked) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags = this.selectedTags.filter(t => t !== tag);
    }
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log("Form values:", form.value);

      const formValue = form.value;
      const newTour = new Tour(
        +formValue.cenaJednostkowa, // Convert to number
        new Date(formValue.dataRozpoczecia),
        new Date(formValue.dataZakonczenia),
        formValue.docelowyKraj,
        formValue.description,
        formValue.img.split(','), // Assuming it's a comma-separated string
        formValue.nazwa,
        formValue.map,
        +formValue.spots, // Convert to number
        this.selectedTags // Assuming this is an array of selected tags
      );

      console.log("New tour object:", newTour);
      this.service.addTour(newTour);

      form.reset();
    }
  }

}

/* {
    Nazwa: "Discover Paris",
    DocelowyKraj: "France",
    DataRozpoczecia: "2024-06-15",
    DataZakonczenia: "2024-06-22",
    CenaJednostkowa: 1500,
    MaxIloscMiejsc: 30,
    KrotkiOpis: "Explore the romantic city of Paris. Visit the Eiffel Tower, Louvre Museum, and enjoy the exquisite French cuisine.",
    LinkDoZdjecia: "https://images.pexels.com/photos/2082103/pexels-photo-2082103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
}
*/
