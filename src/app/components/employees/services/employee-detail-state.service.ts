import { inject, Injectable } from '@angular/core';
import { EmployeeService } from './employees.service';
import { map, Observable, switchMap } from 'rxjs';
import { signalSlice } from 'ngxtension/signal-slice';
import { EmployeeState } from '../../../shared/interfaces/interface';

@Injectable()
export class EmployeeDetailStateService {
  private employeeService = inject(EmployeeService);

  private _employeeInitalState: EmployeeState = {
    employee: null,
    status: 'Loading',
  };

  state = signalSlice({
    initialState: this._employeeInitalState,
    actionSources: {
      getById: (_state, $: Observable<string>) =>
        $.pipe(
          switchMap((id) => this.employeeService.getEmployeeById(id)),
          map((data) => ({ employee: data, status: 'Success' as const }))
        ),
    },
  });
}
