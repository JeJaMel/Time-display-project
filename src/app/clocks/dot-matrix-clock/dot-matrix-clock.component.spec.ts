import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DotMatrixClockComponent } from './dot-matrix-clock.component';

describe('DotMatrixClockComponent', () => {
  let component: DotMatrixClockComponent;
  let fixture: ComponentFixture<DotMatrixClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DotMatrixClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DotMatrixClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
