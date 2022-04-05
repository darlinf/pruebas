import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorExpensesComponent } from './major-expenses.component';

describe('MajorExpensesComponent', () => {
  let component: MajorExpensesComponent;
  let fixture: ComponentFixture<MajorExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajorExpensesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MajorExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
