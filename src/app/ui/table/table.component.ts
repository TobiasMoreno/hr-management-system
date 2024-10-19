import { Component, inject, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { IEmployee } from '../../shared/interface';
import { EmployeeStateService } from '../../employees/services/employees-status.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule,CurrencyPipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
  providers: [EmployeeStateService],
})
export class TableComponent implements OnInit {
  employeeService = inject(EmployeeStateService);

  employees: IEmployee[] = [];
  tableColumns: string[] = [
    'Id',
    'firstName',
    'lastName',
    'email',
    'phoneNumber',
    'hireDate',
    'departmentId',
    'salary',
  ];

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.employeeService.loadEmployees$.subscribe((employeesData) => {
      this.employees = employeesData.employees;
      console.log(this.employees);
    });
  }
}
