import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerOnlymonthComponent } from './date-picker-onlymonth.component';

describe('DatePickerOnlymonthComponent', () => {
  let component: DatePickerOnlymonthComponent;
  let fixture: ComponentFixture<DatePickerOnlymonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePickerOnlymonthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerOnlymonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
