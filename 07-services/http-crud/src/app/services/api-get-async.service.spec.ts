import { TestBed } from '@angular/core/testing';

import { ApiGetAsyncService } from './api-get-async.service';

describe('ApiGetAsyncService', () => {
  let service: ApiGetAsyncService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGetAsyncService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
