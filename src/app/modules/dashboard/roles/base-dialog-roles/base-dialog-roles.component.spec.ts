import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseDialogRolesComponent } from './base-dialog-roles.component';

describe('BaseDialogComponent', () => {
  let component: BaseDialogRolesComponent;
  let fixture: ComponentFixture<BaseDialogRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaseDialogRolesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseDialogRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
