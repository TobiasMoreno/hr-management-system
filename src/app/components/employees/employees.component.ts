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

   EMPLOYEES_DATA =[
    {
        "id": 1,
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "phoneNumber": "123-456-7890",
        "hireDate": "2023-01-15",
        "departmentId": 1,
        "salary": 60000.00
    },
    {
        "id": 2,
        "firstName": "Jane",
        "lastName": "Smith",
        "email": "jane.smith@example.com",
        "phoneNumber": "098-765-4321",
        "hireDate": "2023-02-10",
        "departmentId": 2,
        "salary": 65000.00
    },
    {
        "id": 3,
        "firstName": "Emily",
        "lastName": "Johnson",
        "email": "emily.johnson@example.com",
        "phoneNumber": "555-123-4567",
        "hireDate": "2023-03-05",
        "departmentId": 3,
        "salary": 70000.00
    },
    {
        "id": 4,
        "firstName": "Michael",
        "lastName": "Brown",
        "email": "michael.brown@example.com",
        "phoneNumber": "444-987-6543",
        "hireDate": "2023-04-20",
        "departmentId": 4,
        "salary": 62000.00
    },
    {
        "id": 5,
        "firstName": "Sarah",
        "lastName": "Davis",
        "email": "sarah.davis@example.com",
        "phoneNumber": "333-222-1111",
        "hireDate": "2023-05-15",
        "departmentId": 5,
        "salary": 58000.00
    },
    {
        "id": 6,
        "firstName": "Chris",
        "lastName": "Wilson",
        "email": "chris.wilson@example.com",
        "phoneNumber": "222-333-4444",
        "hireDate": "2023-06-10",
        "departmentId": 1,
        "salary": 61000.00
    },
    {
        "id": 7,
        "firstName": "Anna",
        "lastName": "Martinez",
        "email": "anna.martinez@example.com",
        "phoneNumber": "111-222-3333",
        "hireDate": "2023-07-05",
        "departmentId": 2,
        "salary": 67000.00
    },
    {
        "id": 8,
        "firstName": "David",
        "lastName": "Lopez",
        "email": "david.lopez@example.com",
        "phoneNumber": "666-777-8888",
        "hireDate": "2023-08-01",
        "departmentId": 3,
        "salary": 73000.00
    },
    {
        "id": 9,
        "firstName": "Linda",
        "lastName": "Garcia",
        "email": "linda.garcia@example.com",
        "phoneNumber": "999-888-7777",
        "hireDate": "2023-09-10",
        "departmentId": 4,
        "salary": 64000.00
    },
    {
        "id": 10,
        "firstName": "James",
        "lastName": "Martinez",
        "email": "james.martinez@example.com",
        "phoneNumber": "888-999-6666",
        "hireDate": "2023-10-15",
        "departmentId": 5,
        "salary": 59000.00
    },
    {
        "id": 11,
        "firstName": "Olivia",
        "lastName": "Rodriguez",
        "email": "olivia.rodriguez@example.com",
        "phoneNumber": "777-666-5555",
        "hireDate": "2023-11-12",
        "departmentId": 1,
        "salary": 62500.00
    },
    {
        "id": 12,
        "firstName": "Ethan",
        "lastName": "Martinez",
        "email": "ethan.martinez@example.com",
        "phoneNumber": "333-555-7777",
        "hireDate": "2023-12-18",
        "departmentId": 2,
        "salary": 65500.00
    },
    {
        "id": 13,
        "firstName": "Sophia",
        "lastName": "Lee",
        "email": "sophia.lee@example.com",
        "phoneNumber": "111-888-9999",
        "hireDate": "2023-01-25",
        "departmentId": 3,
        "salary": 70500.00
    },
    {
        "id": 14,
        "firstName": "Liam",
        "lastName": "Perez",
        "email": "liam.perez@example.com",
        "phoneNumber": "222-444-6666",
        "hireDate": "2023-02-20",
        "departmentId": 4,
        "salary": 63000.00
    },
    {
        "id": 15,
        "firstName": "Ava",
        "lastName": "Nguyen",
        "email": "ava.nguyen@example.com",
        "phoneNumber": "555-111-2222",
        "hireDate": "2023-03-15",
        "departmentId": 5,
        "salary": 59500.00
    },
    {
        "id": 16,
        "firstName": "Mason",
        "lastName": "Hernandez",
        "email": "mason.hernandez@example.com",
        "phoneNumber": "999-333-4444",
        "hireDate": "2023-04-05",
        "departmentId": 1,
        "salary": 61500.00
    },
    {
        "id": 17,
        "firstName": "Isabella",
        "lastName": "King",
        "email": "isabella.king@example.com",
        "phoneNumber": "444-555-6666",
        "hireDate": "2023-05-23",
        "departmentId": 2,
        "salary": 66500.00
    },
    {
        "id": 18,
        "firstName": "Logan",
        "lastName": "Wright",
        "email": "logan.wright@example.com",
        "phoneNumber": "111-999-5555",
        "hireDate": "2023-06-18",
        "departmentId": 3,
        "salary": 72000.00
    },
    {
        "id": 19,
        "firstName": "Mia",
        "lastName": "Hill",
        "email": "mia.hill@example.com",
        "phoneNumber": "333-444-7777",
        "hireDate": "2023-07-25",
        "departmentId": 4,
        "salary": 65000.00
    },
    {
        "id": 20,
        "firstName": "Jacob",
        "lastName": "Scott",
        "email": "jacob.scott@example.com",
        "phoneNumber": "222-888-3333",
        "hireDate": "2023-08-30",
        "departmentId": 5,
        "salary": 58500.00
    }
]

  changePage(page: number,size:number) {
    this.employeeService.changePage$
    
  }
}
