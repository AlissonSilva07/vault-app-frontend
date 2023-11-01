import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscreteButtonComponent } from './discrete-button.component';

describe('DiscreteButtonComponent', () => {
  let component: DiscreteButtonComponent;
  let fixture: ComponentFixture<DiscreteButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DiscreteButtonComponent]
    });
    fixture = TestBed.createComponent(DiscreteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
