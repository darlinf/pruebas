import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkydivingComponent } from './skydiving.component';

describe('SkydivingComponent', () => {
  let component: SkydivingComponent;
  let fixture: ComponentFixture<SkydivingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkydivingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkydivingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
