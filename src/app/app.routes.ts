import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'employees',
        loadChildren: () => import('./employees/employees.routes')
    },
    {
        path: '**',
        redirectTo: ''  
    }
];
