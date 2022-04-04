import { TestBed } from '@angular/core/testing';

import { GlobalSharedServicesService } from './global-shared-services.service';

describe('GlobalSharedServicesService', () => {
  let service: GlobalSharedServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalSharedServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
