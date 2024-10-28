import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./employees.component')
  },
  {
    path: 'detail/:id',
    loadComponent: () => import('./features/employee-detail/employee-detail.component')
  }
] as Routes;
