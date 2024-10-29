import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./employees.component')
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./features/employee-detail/employee-detail.component')
  },
  {
    path: 'create',
    loadComponent: () => import('./features/add-employee/add-employee.component')
  }
] as Routes;
