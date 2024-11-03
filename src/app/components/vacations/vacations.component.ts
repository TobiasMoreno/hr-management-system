import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CalendarComponent } from './calendar/calendar.component';
import { BalanceComponent } from './balance/balance.component';
import { RequestsComponent } from './requests/requests.component';
import { PoliciesComponent } from './policies/policies.component';

@Component({
  selector: 'app-vacations',
  standalone: true,
  imports: [
    MatCardModule,
    CalendarComponent,
    BalanceComponent,
    RequestsComponent,
    PoliciesComponent,
  ],
  templateUrl: './vacations.component.html',
  styleUrl: './vacations.component.css',
})
export default class VacationsComponent {}
