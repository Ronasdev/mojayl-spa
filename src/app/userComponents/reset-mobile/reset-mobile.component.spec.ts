import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetMobileComponent } from './reset-mobile.component';

describe('ResetMobileComponent', () => {
  let component: ResetMobileComponent;
  let fixture: ComponentFixture<ResetMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
