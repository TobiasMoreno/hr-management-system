import { Component, inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { EmployeeService } from '../../services/employees.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [
    MatLabel,
    MatFormField,
    ReactiveFormsModule,
    MatInputModule,
    RouterLink,
    MatButtonModule,
    MatSelectModule,
    MatError,
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export default class AddEmployeeComponent implements OnInit {
  private employeeService = inject(EmployeeService);
  private _snackBar = inject(MatSnackBar);
  private router = inject(Router);

  newEmployeeForm!: FormGroup;

  fb = inject(FormBuilder);

  ngOnInit(): void {
    this.initializeForm()
  }
  initializeForm(): void {
    this.newEmployeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [
        '',
        [Validators.required, Validators.maxLength(10), Validators.minLength(10)],
      ],
      hireDate: [''],
      departmentId: ['', Validators.required],
      salary: ['', Validators.required],
    });
  }
  onSubmit(): void {
    if (this.newEmployeeForm.valid) {
      const employeeData = this.newEmployeeForm.value;
      this.employeeService.createEmployee(employeeData).subscribe({
        next: () =>{
          this._snackBar.open('Employee added successfully', 'Close',{
            duration: 3000
          });
          this.router.navigateByUrl('/employees')
        },
        error: (err) => this._snackBar.open('Error creating employee', err)
      })
      console.log('Employee Data:', employeeData);
      
    }
  }
}
