import { TestBed } from '@angular/core/testing';

import { DialogOptionService } from './dialog-option.service';

describe('DialogOptionService', () => {
  let service: DialogOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
