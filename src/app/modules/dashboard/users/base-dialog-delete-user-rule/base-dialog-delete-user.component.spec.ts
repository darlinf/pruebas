import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDialogDeleteUserComponent } from './base-dialog-delete-user.component';

describe('BaseDialogDeleteUserComponent', () => {
  let component: BaseDialogDeleteUserComponent;
  let fixture: ComponentFixture<BaseDialogDeleteUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseDialogDeleteUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDialogDeleteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
