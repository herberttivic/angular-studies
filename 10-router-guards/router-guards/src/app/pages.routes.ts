import { Routes } from '@angular/router';

export const pages: Routes = [
  {
    path: '',
    title: 'Home',
    loadComponent: () =>
      import('./pages/home/home.component').then((r) => r.HomeComponent)
  },
  {
    path: 'contact',
    title: 'Contato',
    loadComponent: () =>
      import('./pages/contacts/contacts.component').then(
        (r) => r.ContactsComponent
      ),
  },
  {
    path: 'about',
    title: 'Sobre',
    loadComponent: () =>
      import('./pages/about/about.component').then((r) => r.AboutComponent),
    // canActivate : [caActivateGuard]
  },
];
