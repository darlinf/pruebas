import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDialogUsersComponent } from './base-dialog-users.component';

describe('BaseDialogUsersComponent', () => {
  let component: BaseDialogUsersComponent;
  let fixture: ComponentFixture<BaseDialogUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseDialogUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDialogUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
