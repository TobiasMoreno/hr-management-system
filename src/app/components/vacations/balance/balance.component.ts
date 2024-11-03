import { BasicTableComponent } from '@/app/shared/basic-table/basic-table.component';
import { TableColumn } from '@/app/shared/interfaces/interface';
import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [BasicTableComponent, JsonPipe],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.css',
})
export class BalanceComponent implements OnInit {
  VACATION_BALANCE = [
    {
      id: 1,
      employeeId: 1,
      firstName: 'John',
      lastName: 'Doe',
      startDate: '2024-07-01',
      endDate: '2024-07-10',
      daysRequested: 10,
      status: 'approved',
    },
    {
      id: 2,
      employeeId: 1,
      firstName: 'John',
      lastName: 'Doe',
      startDate: '2024-12-01',
      endDate: '2024-12-05',
      daysRequested: 5,
      status: 'pending',
    },
    {
      id: 3,
      employeeId: 1,
      firstName: 'John',
      lastName: 'Doe',
      startDate: '2024-08-15',
      endDate: '2024-08-20',
      daysRequested: 5,
      status: 'approved',
    },
    {
      id: 4,
      employeeId: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      startDate: '2024-06-01',
      endDate: '2024-06-07',
      daysRequested: 7,
      status: 'approved',
    },
    {
      id: 5,
      employeeId: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      startDate: '2024-09-10',
      endDate: '2024-09-15',
      daysRequested: 5,
      status: 'rejected',
    },
    {
      id: 6,
      employeeId: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      startDate: '2024-11-01',
      endDate: '2024-11-10',
      daysRequested: 10,
      status: 'approved',
    },
    {
      id: 7,
      employeeId: 3,
      firstName: 'Carlos',
      lastName: 'Gomez',
      startDate: '2024-09-15',
      endDate: '2024-09-20',
      daysRequested: 5,
      status: 'rejected',
    },
    {
      id: 8,
      employeeId: 3,
      firstName: 'Carlos',
      lastName: 'Gomez',
      startDate: '2024-06-10',
      endDate: '2024-06-15',
      daysRequested: 5,
      status: 'approved',
    },
    {
      id: 9,
      employeeId: 3,
      firstName: 'Carlos',
      lastName: 'Gomez',
      startDate: '2024-08-01',
      endDate: '2024-08-10',
      daysRequested: 10,
      status: 'pending',
    },
    {
      id: 10,
      employeeId: 4,
      firstName: 'Emily',
      lastName: 'Clark',
      startDate: '2024-04-10',
      endDate: '2024-04-15',
      daysRequested: 5,
      status: 'approved',
    },
    {
      id: 11,
      employeeId: 4,
      firstName: 'Emily',
      lastName: 'Clark',
      startDate: '2024-05-20',
      endDate: '2024-05-25',
      daysRequested: 5,
      status: 'pending',
    },
    {
      id: 12,
      employeeId: 4,
      firstName: 'Emily',
      lastName: 'Clark',
      startDate: '2024-07-15',
      endDate: '2024-07-20',
      daysRequested: 5,
      status: 'approved',
    },
    {
      id: 13,
      employeeId: 5,
      firstName: 'Michael',
      lastName: 'Johnson',
      startDate: '2024-05-15',
      endDate: '2024-05-25',
      daysRequested: 10,
      status: 'approved',
    },
    {
      id: 14,
      employeeId: 5,
      firstName: 'Michael',
      lastName: 'Johnson',
      startDate: '2024-10-01',
      endDate: '2024-10-05',
      daysRequested: 5,
      status: 'pending',
    },
    {
      id: 15,
      employeeId: 5,
      firstName: 'Michael',
      lastName: 'Johnson',
      startDate: '2024-11-15',
      endDate: '2024-11-20',
      daysRequested: 5,
      status: 'approved',
    },
    {
      id: 16,
      employeeId: 6,
      firstName: 'Laura',
      lastName: 'Martinez',
      startDate: '2024-03-10',
      endDate: '2024-03-15',
      daysRequested: 5,
      status: 'approved',
    },
    {
      id: 17,
      employeeId: 6,
      firstName: 'Laura',
      lastName: 'Martinez',
      startDate: '2024-08-05',
      endDate: '2024-08-10',
      daysRequested: 5,
      status: 'approved',
    },
    {
      id: 18,
      employeeId: 6,
      firstName: 'Laura',
      lastName: 'Martinez',
      startDate: '2024-09-20',
      endDate: '2024-09-25',
      daysRequested: 5,
      status: 'pending',
    },
    {
      id: 19,
      employeeId: 7,
      firstName: 'Sophia',
      lastName: 'Williams',
      startDate: '2024-11-01',
      endDate: '2024-11-10',
      daysRequested: 10,
      status: 'approved',
    },
    {
      id: 20,
      employeeId: 7,
      firstName: 'Sophia',
      lastName: 'Williams',
      startDate: '2024-12-10',
      endDate: '2024-12-15',
      daysRequested: 5,
      status: 'approved',
    },
    {
      id: 21,
      employeeId: 7,
      firstName: 'Sophia',
      lastName: 'Williams',
      startDate: '2024-10-01',
      endDate: '2024-10-05',
      daysRequested: 5,
      status: 'pending',
    },
  ];

  ngOnInit(): void {
    this.formatVacationStatuses();
  }

  columns: TableColumn[] = [
    { headerName: 'Id', accessorKey: 'id' },
    { headerName: 'Employee Id', accessorKey: 'employeeId' },
    { headerName: 'First Name', accessorKey: 'firstName' },
    { headerName: 'Last Name', accessorKey: 'lastName' },
    { headerName: 'Start Date', accessorKey: 'startDate' },
    { headerName: 'End Date', accessorKey: 'endDate' },
    { headerName: 'Days Requested', accessorKey: 'daysRequested' },
    { headerName: 'Status', accessorKey: 'status' },
  ];

  formatVacationStatuses(): void {
    this.VACATION_BALANCE = this.VACATION_BALANCE.map((request) => ({
      ...request,
      status: this.formatStatus(request.status),
    }));
  }

  formatStatus(status: string): string {
    this.colorizeStatus(status);
    return status.charAt(0).toUpperCase() + status.slice(1);
  }
  colorizeStatus(status: string) {
    switch (status) {
      case 'approved':
    }
  }
}
