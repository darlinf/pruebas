import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowYourClientComponent } from './know-your-client.component';

describe('KnowYourClientComponent', () => {
  let component: KnowYourClientComponent;
  let fixture: ComponentFixture<KnowYourClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowYourClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowYourClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
