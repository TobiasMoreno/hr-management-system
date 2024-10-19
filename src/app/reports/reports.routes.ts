import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./reports.component'),
  },
] as Routes;
