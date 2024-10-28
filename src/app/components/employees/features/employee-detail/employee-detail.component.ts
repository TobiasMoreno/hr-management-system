import { Component, inject, effect, Input, OnInit } from '@angular/core';
import {
  EmployeeDetailForm,
  EmployeeState,
} from '../../../../shared/interface';
import { JsonPipe } from '@angular/common';
import { EmployeeDetailStateService } from '../../services/employee-detail-state.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  standalone: true,
  imports: [
    JsonPipe,
    ReactiveFormsModule,
    MatFormField,
    MatLabel,
    MatButtonModule,
    MatInputModule,
    RouterLink
  ],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css',
  providers: [EmployeeDetailStateService],
})
export default class EmployeeDetailComponent implements OnInit {
  employeeService = inject(EmployeeDetailStateService);
  employee = this.employeeService.state().employee;

  private _fb = inject(FormBuilder);

  employeeDetailForm = this._fb.group<EmployeeDetailForm>({
    id: this._fb.control(null, [Validators.required]),
    firstName: this._fb.control('', [Validators.required]),
    lastName: this._fb.control('', [Validators.required]),
    email: this._fb.control('', [Validators.required]),
    phoneNumber: this._fb.control('', [Validators.required]),
    hireDate: this._fb.control(new Date, [Validators.required]),
    departmentId: this._fb.control(null, [Validators.required]),
    salary: this._fb.control(null, [Validators.required]),
  });

  @Input() id!: string;

  employeeInitialState: EmployeeState = {
    employee: null,
    status: 'Loading',
  };

  constructor() {
    effect(() => {
      this.employeeService.state.getById(this.id);
    });
  }

  ngOnInit(): void {
    this.employeeService.state.getById(this.id);

    const employeeData = this.employeeService.state().employee;
    console.log(employeeData);

    if (employeeData) {
      this.employeeDetailForm.patchValue({
        firstName: employeeData.firstName,
        lastName: employeeData.lastName,
        email: employeeData.email,
        phoneNumber: employeeData.phoneNumber,
        hireDate: employeeData.hireDate,
        departmentId: employeeData.departmentId,
        salary: employeeData.salary,
      });
    }else{
      this.employeeDetailForm.disable();
    }
  }
}
