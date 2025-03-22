import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TetrisClockComponent } from './tetris-clock.component';

describe('TetrisClockComponent', () => {
  let component: TetrisClockComponent;
  let fixture: ComponentFixture<TetrisClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TetrisClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TetrisClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
