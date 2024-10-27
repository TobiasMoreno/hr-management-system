import { Routes } from '@angular/router';

export default [
  {
    path: '',
    loadComponent: () => import('./feedbacks.component'),
  },
  {
    path: 'create',
    loadComponent: () => import('./features/create-feedback/create-feedback.component'),
  }
] as Routes;
