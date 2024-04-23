import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { caActivateGuard } from './ca-activate.guard';

describe('caActivateGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => caActivateGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
