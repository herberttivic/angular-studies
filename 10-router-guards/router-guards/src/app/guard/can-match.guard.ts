import { CanMatchFn } from '@angular/router';

export const canMatchGuard: CanMatchFn = (route, segments) => {
  // faz tanto o papel do canActivateChild quanto do canActivate
  // porém ele leva para a rota not-found caso não seja permitido o acesso
  return false;
};
