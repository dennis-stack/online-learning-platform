import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { approverGuard } from './approver.guard';

describe('approverGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => approverGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
