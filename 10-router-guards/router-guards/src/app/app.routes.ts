import { Routes } from '@angular/router';
import { canActivateChildGuard } from './guard/can-activate-child.guard';

export const routes: Routes = [
  {
    path: 'usuario',
    loadComponent: () =>
      import('./layout/header/header.component').then((r) => r.HeaderComponent),
    loadChildren: () => import('./pages.routes').then((r) => r.pages),
    canActivateChild : [canActivateChildGuard]
  },
  {
    path: '',
    title: 'Login',
    loadComponent: () =>
      import('./pages/login/login.component').then((r) => r.LoginComponent),
  },
  {
    path: 'login',
    title: 'Login',
    loadComponent: () =>
      import('./pages/login/login.component').then((r) => r.LoginComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (r) => r.NotFoundComponent
      ),
  },
];
