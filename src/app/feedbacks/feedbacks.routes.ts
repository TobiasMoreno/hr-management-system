import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./feedbacks.component'),
  },
] as Routes;
