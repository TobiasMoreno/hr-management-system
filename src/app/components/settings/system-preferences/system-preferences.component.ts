import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {  MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-system-preferences',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule,MatButtonModule],
  templateUrl: './system-preferences.component.html',
})
export class SystemPreferencesComponent {

}
