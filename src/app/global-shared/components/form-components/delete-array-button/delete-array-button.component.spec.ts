import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteArrayButtonComponent } from './delete-array-button.component';

describe('DeleteArrayButtonComponent', () => {
  let component: DeleteArrayButtonComponent;
  let fixture: ComponentFixture<DeleteArrayButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteArrayButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteArrayButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
