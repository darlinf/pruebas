import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDialogDeleteRoleComponent } from './base-dialog-delete-role.component';

describe('BaseDialogDeleteRoleComponent', () => {
  let component: BaseDialogDeleteRoleComponent;
  let fixture: ComponentFixture<BaseDialogDeleteRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseDialogDeleteRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDialogDeleteRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
