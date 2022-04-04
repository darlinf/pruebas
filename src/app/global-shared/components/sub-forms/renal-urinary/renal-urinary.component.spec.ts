import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenalUrinaryComponent } from './renal-urinary.component';

describe('RenalUrinaryComponent', () => {
  let component: RenalUrinaryComponent;
  let fixture: ComponentFixture<RenalUrinaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenalUrinaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenalUrinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
