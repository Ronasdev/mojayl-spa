import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingConditionsComponent } from './using-conditions.component';

describe('UsingConditionsComponent', () => {
  let component: UsingConditionsComponent;
  let fixture: ComponentFixture<UsingConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingConditionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
