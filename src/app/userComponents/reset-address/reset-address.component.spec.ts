import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetAddressComponent } from './reset-address.component';

describe('ResetAddressComponent', () => {
  let component: ResetAddressComponent;
  let fixture: ComponentFixture<ResetAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
