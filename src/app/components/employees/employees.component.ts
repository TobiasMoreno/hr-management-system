import { Component, inject } from '@angular/core';
import { TableComponent } from './table/table.component';
import { EmployeeStateService } from './services/employees-status.service';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
  providers: [EmployeeStateService],
})
export default class EmployeesComponent {
  employeeService = inject(EmployeeStateService);

  employees = this.employeeService.state().employees;

  changePage(page: number,size:number) {
    this.employeeService.changePage$
    
  }
}
