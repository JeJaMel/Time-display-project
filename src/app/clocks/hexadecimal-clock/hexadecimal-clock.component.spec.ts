import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HexadecimalClockComponent } from './hexadecimal-clock.component';

describe('HexadecimalClockComponent', () => {
  let component: HexadecimalClockComponent;
  let fixture: ComponentFixture<HexadecimalClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HexadecimalClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HexadecimalClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
