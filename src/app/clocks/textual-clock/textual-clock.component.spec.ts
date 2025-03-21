import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextualClockComponent } from './textual-clock.component';

describe('TextualClockComponent', () => {
  let component: TextualClockComponent;
  let fixture: ComponentFixture<TextualClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextualClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextualClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
