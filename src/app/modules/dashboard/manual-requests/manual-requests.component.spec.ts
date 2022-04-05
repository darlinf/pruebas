import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualRequestsComponent } from './manual-requests.component';

describe('ManualRequestsComponent', () => {
  let component: ManualRequestsComponent;
  let fixture: ComponentFixture<ManualRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
