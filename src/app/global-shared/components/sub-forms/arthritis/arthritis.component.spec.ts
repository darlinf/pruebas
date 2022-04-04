import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArthritisComponent } from './arthritis.component';

describe('ArthritisComponent', () => {
  let component: ArthritisComponent;
  let fixture: ComponentFixture<ArthritisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArthritisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArthritisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
