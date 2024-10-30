import { Component, inject, Input, OnInit } from '@angular/core';
import { EmployeeDetailForm, IEmployee, IEmployeeDTO } from '../../../../shared/interface';
import { JsonPipe } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { EmployeeService } from '../../services/employees.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    RouterLink,
  ],
  templateUrl: './employee-detail.component.html',
  styleUrl: './employee-detail.component.css',
  providers: [EmployeeService],
})
export default class EmployeeDetailComponent implements OnInit {
  employeeService = inject(EmployeeService);
  _snackBar = inject(MatSnackBar);
  private _fb = inject(FormBuilder);
  _router = inject(Router);

  employeeDetailForm = this._fb.group<EmployeeDetailForm>({
    id: this._fb.control(null, [Validators.required]),
    firstName: this._fb.control('', [Validators.required]),
    lastName: this._fb.control('', [Validators.required]),
    email: this._fb.control('', [Validators.required]),
    phoneNumber: this._fb.control('', [Validators.required]),
    hireDate: this._fb.control('', [Validators.required]),
    departmentId: this._fb.control(null, [Validators.required]),
    salary: this._fb.control(null, [Validators.required]),
  });

  @Input() id!: string;

  ngOnInit(): void {
    const employeeData = this.employeeService.getEmployeeById(this.id);
    employeeData.subscribe({
      next: (employee) => {
        if (employee) {
          
          const formattedEmployee = {
            ...employee,
            hireDate: new Date(employee.hireDate).toISOString().split('T')[0]
          };
          this.employeeDetailForm.patchValue(formattedEmployee);
        } else {
          this.employeeDetailForm.disable();
        }
      },
      error: () => this.employeeDetailForm.disable(),
    });
  }

  update(): void {
    const employee = this.employeeDetailForm.value as IEmployee;

    const formattedEmployee: IEmployeeDTO = {
      firstName: employee.firstName,
      lastName: employee.lastName,
      email: employee.email,
      phoneNumber: employee.phoneNumber,
      hireDate: new Date(employee.hireDate),
      departmentId: employee.departmentId,
      salary: employee.salary,
    };
  
    this.employeeService.updateEmployee(formattedEmployee, employee.id).subscribe({
      next: () => {
        this._snackBar.open('Employee updated successfully', 'Close', { duration: 3000 });
        this._router.navigateByUrl('employees');
      },
      error: (e) => this._snackBar.open('Error updating employee', e),
    });
  }
  
}
