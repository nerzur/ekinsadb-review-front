import { TestBed } from '@angular/core/testing';

import { EkinDbReviewApiRestService } from './ekin-db-review-api-rest.service';

describe('EkinDbReviewApiRestService', () => {
  let service: EkinDbReviewApiRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EkinDbReviewApiRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
