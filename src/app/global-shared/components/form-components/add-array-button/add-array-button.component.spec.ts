import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArrayButtonComponent } from './add-array-button.component';

describe('AddArrayButtonComponent', () => {
  let component: AddArrayButtonComponent;
  let fixture: ComponentFixture<AddArrayButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArrayButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArrayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
