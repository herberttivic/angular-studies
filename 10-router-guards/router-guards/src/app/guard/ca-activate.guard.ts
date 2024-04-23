import { CanActivateFn } from '@angular/router';

export const caActivateGuard: CanActivateFn = (route, state) => {
  return false;
};
