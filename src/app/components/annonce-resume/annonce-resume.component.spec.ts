import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnonceResumeComponent } from './annonce-resume.component';

describe('AnnonceResumeComponent', () => {
  let component: AnnonceResumeComponent;
  let fixture: ComponentFixture<AnnonceResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnonceResumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnonceResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
