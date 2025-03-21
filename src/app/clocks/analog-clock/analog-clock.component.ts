import { Component, Input, OnChanges, SimpleChanges, Inject } from '@angular/core';
import { ClockDisplay, CLOCK_DISPLAY } from '../clock-display.interface';

@Component({
  selector: 'app-analog-clock',
  templateUrl: './analog-clock.component.html',
  styleUrls: ['./analog-clock.component.css'],
  providers: [{ provide: CLOCK_DISPLAY, useExisting: AnalogClockComponent }],

})
export class AnalogClockComponent implements ClockDisplay, OnChanges {
  @Input() time: Date = new Date();

  hourRotation = 0;
  minuteRotation = 0;
  secondRotation = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['time']) {
      this.updateTime(this.time);
    }
  }

  updateTime(time: Date): void {
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();

      this.hourRotation = (hours % 12 + minutes / 60) * 30;
      this.minuteRotation = (minutes + seconds / 60) * 6;
      this.secondRotation = seconds * 6;
  }
}