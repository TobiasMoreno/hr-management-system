import { TemplateRef } from '@angular/core';
import { FormControl } from '@angular/forms';

export interface IEmployee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  hireDate: Date;
  departmentId: number;
  salary: number;
}
export interface EmployeesState {
  employees: IEmployee[];
  status: 'Loading' | 'Success' | 'Error';
  filter: {query: string; page: number}
}

export interface TableColumn {
  headerName: string;
  accessorKey: string; // La clave del dato en los ítems para mostrar en la columna
}

export interface VacationsForm {
  startDate: FormControl<string | null>;
  endDate: FormControl<string | null>;
}

export interface FeedbackForm {
  performanceReviewId: FormControl<number | null>;
  feedbackGiverEmployeeId: FormControl<number | null>;
  comments: FormControl<string | null>;
  feedbackDate: FormControl<string | null>;
}
