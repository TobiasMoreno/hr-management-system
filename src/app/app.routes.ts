import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'employees',
    loadChildren: () => import('./employees/employees.routes'),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.routes'),
  },
  {
    path: 'development-plans',
    loadChildren: () => import('./development-plans/development-plans.routes'),
  },
  {
    path: 'attendances',
    loadChildren: () => import('./attendances/attendances.routes'),
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.routes'),
  },
  {
    path: 'feedbacks',
    loadChildren: () => import('./feedbacks/feedbacks.routes'),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
