import { TestBed } from '@angular/core/testing';

import { ApiGetSignalService } from './api-get-signal.service';

describe('ApiGetSignalService', () => {
  let service: ApiGetSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGetSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
