import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Customise1Component } from './customise1.component';

describe('Customise1Component', () => {
  let component: Customise1Component;
  let fixture: ComponentFixture<Customise1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Customise1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Customise1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
