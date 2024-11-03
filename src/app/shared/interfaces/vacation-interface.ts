import { FormControl } from '@angular/forms';

export interface VacationsForm {
  startDate: FormControl<string | null>;
  endDate: FormControl<string | null>;
}

export interface VacationRequest {
  id: number;
  employeeId: number,
  firstName: string;
  lastName: string;
  startDate: string;
  endDate: string;
  daysRequested: number;
  status: string;
}

export interface EmployeeVacation {
  id: number;
  firstName: string;
  lastName: string;
  hireDate: string;
  vacationRequests: number;
  totalVacationDays: number;
  usedVacationDays: number;
  remainingVacationDays: number;
}
