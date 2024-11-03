import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-development-plans',
  standalone: true,
  imports: [MatCardModule,MatIconModule],
  templateUrl: './development-plans.component.html',
  styleUrl: './development-plans.component.css'
})
export default class DevelopmentPlansComponent {

}
