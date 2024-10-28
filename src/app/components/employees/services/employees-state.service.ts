import { inject, Injectable } from '@angular/core';
import { EmployeeService } from './employees.service';
import {
  BehaviorSubject,
  catchError,
  map,
  startWith,
  Subject,
  switchMap,
} from 'rxjs';
import { signalSlice } from 'ngxtension/signal-slice';
import { EmployeesState } from '../../../shared/interface';

@Injectable()
export class EmployeeStateService {
  private employeeService = inject(EmployeeService);

  private _employeesInitalState: EmployeesState = {
    employees: [],
    status: 'Loading' as const,
    filter: { query: '', page: 1 },
  };

  employees$ = new BehaviorSubject<EmployeesState>({
    employees: [],
    status: 'Loading' as const,
    filter: { query: '', page: 1 },
  });

  changePage$ = new Subject<number>();

  loadEmployees$ = this.employees$.pipe(
    switchMap(() => this.employeeService.getEmployees()),
    map((employees) => ({ employees, status: 'Success' as const })),
    catchError(() => {
      return [{ employees: [], status: 'Error' as const }];
    })
  );

  loadEmployeesBySize$ = this.changePage$.pipe(
    startWith(1),
    switchMap((page, size) =>
      this.employeeService.getEmployeesByPageAndSize(page, size)
    ),
    map((employees) => ({ employees, status: 'Success' as const })),
    catchError(() => {
      return [{ employees: [], status: 'Error' as const }];
    })
  );

  state = signalSlice({
    initialState: this._employeesInitalState,
    sources: [
      this.changePage$.pipe(
        map((size, page) => ({ size, page, status: 'Loading' as const }))
      ),
      this.loadEmployees$,
    ],
  });
}
