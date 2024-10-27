import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { VacationsForm } from '../../../shared/interface';
import { JsonPipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

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

  vacationsForm = this._fb.group<VacationsForm>({
    startDate: this._fb.control('', [Validators.required]),
    endDate: this._fb.control('', [Validators.required]),
  });
  submit() {
    if (this.vacationsForm.valid) {
      console.log(this.vacationsForm.value);
    } else {
      console.log('Error');
    }
  }

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  isRequired = (field: 'start' | 'date', form: FormGroup) => {
    const control = form.get(field);

    return control && control.touched && control.hasError('required');
  };
}
