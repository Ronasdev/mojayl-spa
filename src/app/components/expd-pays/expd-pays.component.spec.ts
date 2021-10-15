import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpdPaysComponent } from './expd-pays.component';

describe('ExpdPaysComponent', () => {
  let component: ExpdPaysComponent;
  let fixture: ComponentFixture<ExpdPaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpdPaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpdPaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
