import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MellitusDiabetesComponent } from './mellitus-diabetes.component';

describe('MellitusDiabetesComponent', () => {
  let component: MellitusDiabetesComponent;
  let fixture: ComponentFixture<MellitusDiabetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MellitusDiabetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MellitusDiabetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
