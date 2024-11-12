import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VacationsForm } from '@/app/shared/interfaces/vacation-interface';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    JsonPipe,
  ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
})
export class CalendarComponent {
  private _fb = inject(FormBuilder);
  private _snack = inject(MatSnackBar);

  vacationsForm = this._fb.group<VacationsForm>({
    startDate: this._fb.control('', [Validators.required]),
    endDate: this._fb.control('', [Validators.required]),
  });

  onSubmit() {
    if (this.vacationsForm.valid) {
      this._snack.open('Request submitted successfully', 'Close', {
        duration: 3000,
      });
    } else {
      this._snack.open('Please fill in all required fields', 'Close', {
        duration: 3000,
      });
    }
  }
}
