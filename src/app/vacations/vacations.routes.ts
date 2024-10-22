import { Routes } from "@angular/router";

export default [
{
    path: '',
    loadComponent : () => import('./vacations.component')
}
] as Routes