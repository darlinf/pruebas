import { TestBed } from '@angular/core/testing';

import { DisabilityService } from './disability.service';

describe('DisabilityService', () => {
  let service: DisabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
