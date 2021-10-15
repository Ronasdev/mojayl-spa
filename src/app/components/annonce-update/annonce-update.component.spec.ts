import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceUpdateComponent } from './annonce-update.component';

describe('AnnonceUpdateComponent', () => {
  let component: AnnonceUpdateComponent;
  let fixture: ComponentFixture<AnnonceUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
