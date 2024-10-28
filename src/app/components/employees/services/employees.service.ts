import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from '../../../shared/data-access/base-http.service';
import { IEmployee } from '../../../shared/interface';

@Injectable({ providedIn: 'root' })
export class EmployeeService extends BaseHttpService {
  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.employeeUrl + '/list');
  }
  getEmployeeById(id: string): Observable<IEmployee> {
    return this.http.get<IEmployee>(this.employeeUrl + '/' + id);
  }

  getEmployeesByPageAndSize(
    page: number,
    size: number
  ): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(
      this.employeeUrl + '/list-size?page=' + page + '&size=' + size
    );
  }
}
