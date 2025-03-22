import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MorseCodeClockComponent } from './morse-code-clock.component';

describe('MorseCodeClockComponent', () => {
  let component: MorseCodeClockComponent;
  let fixture: ComponentFixture<MorseCodeClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MorseCodeClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MorseCodeClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
