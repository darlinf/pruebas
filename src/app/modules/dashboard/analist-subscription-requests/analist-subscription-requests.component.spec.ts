import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalistSubscriptionRequestsComponent } from './analist-subscription-requests.component';

describe('AnalistSubscriptionRequestsComponent', () => {
  let component: AnalistSubscriptionRequestsComponent;
  let fixture: ComponentFixture<AnalistSubscriptionRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalistSubscriptionRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalistSubscriptionRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
