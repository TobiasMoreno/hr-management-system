import { inject, Injectable } from '@angular/core';
import { EmployeeService } from './employees.service';
import { EmployeesState } from '../../shared/interface';
import { BehaviorSubject, catchError, map, switchMap } from 'rxjs';
import { signalSlice } from 'ngxtension/signal-slice';

@Injectable()
export class EmployeeStateService {
  private employeeService = inject(EmployeeService);

  private _employeeState: EmployeesState = {
    employees: [],
    status: 'Loading' as const,
  };

  employees$ = new BehaviorSubject<EmployeesState>({
    employees: [],
    status: 'Loading' as const,
  });

  loadEmployees$ = this.employees$.pipe(
    switchMap(() => this.employeeService.getEmployees()),
    map((employees) => ({ employees, status: 'Success' as const })),
    catchError(() => {
      return [{ employees: [], status: 'Error' as const }];
    })
  );

  state = signalSlice({
    initialState: this._employeeState,
    sources: [
      this.loadEmployees$,
    ],
  });
}
