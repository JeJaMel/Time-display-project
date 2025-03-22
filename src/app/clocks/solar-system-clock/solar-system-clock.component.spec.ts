import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarSystemClockComponent } from './solar-system-clock.component';

describe('SolarSystemClockComponent', () => {
  let component: SolarSystemClockComponent;
  let fixture: ComponentFixture<SolarSystemClockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolarSystemClockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarSystemClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
