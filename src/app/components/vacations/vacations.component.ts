 import { Component } from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';

@Component({
  selector: 'app-vacations',
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: './vacations.component.html',
  styleUrl: './vacations.component.css'
})
export default class VacationsComponent {

}
