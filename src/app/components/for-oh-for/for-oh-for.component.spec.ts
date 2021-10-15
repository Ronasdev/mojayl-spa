import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForOhForComponent } from './for-oh-for.component';

describe('ForOhForComponent', () => {
  let component: ForOhForComponent;
  let fixture: ComponentFixture<ForOhForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForOhForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForOhForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
