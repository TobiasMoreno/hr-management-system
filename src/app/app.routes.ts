import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'employees',
    loadChildren: () => import('./components/employees/employees.routes'),
  },
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.routes'),
  },
  {
    path: 'development-plans',
    loadChildren: () => import('./components/development-plans/development-plans.routes'),
  },
  {
    path: 'attendances',
    loadChildren: () => import('./components/attendances/attendances.routes'),
  },
  {
    path: 'reports',
    loadChildren: () => import('./components/reports/reports.routes'),
  },
  {
    path: 'feedbacks',
    loadChildren: () => import('./components/feedbacks/feedbacks.routes'),
  },
  {
    path: 'vacations',
    loadChildren: () => import('./components/vacations/vacations.routes'),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
