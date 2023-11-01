import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigRedButtonComponent } from './big-red-button.component';

describe('BigRedButtonComponent', () => {
  let component: BigRedButtonComponent;
  let fixture: ComponentFixture<BigRedButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BigRedButtonComponent]
    });
    fixture = TestBed.createComponent(BigRedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
