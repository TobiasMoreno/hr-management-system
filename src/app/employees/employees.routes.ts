import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./employees.component')
  },
] as Routes;
