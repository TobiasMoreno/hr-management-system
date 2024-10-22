import { Component } from '@angular/core';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export default class EmployeesComponent {
}
