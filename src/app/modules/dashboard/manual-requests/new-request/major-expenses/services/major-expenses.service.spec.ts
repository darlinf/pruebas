import { TestBed } from '@angular/core/testing';

import { MajorExpensesService } from './major-expenses.service';

describe('MajorExpensesService', () => {
  let service: MajorExpensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MajorExpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
