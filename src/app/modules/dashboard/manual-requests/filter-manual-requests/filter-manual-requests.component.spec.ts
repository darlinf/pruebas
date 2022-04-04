import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterManualRequestsComponent } from './filter-manual-requests.component';

describe('FilterManualRequestsComponent', () => {
  let component: FilterManualRequestsComponent;
  let fixture: ComponentFixture<FilterManualRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterManualRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterManualRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
