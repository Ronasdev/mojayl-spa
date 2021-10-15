import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpdVilleComponent } from './expd-ville.component';

describe('ExpdVilleComponent', () => {
  let component: ExpdVilleComponent;
  let fixture: ComponentFixture<ExpdVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpdVilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpdVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
