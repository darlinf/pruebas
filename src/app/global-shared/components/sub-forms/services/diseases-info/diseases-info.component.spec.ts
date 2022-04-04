import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiseasesInfoComponent } from './diseases-info.component';

describe('DiseasesInfoComponent', () => {
  let component: DiseasesInfoComponent;
  let fixture: ComponentFixture<DiseasesInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiseasesInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiseasesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
