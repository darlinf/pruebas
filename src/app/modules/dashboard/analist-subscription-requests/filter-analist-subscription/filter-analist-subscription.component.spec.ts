import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAnalistSubscriptionComponent } from './filter-analist-subscription.component';

describe('FilterAnalistSubscriptionComponent', () => {
  let component: FilterAnalistSubscriptionComponent;
  let fixture: ComponentFixture<FilterAnalistSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterAnalistSubscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAnalistSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
