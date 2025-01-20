import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
},
{
    path: 'todoes',
    pathMatch: 'full',
    loadComponent: () => import('./todoes/todoes.component').then(c => c.TodoesComponent)
},
];

