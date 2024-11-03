import { FormControl } from '@angular/forms';

export interface IEmployee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  hireDate: string;
  departmentId: number;
  salary: number;
}

export interface IEmployeeDTO {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  hireDate: Date;
  departmentId: number;
  salary: number;
}

export interface EmployeeState {
  employee: IEmployee | null;
  status: 'Loading' | 'Success' | 'Error';
}

export interface EmployeesState {
  employees: IEmployee[];
  status: 'Loading' | 'Success' | 'Error';
  filter: { query: string; page: number };
}

export interface EmployeeDetailForm {
  id: FormControl<number | null>;
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  email: FormControl<string | null>;
  phoneNumber: FormControl<string | null>;
  hireDate: FormControl<string | null>;
  departmentId: FormControl<number | null>;
  salary: FormControl<number | null>;
}
