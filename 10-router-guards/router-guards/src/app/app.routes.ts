import { Routes } from '@angular/router';
import { canActivateChildGuard } from './guard/can-activate-child.guard';
import { canMatchGuard } from './guard/can-match.guard';
import { canDeactivateGuardGuard } from './guard/can-deactivate-guard.guard';

export const routes: Routes = [
  {
    path: 'usuario',
    loadComponent: () =>
      import('./layout/header/header.component').then((r) => r.HeaderComponent),
    loadChildren: () => import('./pages.routes').then((r) => r.pages),
    // canActivateChild : [canActivateChildGuard]
    canMatch : [canMatchGuard]
  },
  {
    path: '',
    title: 'Login',
    loadComponent: () =>
      import('./pages/login/login.component').then((r) => r.LoginComponent),
  },
  {
    path: 'servicos',
    title: 'Servicos',
    loadComponent: () =>
      import('./pages/servicos/servicos.component').then((r) => r.ServicosComponent),
    canDeactivate : [canDeactivateGuardGuard]
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then(
        (r) => r.NotFoundComponent
      ),
  },
];
