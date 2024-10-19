import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./development-plans.component'),
  },
] as Routes;
