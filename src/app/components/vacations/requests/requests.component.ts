import { BasicTableComponent } from '@/app/shared/basic-table/basic-table.component';
import { TableColumn } from '@/app/shared/interfaces/interface';
import { EmployeeVacation } from '@/app/shared/interfaces/vacation-interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  standalone: true,
  imports: [BasicTableComponent],
  templateUrl: './requests.component.html',
  styleUrl: './requests.component.css',
})
export class RequestsComponent implements OnInit {
  EMPLOYEES = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      hireDate: '2023-01-15',
      vacationRequests: [
        {
          startDate: '2024-07-01',
          endDate: '2024-07-10',
          daysRequested: 10,
          status: 'approved',
        },
        {
          startDate: '2024-12-01',
          endDate: '2024-12-05',
          daysRequested: 5,
          status: 'pending',
        },
        {
          startDate: '2024-08-15',
          endDate: '2024-08-20',
          daysRequested: 5,
          status: 'approved',
        },
      ],
      totalVacationDays: 15,
      usedVacationDays: 10,
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      hireDate: '2021-02-10',
      vacationRequests: [
        {
          startDate: '2024-06-01',
          endDate: '2024-06-07',
          daysRequested: 7,
          status: 'approved',
        },
        {
          startDate: '2024-09-10',
          endDate: '2024-09-15',
          daysRequested: 5,
          status: 'rejected',
        },
        {
          startDate: '2024-11-01',
          endDate: '2024-11-10',
          daysRequested: 10,
          status: 'approved',
        },
      ],
      totalVacationDays: 20,
      usedVacationDays: 7,
    },
    {
      id: 3,
      firstName: 'Carlos',
      lastName: 'Gomez',
      hireDate: '2019-05-20',
      vacationRequests: [
        {
          startDate: '2024-09-15',
          endDate: '2024-09-20',
          daysRequested: 5,
          status: 'rejected',
        },
        {
          startDate: '2024-06-10',
          endDate: '2024-06-15',
          daysRequested: 5,
          status: 'approved',
        },
        {
          startDate: '2024-08-01',
          endDate: '2024-08-10',
          daysRequested: 10,
          status: 'pending',
        },
      ],
      totalVacationDays: 25,
      usedVacationDays: 15,
    },
    {
      id: 4,
      firstName: 'Emily',
      lastName: 'Clark',
      hireDate: '2020-12-01',
      vacationRequests: [
        {
          startDate: '2024-04-10',
          endDate: '2024-04-15',
          daysRequested: 5,
          status: 'approved',
        },
        {
          startDate: '2024-05-20',
          endDate: '2024-05-25',
          daysRequested: 5,
          status: 'pending',
        },
        {
          startDate: '2024-07-15',
          endDate: '2024-07-20',
          daysRequested: 5,
          status: 'approved',
        },
      ],
      totalVacationDays: 20,
      usedVacationDays: 5,
    },
    {
      id: 5,
      firstName: 'Michael',
      lastName: 'Johnson',
      hireDate: '2017-11-30',
      vacationRequests: [
        {
          startDate: '2024-05-15',
          endDate: '2024-05-25',
          daysRequested: 10,
          status: 'approved',
        },
        {
          startDate: '2024-10-01',
          endDate: '2024-10-05',
          daysRequested: 5,
          status: 'pending',
        },
        {
          startDate: '2024-11-15',
          endDate: '2024-11-20',
          daysRequested: 5,
          status: 'approved',
        },
      ],
      totalVacationDays: 25,
      usedVacationDays: 15,
    },
    {
      id: 6,
      firstName: 'Laura',
      lastName: 'Martinez',
      hireDate: '2022-06-15',
      vacationRequests: [
        {
          startDate: '2024-03-10',
          endDate: '2024-03-15',
          daysRequested: 5,
          status: 'approved',
        },
        {
          startDate: '2024-08-05',
          endDate: '2024-08-10',
          daysRequested: 5,
          status: 'approved',
        },
        {
          startDate: '2024-09-20',
          endDate: '2024-09-25',
          daysRequested: 5,
          status: 'pending',
        },
      ],
      totalVacationDays: 15,
      usedVacationDays: 5,
    },
    {
      id: 7,
      firstName: 'Sophia',
      lastName: 'Williams',
      hireDate: '2020-03-25',
      vacationRequests: [
        {
          startDate: '2024-11-01',
          endDate: '2024-11-10',
          daysRequested: 10,
          status: 'approved',
        },
        {
          startDate: '2024-12-10',
          endDate: '2024-12-15',
          daysRequested: 5,
          status: 'approved',
        },
        {
          startDate: '2024-10-01',
          endDate: '2024-10-05',
          daysRequested: 5,
          status: 'pending',
        },
      ],
      totalVacationDays: 20,
      usedVacationDays: 10,
    },
  ];

  vacation_requests: EmployeeVacation[] = [];

  columns: TableColumn[] = [
    { headerName: 'ID', accessorKey: 'id' },
    { headerName: 'First Name', accessorKey: 'firstName' },
    { headerName: 'Last Name', accessorKey: 'lastName' },
    { headerName: 'Hire Date', accessorKey: 'hireDate' },
    { headerName: 'Vacation Requests', accessorKey: 'vacationRequests' },
    { headerName: 'Total Vacations', accessorKey: 'totalVacationDays' },
    { headerName: 'Used Vacations', accessorKey: 'usedVacationDays' },
    { headerName: 'Remaining Vacations', accessorKey: 'remainingVacationDays' },
  ];

  ngOnInit(): void {
    this.formatRequests();
  }
  formatRequests(): void {
    this.vacation_requests = this.EMPLOYEES.map((employee) => ({
      id: employee.id,
      firstName: employee.firstName,
      lastName: employee.lastName,
      hireDate: employee.hireDate,
      vacationRequests: employee.vacationRequests.length,
      totalVacationDays: employee.totalVacationDays,
      usedVacationDays: employee.usedVacationDays,
      remainingVacationDays:
        employee.totalVacationDays - employee.usedVacationDays,
    }));
  }
}
