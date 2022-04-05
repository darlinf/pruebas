import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MountaineeringComponent } from './mountaineering.component';

describe('MountaineeringComponent', () => {
  let component: MountaineeringComponent;
  let fixture: ComponentFixture<MountaineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MountaineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MountaineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
