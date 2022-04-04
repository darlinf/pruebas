import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProstaticComponent } from './prostatic.component';

describe('ProstaticComponent', () => {
  let component: ProstaticComponent;
  let fixture: ComponentFixture<ProstaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProstaticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProstaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
