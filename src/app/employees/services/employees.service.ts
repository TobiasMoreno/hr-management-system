import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../shared/data-access/base-http.service';
import { Observable } from 'rxjs';
import { IEmployee } from '../../shared/interface';

@Injectable({ providedIn: 'root' })
export class EmployeeService extends BaseHttpService {
  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.employeeUrl + '/list');
  }
  getEmployeeById(id: number): Observable<IEmployee> {
    return this.http.get<IEmployee>(this.employeeUrl + '/' + id);
  }
}
