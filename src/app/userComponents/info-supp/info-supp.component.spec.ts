import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSuppComponent } from './info-supp.component';

describe('InfoSuppComponent', () => {
  let component: InfoSuppComponent;
  let fixture: ComponentFixture<InfoSuppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSuppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoSuppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
