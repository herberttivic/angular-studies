import { TestBed } from '@angular/core/testing';

import { ApiGetSubscribeService } from './api-get-subscribe.service';

describe('ApiGetSubscribeService', () => {
  let service: ApiGetSubscribeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGetSubscribeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
