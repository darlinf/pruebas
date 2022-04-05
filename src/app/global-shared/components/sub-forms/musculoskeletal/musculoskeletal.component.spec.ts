import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusculoskeletalComponent } from './musculoskeletal.component';

describe('MusculoskeletalComponent', () => {
  let component: MusculoskeletalComponent;
  let fixture: ComponentFixture<MusculoskeletalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusculoskeletalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusculoskeletalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
