import { TestBed } from '@angular/core/testing';

import { FormArrayGeneratorService } from './form-array-generator.service';

describe('FormArrayGeneratorService', () => {
  let service: FormArrayGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormArrayGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
