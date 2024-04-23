import { CanActivateChildFn } from '@angular/router';

export const canActivateChildGuard: CanActivateChildFn = (childRoute, state) => {
  console.log(childRoute)
  console.log(state);
  return false;
};
